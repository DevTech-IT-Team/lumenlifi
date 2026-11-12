# Google Sheets Contact & Academy Form Integration Guide

This document contains the step-by-step instructions and Google Apps Script code for connecting the Lumen LiFi website form (`Contact` and `Academy`) to Google Sheets.

---

## 1. Fields Written to Google Sheet

| Column Header | Source Field | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Submitted At** | Server Generated | Date & Time | Yes | Auto-stamped by Apps Script on receipt |
| **First Name** | `firstName` | Text | Yes | User's first name |
| **Last Name** | `lastName` | Text | Yes | User's last name |
| **Phone** | `phone` | Phone | Yes | Includes selected country code |
| **Email** | `email` | Email | Yes | Validated email address |
| **Primary Goal** | `primaryGoal` | Dropdown | No | `I want to learn about Li-Fi`, `I want to become a certified reseller`, `I want to join the community`, `I want to explore industry applications` |
| **Consent Agreed** | `consent` | Checkbox | Yes | `Yes` / `No` |
| **Source** | `source` | Metadata | Auto | `Contact Page` or `Academy Page` |

---

## 2. Step-by-Step Setup Instructions

### Step 1: Open Google Sheets
1. Create a new Google Sheet (or open your existing inquiries spreadsheet).
2. Name it e.g. `Lumen LiFi - Contact Submissions`.
3. In the top menu bar, click **Extensions** ➔ **Apps Script**.

### Step 2: Paste the Integration Script
1. Delete any boilerplate code inside the script editor (such as `function myFunction() {}`).
2. Copy and paste the entire contents of [`scripts/google-apps-script-contact-form.js`](./scripts/google-apps-script-contact-form.js).
3. Press **Save** (`Ctrl + S` or `Cmd + S`).

### Step 3: Run Setup Once
1. In the toolbar at the top of Apps Script, select **`setupContactSheet`** in the function dropdown.
2. Click **Run**.
3. When prompted for permissions:
   - Click **Review Permissions**.
   - Choose your Google account.
   - Click **Advanced** ➔ **Go to (Untitled project) (unsafe)** ➔ **Allow**.
4. Switch back to your Google Sheet: you will see row 1 formatted with bold headers:
   `Submitted At` | `First Name` | `Last Name` | `Phone` | `Email` | `Primary Goal` | `Consent Agreed` | `Source`

### Step 4: Deploy as Public Web App
1. At the top-right of the Apps Script window, click **Deploy** ➔ **New deployment**.
2. Click the gear icon next to **Select type** and choose **Web app**.
3. Configure:
   - **Description**: `Lumen LiFi Contact Form API`
   - **Execute as**: `Me (<your-email>)`
   - **Who has access**: `Anyone` *(Required so website visitors can submit without signing in)*
4. Click **Deploy**.
5. Copy the generated **Web app URL** (ending in `/exec`).

### Step 5: Add Web App URL to `.env.local`
Open `.env.local` in the project root and paste your Web app URL:

```env
NEXT_PUBLIC_CONTACT_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

> **Note:** On your live server (`/var/www/lumenlifi`), also create/update `.env.local` (or `.env`) with `NEXT_PUBLIC_CONTACT_SCRIPT_URL=...` and run `npm run build` before restarting the app, because `NEXT_PUBLIC_*` environment variables are inlined at build time.

