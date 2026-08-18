import { useEffect } from 'react';
import { Mail, ShieldCheck, Clock, MapPin } from 'lucide-react';

const OPERATIONS_EMAIL = 'operations@lumenlifi.com';
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left — copy & contact cards */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lumen-cyan)]" />
            We&apos;re Here to Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[var(--lumen-navy)] mb-4">
            Send Us a{' '}
            <span className="text-gradient-lumen">Message</span>
          </h2>
          <p className="text-base leading-relaxed text-[var(--lumen-muted)]">
            Questions about LiFi hardware, subscriptions, billing, or installation? Fill out the form and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Clock, val: 'Within 24 hrs', label: 'Typical response time' },
            { icon: ShieldCheck, val: 'Secure', label: 'Your data is protected' },
          ].map(({ icon: Icon, val, label }) => (
            <div
              key={label}
              className="p-4 rounded-2xl bg-white border border-[var(--lumen-border)] shadow-sm flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-[rgba(26,110,191,0.06)] text-[var(--lumen-blue)] shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-sm text-[var(--lumen-navy)]">{val}</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--lumen-muted)] mt-0.5">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--lumen-navy)]">
            Direct Contact
          </h3>
          {[
            {
              icon: Mail,
              label: 'General & Operations',
              value: OPERATIONS_EMAIL,
              href: `mailto:${OPERATIONS_EMAIL}`,
            },
            {
              icon: Mail,
              label: 'Sales',
              value: SALES_EMAIL,
              href: `mailto:${SALES_EMAIL}`,
            },
            {
              icon: MapPin,
              label: 'Website',
              value: 'lifilumen.com',
              href: 'https://lifilumen.com',
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[var(--lumen-border)] hover:border-[var(--lumen-cyan)]/40 transition-colors group"
            >
              <div className="p-2 rounded-xl bg-[rgba(0,194,199,0.08)] text-[var(--lumen-cyan)] shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--lumen-muted)]">{label}</p>
                <p className="text-sm font-semibold text-[var(--lumen-navy)] group-hover:text-[var(--lumen-blue)] truncate">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right — WonderEngine form embed */}
      <div className="lg:col-span-7 w-full bg-white border border-[var(--lumen-border)] rounded-3xl shadow-[0_24px_70px_rgba(13,34,64,0.06)] p-4 sm:p-6 lg:p-8">
        <iframe
          src={`https://api.wonderengine.ai/widget/form/${FORM_ID}`}
          style={{ width: '100%', height: '100%', minHeight: '616px', border: 'none', borderRadius: '8px' }}
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
