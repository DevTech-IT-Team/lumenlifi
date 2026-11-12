import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Mail } from 'lucide-react';

const COUNTRY_CODES = [
  { code: 'US', dial: '+1', name: 'United States' },
  { code: 'IN', dial: '+91', name: 'India' },
  { code: 'GB', dial: '+44', name: 'United Kingdom' },
  { code: 'CA', dial: '+1', name: 'Canada' },
  { code: 'AU', dial: '+61', name: 'Australia' },
  { code: 'AE', dial: '+971', name: 'United Arab Emirates' },
  { code: 'DE', dial: '+49', name: 'Germany' },
  { code: 'FR', dial: '+33', name: 'France' },
  { code: 'SG', dial: '+65', name: 'Singapore' },
];

function CountryFlag({ code, className = 'h-3.5 w-5 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]' }) {
  switch (code) {
    case 'US':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="16" fill="#FFFFFF" />
          <rect y="0" width="24" height="1.23" fill="#B22234" />
          <rect y="2.46" width="24" height="1.23" fill="#B22234" />
          <rect y="4.92" width="24" height="1.23" fill="#B22234" />
          <rect y="7.38" width="24" height="1.23" fill="#B22234" />
          <rect y="9.84" width="24" height="1.23" fill="#B22234" />
          <rect y="12.3" width="24" height="1.23" fill="#B22234" />
          <rect y="14.77" width="24" height="1.23" fill="#B22234" />
          <rect width="10.5" height="8.6" fill="#3C3B6E" />
          <circle cx="2.2" cy="2" r="0.55" fill="#FFFFFF" />
          <circle cx="5.2" cy="2" r="0.55" fill="#FFFFFF" />
          <circle cx="8.2" cy="2" r="0.55" fill="#FFFFFF" />
          <circle cx="3.7" cy="4.3" r="0.55" fill="#FFFFFF" />
          <circle cx="6.7" cy="4.3" r="0.55" fill="#FFFFFF" />
          <circle cx="2.2" cy="6.6" r="0.55" fill="#FFFFFF" />
          <circle cx="5.2" cy="6.6" r="0.55" fill="#FFFFFF" />
          <circle cx="8.2" cy="6.6" r="0.55" fill="#FFFFFF" />
        </svg>
      );
    case 'IN':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="5.33" y="0" fill="#FF9933" />
          <rect width="24" height="5.34" y="5.33" fill="#FFFFFF" />
          <rect width="24" height="5.33" y="10.67" fill="#138808" />
          <circle cx="12" cy="8" r="1.9" fill="none" stroke="#000080" strokeWidth="0.7" />
          <circle cx="12" cy="8" r="0.45" fill="#000080" />
        </svg>
      );
    case 'GB':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.4" />
          <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="5" />
          <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3" />
        </svg>
      );
    case 'CA':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="6" height="16" x="0" fill="#FF0000" />
          <rect width="12" height="16" x="6" fill="#FFFFFF" />
          <rect width="6" height="16" x="18" fill="#FF0000" />
          <path d="M12 3.5L13 6.2L15.4 5.6L14.2 8L15.8 9.2L13.5 9.8L13.8 11.8H10.2L10.5 9.8L8.2 9.2L9.8 8L8.6 5.6L11 6.2Z" fill="#FF0000" />
        </svg>
      );
    case 'AU':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="16" fill="#00008B" />
          <rect width="11" height="8" fill="#012169" />
          <path d="M5.5 0V8M0 4H11" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M5.5 0V8M0 4H11" stroke="#C8102E" strokeWidth="1.1" />
          <circle cx="17.5" cy="4.5" r="0.9" fill="#FFFFFF" />
          <circle cx="20.5" cy="7.5" r="0.9" fill="#FFFFFF" />
          <circle cx="17.5" cy="11.5" r="1.1" fill="#FFFFFF" />
          <circle cx="5.5" cy="12" r="1.3" fill="#FFFFFF" />
        </svg>
      );
    case 'AE':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="5.33" y="0" fill="#00732F" />
          <rect width="24" height="5.34" y="5.33" fill="#FFFFFF" />
          <rect width="24" height="5.33" y="10.67" fill="#000000" />
          <rect width="6.5" height="16" x="0" fill="#FF0000" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="5.33" y="0" fill="#000000" />
          <rect width="24" height="5.34" y="5.33" fill="#DD0000" />
          <rect width="24" height="5.33" y="10.67" fill="#FFCE00" />
        </svg>
      );
    case 'FR':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="8" height="16" x="0" fill="#0055A4" />
          <rect width="8" height="16" x="8" fill="#FFFFFF" />
          <rect width="8" height="16" x="16" fill="#EF4135" />
        </svg>
      );
    case 'SG':
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="8" y="0" fill="#EF3340" />
          <rect width="24" height="8" y="8" fill="#FFFFFF" />
          <circle cx="5.5" cy="4" r="2.2" fill="#FFFFFF" />
          <circle cx="6.3" cy="4" r="1.9" fill="#EF3340" />
        </svg>
      );
    default:
      return null;
  }
}

