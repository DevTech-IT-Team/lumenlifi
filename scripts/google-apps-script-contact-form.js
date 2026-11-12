/**
 * ============================================================================
 * LUMEN LIFI - CONTACT & ACADEMY FORM TO GOOGLE SHEETS INTEGRATION
 * ============================================================================
 *
 * Purpose:
 *   Receives form inquiries from the Lumen LiFi website (Contact & Academy
 *   forms) and appends verified, sanitized records into a Google Spreadsheet.
 *
 * Fields Recorded in Google Sheet:
 *   1. Submitted At   (Generated automatically on receipt)
 *   2. First Name     (Required)
 *   3. Last Name      (Required)
 *   4. Phone          (Required - includes country dial code)
 *   5. Email          (Required - validated email format)
 *   6. Primary Goal   (Dropdown:
 *                        - I want to learn about Li-Fi
 *                        - I want to become a certified reseller
 *                        - I want to join the community
 *                        - I want to explore industry applications)
 *   7. Consent Agreed (Yes / No)
 *   8. Source         (Contact Page / Academy Page)
 *
 * Highlights:
 *   - Zero manual setup: Automatically creates headers if sheet is empty.
 *   - Auto-finds tab: Works on 'Contact submissions', 'Sheet1', or active tab.
 *   - Concurrency Lock: Prevents row-write conflicts under simultaneous traffic.
 *   - Formula Injection Mitigation: Escapes dangerous leading characters (=, +, -, @).
 *   - Input Sanitization: Enforces maximum string lengths and trimming.
 *   - Accepts both Form-URL-encoded and JSON payloads.
 * ============================================================================
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * OPTIONAL: Only needed if this script is created as a standalone script at script.google.com.
 * If opened directly from Google Sheets (Extensions > Apps Script), leave empty ('').
 */
const SPREADSHEET_ID_OR_URL = '';

/**
 * Preferred tab name in Google Sheets. If not found, falls back to the first sheet tab.
 */
const SHEET_TAB_NAME = 'Contact submissions';

/**
 * Expected columns and header order in the Sheet tab.
 */
const EXPECTED_HEADERS = [
  'Submitted At',
  'First Name',
  'Last Name',
  'Phone',
  'Email',
  'Primary Goal',
  'Consent Agreed',
  'Source'
];

/**
 * Allowed Primary Goal dropdown options (matches website form options).
 */
const VALID_PRIMARY_GOALS = [
  'I want to learn about Li-Fi',
  'I want to become a certified reseller',
  'I want to join the community',
  'I want to explore industry applications'
];

/**
 * Field length validation limits to prevent payload abuse.
 */
const FIELD_LIMITS = {
  FIRST_NAME: 100,
  LAST_NAME: 100,
  PHONE: 50,
  EMAIL: 254,
  PRIMARY_GOAL: 150,
  CONSENT: 20,
  SOURCE: 100
};

// ============================================================================
// 1. ONE-TIME INITIALIZATION FUNCTION (OPTIONAL - SCRIPT AUTO-INITIALIZES TOO)
// ============================================================================

function setupContactSheet() {
  const spreadsheet = resolveSpreadsheet_();
  const sheet = ensureHeadersExist_(resolveTargetSheet_(spreadsheet));
  PropertiesService.getScriptProperties().setProperty(
    'CONTACT_SPREADSHEET_ID',
    spreadsheet.getId()
  );
  Logger.log(
    'Setup successfully completed! Target Sheet: ' +
      spreadsheet.getUrl() +
      ' (Tab: ' +
      sheet.getName() +
      ')'
  );
}

// ============================================================================
// 2. HTTP HANDLERS (WEB APP ENDPOINTS)
// ============================================================================

/**
 * GET Handler: Health check endpoint.
 */
function doGet() {
  return createJsonResponse_({
    ok: true,
    status: 'ONLINE',
    message: 'Lumen LiFi Contact Form endpoint is operational.'
  });
}

/**
 * POST Handler: Processes incoming website form submissions.
 */
