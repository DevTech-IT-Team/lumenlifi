import { useEffect } from 'react';

const SALES_EMAIL = 'rupali@lifilumen.com';
const FORM_ID = '0LXv19xiVsNzt9xtK3Ih';
const FORM_EMBED_SCRIPT = 'https://api.wonderengine.ai/js/form_embed.js';

export default function ContactFormBlock() {
  useEffect(() => {
    if (!document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.src = FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="space-y-6 sm:space-y-8 lg:col-span-5">
        <div>
          <h2 className="lumen-h2-light mb-3 break-words sm:mb-4">
            Send Us a <span className="text-[var(--lumen-cyan)]">Message</span>
          </h2>
          <p className="lumen-body-light">
            Questions about LiFi hardware, subscriptions, billing, or installation? Fill out the form and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
          {[
            { val: 'Within 24 hrs', label: 'Typical response time' },
            { val: 'Secure', label: 'Your data is protected' },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="rounded-lg border border-[var(--lumen-cyan)]/40 px-4 py-3"
            >
              <p className="font-bold text-sm text-white">{val}</p>
              <p className="text-sm text-white/70 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="lumen-label text-white">
            Direct Contact
          </h3>
          {[
            {
              label: 'Sales',
              value: SALES_EMAIL,
              href: `mailto:${SALES_EMAIL}`,
            },
            {
              label: 'Website',
              value: 'lifilumen.com',
              href: 'https://lifilumen.com',
            },
          ].map(({ label, value, href }) => (
            <a key={label} href={href} className="block group">
              <p className="text-sm text-white/70">{label}</p>
              <p className="break-all text-sm font-semibold text-white group-hover:text-[var(--lumen-cyan)]">
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Right — WonderEngine form embed */}
      <div className="w-full min-w-0 rounded-lg bg-white p-3 sm:p-6 lg:col-span-7 lg:p-8">
        <iframe
          src={`https://api.wonderengine.ai/widget/form/${FORM_ID}`}
          className="min-h-[28rem] w-full sm:min-h-[616px]"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Lumen Li-Fi Contact Form"
          data-height="616"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Lumen Li-Fi Contact Form"
        />
      </div>
    </div>
  );
}