export const PRIMARY_GOAL_OPTIONS = [
  'I want to learn about Li-Fi',
  'I want to become a certified reseller',
  'I want to join the community',
  'I want to explore industry applications',
];

const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };
const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };

export default function GoogleSheetContactForm({
  source = 'Contact Page',
  onSuccess,
  className = '',
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryIso: 'US',
    countryCode: '+1',
    phone: '',
    email: '',
    primaryGoal: '',
    consent: false,
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const countryDropdownRef = useRef(null);

  useEffect(() => {
    if (!countryMenuOpen) return;
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setCountryMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [countryMenuOpen]);

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.code === formData.countryIso) || COUNTRY_CODES[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const primaryGoal = formData.primaryGoal.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nextErrors = {
      firstName: !firstName,
      lastName: !lastName,
      phone: !phone,
      email: !email || !emailRegex.test(email),
      consent: !formData.consent,
    };

    if (Object.values(nextErrors).some(Boolean)) {
      setFieldErrors(nextErrors);
      setStatus('error');
      if (nextErrors.firstName) {
        setErrorMessage('Please enter your first name.');
      } else if (nextErrors.lastName) {
        setErrorMessage('Please enter your last name.');
      } else if (nextErrors.phone) {
        setErrorMessage('Please enter your phone number.');
      } else if (!email) {
        setErrorMessage('Please enter your email address.');
      } else if (!emailRegex.test(email)) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        setErrorMessage('Please agree to the Terms & conditions and Privacy Policy to continue.');
      }
      return;
    }
    setFieldErrors({});

    const DEFAULT_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbwLTatWiO8mjSkhi_hYjtQvq4QLO-NklZbmK66XJbZnDMfsrnOA0n_3ZWV2JJHk4sOoag/exec';

    const rawScriptUrl = (process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL || '').trim();
    const scriptUrl =
      !rawScriptUrl || rawScriptUrl.includes('YOUR_DEPLOYMENT_ID')
        ? DEFAULT_SCRIPT_URL
        : rawScriptUrl;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const fullPhone = phone.startsWith('+') ? phone : `${formData.countryCode} ${phone}`;
      const params = new URLSearchParams();
      params.append('firstName', firstName);
      params.append('lastName', lastName);
      params.append('phone', fullPhone);
      params.append('email', email);
      params.append('primaryGoal', primaryGoal);
      params.append('consent', formData.consent ? 'Yes' : 'No');
      params.append('source', source);

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        countryIso: 'US',
        countryCode: '+1',
        phone: '',
        email: '',
        primaryGoal: '',
        consent: false,
      });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMessage('Failed to submit your request. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`w-full px-2 py-8 text-center sm:px-4 sm:py-10 ${className}`}>
        <div className="mx-auto flex max-w-md flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#00897B] ring-8 ring-emerald-50/70">
            <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
          </div>
          <h3 className="!m-0 !text-2xl !font-bold text-[#0D2240]" style={geist}>
            Thank you! Your details have been submitted.
          </h3>
          <p
            className="!mt-3 !mb-6 !text-sm !font-normal leading-relaxed text-[#0D2240]/70"
            style={inter}
          >
            We have received your inquiry and our team will reach out to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#00897B] px-6 !text-sm !font-semibold text-white transition-colors hover:bg-[#00796B]"
            style={inter}
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full px-1 py-2 sm:px-3 ${className}`}>
      <div className="mb-6 text-center">
        <h3
          className="!m-0 !text-[1.4rem] !font-bold leading-snug tracking-[-0.015em] text-[#0D2240] sm:!text-[1.6rem]"
          style={geist}
        >
          Light turns into Internet data.
        </h3>
        <p
          className="mx-auto !mt-2.5 !mb-0 max-w-md !text-[13.5px] !font-normal leading-relaxed text-[#0D2240]/75 sm:!text-sm"
          style={inter}
        >
          Tell us a little about yourself and what you have in mind. Whether you are at the idea
          stage or ready to build, we would love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {status === 'error' && errorMessage && (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 !text-xs !font-normal text-red-700"
            style={inter}
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* First Name */}
        <div>
          <label
            htmlFor={`firstName-${source}`}
            className="mb-1.5 block !text-[13px] !font-medium text-[#0D2240]/85"
            style={inter}
          >
            First Name {fieldErrors.firstName && <span className="text-red-500">*</span>}
          </label>
          <input
            id={`firstName-${source}`}
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className={`h-11 w-full rounded-lg border bg-white px-3.5 !text-sm !font-normal text-[#0D2240] placeholder:text-slate-400 transition-colors focus:border-[#00897B] focus:outline-none focus:ring-2 focus:ring-[#00897B]/20 ${
              fieldErrors.firstName ? 'border-red-400' : 'border-slate-200'
            }`}
            style={inter}
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor={`lastName-${source}`}
            className="mb-1.5 block !text-[13px] !font-medium text-[#0D2240]/85"
            style={inter}
          >
            Last Name {fieldErrors.lastName && <span className="text-red-500">*</span>}
          </label>
          <input
            id={`lastName-${source}`}
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className={`h-11 w-full rounded-lg border bg-white px-3.5 !text-sm !font-normal text-[#0D2240] placeholder:text-slate-400 transition-colors focus:border-[#00897B] focus:outline-none focus:ring-2 focus:ring-[#00897B]/20 ${
              fieldErrors.lastName ? 'border-red-400' : 'border-slate-200'
            }`}
            style={inter}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor={`phone-${source}`}
            className="mb-1.5 block !text-[13px] !font-medium text-[#0D2240]/85"
            style={inter}
          >
            Phone {fieldErrors.phone && <span className="text-red-500">*</span>}
          </label>
          <div
            ref={countryDropdownRef}
            className={`relative flex h-11 w-full items-center rounded-lg border bg-white transition-colors focus-within:border-[#00897B] focus-within:ring-2 focus-within:ring-[#00897B]/20 ${
              fieldErrors.phone ? 'border-red-400' : 'border-slate-200'
            }`}
          >
            <button
              type="button"
              aria-label="Select country code"
              aria-expanded={countryMenuOpen}
              onClick={() => setCountryMenuOpen((prev) => !prev)}
              className="flex h-full shrink-0 cursor-pointer items-center gap-1.5 rounded-l-lg border-r border-slate-200 bg-slate-50/60 px-2.5 text-[#0D2240] transition-colors hover:bg-slate-100/80 focus:outline-none"
            >
              <CountryFlag code={selectedCountry.code} />
              <ChevronDown className="h-3.5 w-3.5 text-slate-500" strokeWidth={2} />
            </button>

            {countryMenuOpen && (
              <div
                role="listbox"
                aria-label="Country codes"
                className="absolute left-0 top-[calc(100%+4px)] z-30 max-h-56 w-60 overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
              >
                {COUNTRY_CODES.map((c) => {
                  const isSelected = c.code === selectedCountry.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          countryIso: c.code,
                          countryCode: c.dial,
                        }));
                        setCountryMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 text-left !text-xs !font-normal transition-colors hover:bg-slate-100 ${
                        isSelected ? 'bg-[#00897B]/10 text-[#0D2240] !font-medium' : 'text-[#0D2240]'
                      }`}
                      style={inter}
                    >
                      <span className="flex items-center gap-2.5">
                        <CountryFlag code={c.code} />
                        <span>{c.name}</span>
                      </span>
                      <span className="text-slate-500">{c.dial}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <input
              id={`phone-${source}`}
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(201) 555-0123"
              className="h-full w-full rounded-r-lg bg-transparent px-3 !text-sm !font-normal text-[#0D2240] placeholder:text-slate-400 focus:outline-none"
              style={inter}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor={`email-${source}`}
            className="mb-1.5 block !text-[13px] !font-medium text-[#0D2240]/85"
            style={inter}
          >
            Email {fieldErrors.email && <span className="text-red-500">*</span>}
          </label>
          <div className="relative flex items-center">
            <Mail
              className="pointer-events-none absolute left-3.5 h-4 w-4 text-slate-400"
              strokeWidth={1.75}
            />
            <input
              id={`email-${source}`}
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`h-11 w-full rounded-lg border bg-white pl-10 pr-3.5 !text-sm !font-normal text-[#0D2240] placeholder:text-slate-400 transition-colors focus:border-[#00897B] focus:outline-none focus:ring-2 focus:ring-[#00897B]/20 ${
                fieldErrors.email ? 'border-red-400' : 'border-slate-200'
              }`}
              style={inter}
            />
          </div>
        </div>

        {/* Primary Goal */}
        <div>
          <label
            htmlFor={`primaryGoal-${source}`}
            className="mb-1.5 block !text-[13px] !font-medium text-[#0D2240]/85"
            style={inter}
          >
            Primary Goal
          </label>
          <div className="relative">
            <select
              id={`primaryGoal-${source}`}
              name="primaryGoal"
              value={formData.primaryGoal}
              onChange={handleChange}
              className={`h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-3.5 pr-10 !text-sm !font-normal transition-colors focus:border-[#00897B] focus:outline-none focus:ring-2 focus:ring-[#00897B]/20 ${
                formData.primaryGoal ? 'text-[#0D2240]' : 'text-slate-400'
              }`}
              style={inter}
            >
              <option value="" className="text-slate-400">
                Select an option
              </option>
              {PRIMARY_GOAL_OPTIONS.map((goal) => (
                <option key={goal} value={goal} className="text-[#0D2240]">
                  {goal}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              strokeWidth={1.75}
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <div className="flex items-start gap-2.5">
            <input
              id={`consent-${source}`}
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[#00897B]"
            />
            <label
              htmlFor={`consent-${source}`}
              className="cursor-pointer !text-[11.5px] !font-normal leading-relaxed text-[#0D2240]/75"
              style={inter}
            >
              By checking this box, I agree to Lumenfi&apos;s{' '}
              <Link
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="!text-[11.5px] !font-semibold text-[#0D2240] underline underline-offset-2 hover:text-[#00897B]"
              >
                Terms &amp; conditions
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="!text-[11.5px] !font-semibold text-[#0D2240] underline underline-offset-2 hover:text-[#00897B]"
              >
                Privacy Policy
              </Link>
              . I consent to receiving academy updates and class modules.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00897B] px-6 !text-sm !font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#00796B] disabled:cursor-not-allowed disabled:opacity-70"
            style={inter}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'SUBMIT'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