function doPost(e) {
  try {
    // 1. Resolve spreadsheet
    const spreadsheet = resolveSpreadsheet_();
    const sheet = ensureHeadersExist_(resolveTargetSheet_(spreadsheet));

    // 2. Extract incoming fields (support both URL-encoded and JSON body)
    let params = {};
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      params = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      try {
        params = JSON.parse(e.postData.contents);
      } catch (err) {
        const searchParams = new URLSearchParams(e.postData.contents);
        for (const [key, val] of searchParams.entries()) {
          params[key] = val;
        }
      }
    }

    const firstName = sanitizeInput_(
      params.firstName || params.first_name || params['First Name'],
      FIELD_LIMITS.FIRST_NAME
    );
    const lastName = sanitizeInput_(
      params.lastName || params.last_name || params['Last Name'],
      FIELD_LIMITS.LAST_NAME
    );
    const phone = sanitizeInput_(
      params.phone || params['Phone'],
      FIELD_LIMITS.PHONE
    );
    const email = sanitizeInput_(
      params.email || params['Email'],
      FIELD_LIMITS.EMAIL
    );
    const rawPrimaryGoal = sanitizeInput_(
      params.primaryGoal || params.primary_goal || params['Primary Goal'],
      FIELD_LIMITS.PRIMARY_GOAL
    );
    const primaryGoal =
      !rawPrimaryGoal || VALID_PRIMARY_GOALS.indexOf(rawPrimaryGoal) !== -1
        ? rawPrimaryGoal
        : rawPrimaryGoal;
    const rawConsent = sanitizeInput_(
      params.consent || params['Consent Agreed'],
      FIELD_LIMITS.CONSENT
    );
    const consent =
      rawConsent.toLowerCase() === 'true' || rawConsent.toLowerCase() === 'yes'
        ? 'Yes'
        : 'No';
    const source =
      sanitizeInput_(params.source || params['Source'], FIELD_LIMITS.SOURCE) ||
      'Website Form';

    // 3. Validation checks
    if (!firstName || !lastName || !phone || !email) {
      return createJsonResponse_({
        ok: false,
        error: 'Missing required fields: First Name, Last Name, Phone, and Email are mandatory.'
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return createJsonResponse_({
        ok: false,
        error: 'Invalid email address format.'
      });
    }

    // 4. Thread-safe row insertion using LockService
    const lock = LockService.getScriptLock();
    lock.waitLock(10000); // Wait up to 10 seconds

    try {
      const headerMap = getHeaderMap_(sheet);
      const totalCols = Math.max(sheet.getLastColumn(), EXPECTED_HEADERS.length);
      const newRow = new Array(totalCols).fill('');

      newRow[headerMap.timestamp - 1] = new Date();
      newRow[headerMap.firstName - 1] = preventFormulaInjection_(firstName);
      newRow[headerMap.lastName - 1] = preventFormulaInjection_(lastName);
      newRow[headerMap.phone - 1] = preventFormulaInjection_(phone);
      newRow[headerMap.email - 1] = preventFormulaInjection_(email);
      newRow[headerMap.primaryGoal - 1] = preventFormulaInjection_(primaryGoal);
      newRow[headerMap.consent - 1] = preventFormulaInjection_(consent);
      newRow[headerMap.source - 1] = preventFormulaInjection_(source);

      sheet.appendRow(newRow);
    } finally {
      lock.releaseLock();
    }

    return createJsonResponse_({
      ok: true,
      message: 'Submission successfully recorded.'
    });
  } catch (error) {
    console.error('Submission Processing Error: ', error);
    return createJsonResponse_({
      ok: false,
      error: error && error.message ? error.message : String(error)
    });
  }
}

// ============================================================================
// 3. UTILITY & SECURITY HELPERS
// ============================================================================

/**
 * Resolves the active or linked Spreadsheet instance.
 */
function resolveSpreadsheet_() {
  let spreadsheetId = PropertiesService.getScriptProperties().getProperty('CONTACT_SPREADSHEET_ID');

  if (spreadsheetId) {
    try {
      return SpreadsheetApp.openById(spreadsheetId);
    } catch (e) {
      // ignore and try next
    }
  }

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss && SPREADSHEET_ID_OR_URL && SPREADSHEET_ID_OR_URL.trim() !== '') {
    const raw = SPREADSHEET_ID_OR_URL.trim();
    const idMatch = raw.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const id = idMatch ? idMatch[1] : raw;
    ss = SpreadsheetApp.openById(id);
  }

  if (!ss) {
    throw new Error(
      'Target spreadsheet could not be found. Please open Apps Script directly from the sheet (Extensions > Apps Script), or set SPREADSHEET_ID_OR_URL.'
    );
  }

  try {
    PropertiesService.getScriptProperties().setProperty('CONTACT_SPREADSHEET_ID', ss.getId());
  } catch (e) {}

  return ss;
}

