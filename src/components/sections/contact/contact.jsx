import { useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const SALES_EMAIL = 'rupali@lifilumen.com';
const OPS_EMAIL = 'operations@lumenlifi.com';
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
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Left — copy + contact info */}
      <div className="lg:col-span-5">
        <p
          className="!m-0 !text-sm !font-normal text-[#0D2240]/60"
          style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
        >
          Contact Us
        </p>
        <h2
          className="!mt-3 !m-0 !text-[clamp(1.85rem,3.5vw,2.75rem)] !font-normal leading-[1.15] tracking-[-0.02em] text-[#0D2240]"
          style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
        >
          Reach out, we&apos;re ready to collaborate
        </h2>
        <p
          className="!mt-4 max-w-md !text-sm !font-normal leading-relaxed text-[#0D2240]/65 sm:!text-base"
          style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
        >
          Questions about LiFi hardware, subscriptions, billing, or installation? Let&apos;s bring
          your ideas to light — with creativity, precision, and a shared passion for excellence.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${OPS_EMAIL}?subject=Get%20Started%20with%20LumenFi`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0D2240] px-6 text-sm !font-normal text-white transition-colors hover:bg-[#16325c]"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${SALES_EMAIL}?subject=LumenFi%20Inquiry`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#0D2240]/20 bg-white px-6 text-sm !font-normal text-[#0D2240] transition-colors hover:border-[var(--lumen-cyan)]/50 hover:bg-[#EBF5FF]"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            Email Us
          </a>
        </div>

        <div className="mt-10 space-y-5">
          <h3
            className="!m-0 !text-sm !font-normal uppercase tracking-[0.14em] text-[#0D2240]/50"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            Other info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lumen-cyan)]" strokeWidth={1.75} />
              <div>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="block !text-sm !font-normal text-[#0D2240] hover:text-[var(--lumen-cyan)]"
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  {SALES_EMAIL}
                </a>
                <a
                  href={`mailto:${OPS_EMAIL}`}
                  className="mt-1 block !text-sm !font-normal text-[#0D2240]/70 hover:text-[var(--lumen-cyan)]"
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  {OPS_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[var(--lumen-cyan)]" strokeWidth={1.75} />
              <span
                className="!text-sm !font-normal text-[#0D2240]"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Available via email — we respond within 24 hrs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lumen-cyan)]" strokeWidth={1.75} />
              <span
                className="!text-sm !font-normal leading-relaxed text-[#0D2240]"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                LumenFi — Light-speed connectivity for modern homes
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right — form card */}
      <div className="w-full min-w-0 rounded-[1.5rem] bg-white p-4 shadow-[0_12px_40px_rgba(13,34,64,0.08)] sm:p-6 lg:col-span-7 lg:p-8">
        <iframe
          src={`https://api.wonderengine.ai/widget/form/${FORM_ID}`}
          className="min-h-[28rem] w-full sm:min-h-[616px]"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
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