/**
 * Resolves the target sheet tab ('Contact submissions' or creates/falls back to first tab).
 */
function resolveTargetSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_TAB_NAME);
  if (!sheet) {
    sheet = spreadsheet.getSheets()[0];
  }
  return sheet;
}

/**
 * Ensures header row exists. If empty, automatically appends EXPECTED_HEADERS.
 */
function ensureHeadersExist_(sheet) {
  if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    sheet.appendRow(EXPECTED_HEADERS);
    const headerRange = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#EBF5FF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Dynamically maps column positions by header names (case-insensitive).
 */
function getHeaderMap_(sheet) {
  const headers = sheet
    .getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
    .getDisplayValues()[0]
    .map(function (header) {
      return String(header).trim().toLowerCase();
    });

  const aliases = {
    timestamp: ['submitted at', 'timestamp', 'date', 'time'],
    firstName: ['first name', 'firstname', 'first_name'],
    lastName: ['last name', 'lastname', 'last_name'],
    phone: ['phone', 'phone number', 'contact', 'mobile'],
    email: ['email', 'email address'],
    primaryGoal: ['primary goal', 'primarygoal', 'primary_goal', 'goal'],
    consent: ['consent agreed', 'consent', 'terms agreed'],
    source: ['source', 'form source', 'page']
  };

  const headerMap = {};
  const missing = [];

  Object.keys(aliases).forEach(function (key) {
    const matchedColIndex = headers.findIndex(function (h) {
      return aliases[key].indexOf(h) !== -1;
    });

    if (matchedColIndex !== -1) {
      headerMap[key] = matchedColIndex + 1; // 1-based index
    } else {
      missing.push(key);
    }
  });

  // If headers were missing or unrecognized, reset headers cleanly if sheet only has 1 row
  if (missing.length > 0) {
    if (sheet.getLastRow() <= 1) {
      sheet.clear();
      sheet.appendRow(EXPECTED_HEADERS);
      const headerRange = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#EBF5FF');
      sheet.setFrozenRows(1);

      return {
        timestamp: 1,
        firstName: 2,
        lastName: 3,
        phone: 4,
        email: 5,
        primaryGoal: 6,
        consent: 7,
        source: 8
      };
    }

    // Append missing columns to preserve existing rows
    missing.forEach(function (key) {
      const colIdx = sheet.getLastColumn() + 1;
      const labelMap = {
        timestamp: 'Submitted At',
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone',
        email: 'Email',
        primaryGoal: 'Primary Goal',
        consent: 'Consent Agreed',
        source: 'Source'
      };
      const cell = sheet.getRange(1, colIdx);
      cell.setValue(labelMap[key]);
      cell.setFontWeight('bold');
      cell.setBackground('#EBF5FF');
      headerMap[key] = colIdx;
    });
  }

  return headerMap;
}

/**
 * Sanitizes input string and restricts maximum character length.
 */
function sanitizeInput_(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

/**
 * Prevents formula injection (CSV/Spreadsheet injection) and preserves leading '+' on phone numbers.
 */
function preventFormulaInjection_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

/**
 * Helper to build JSON responses.
 */
function createJsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

