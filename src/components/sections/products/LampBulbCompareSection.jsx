import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

/** Same preorder URL, target, and rel as the other LiFi Lamp preorder links. */
const PRE_ORDER_URL =
  'https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D';

export const LAMP_BULB_FAQS = [
  {
    q: 'Is the LiFi Lamp a LiFi bulb?',
    a: 'No. A LiFi bulb fits an existing light fitting. The LiFi Lamp is a complete décor lamp that combines LiFi with WiFi 7.',
  },
  {
    q: 'Do I need special devices to use LiFi?',
    a: "Yes, LiFi needs a compatible receiver. Devices without one keep using the Lamp's WiFi 7.",
  },
];

const COMPARE_ROWS = [
  {
    label: 'What it is',
    bulb: 'An LED bulb for an existing fitting',
    lamp: 'A finished décor lamp with LiFi built in',
  },
  {
    label: 'WiFi 7',
    bulb: 'Not part of a bulb',
    lamp: 'Included alongside LiFi',
  },
  {
    label: 'Placement',
    bulb: 'Fixed by your current fittings',
    lamp: 'Free-standing, place it by your desk or sofa',
  },
  {
    label: 'Look',
    bulb: 'Hidden in a fitting',
    lamp: 'Four finishes: White, Black, Silver, Gold',
  },
];

export default function LampBulbCompareSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#0D2240]/08 bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="!m-0 !text-[clamp(1.75rem,4vw,2.5rem)] !font-bold tracking-tight text-[#0D2240]"
            style={geist}
          >
            LiFi bulb vs LiFi lamp: which fits your home?
          </h2>
          <p
            className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/60"
            style={inter}
          >
            Searching for a LiFi bulb? Here is how a bulb and the LiFi Lamp differ, so you can pick the
            right fit.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl list-disc flex-col gap-4 pl-5 text-left">
          <li className="!text-base !font-normal leading-relaxed text-[#0D2240]/75" style={inter}>
            <strong className="!font-semibold text-[#0D2240]">A LiFi bulb</strong> is an LED bulb that
            carries data on its light. It goes into a light fitting you already have, so the connection is
            only as good as where that fitting is.
          </li>
          <li className="!text-base !font-normal leading-relaxed text-[#0D2240]/75" style={inter}>
            <strong className="!font-semibold text-[#0D2240]">The LiFi Lamp</strong> is a complete indoor
            décor lamp with LiFi built in, plus WiFi 7 for the rest of the room. You place it where you
            actually work, game or relax, so the light and the connection land where you need them.
          </li>
        </ul>

        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-2xl border border-[#0D2240]/10">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-[#0D2240]">
                <th className="px-4 py-3 sm:px-5" scope="col" />
                <th
                  className="px-4 py-3 !text-sm !font-normal text-white sm:px-5"
                  style={geist}
                  scope="col"
                >
                  LiFi bulb
                </th>
                <th
                  className="px-4 py-3 !text-sm !font-normal text-white sm:px-5"
                  style={geist}
                  scope="col"
                >
                  LiFi Lamp
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label} className="even:bg-[#F7FBFF] odd:bg-white">
                  <th
                    className="border-t border-[#0D2240]/08 px-4 py-3 !text-sm !font-semibold text-[#0D2240] sm:px-5"
                    style={geist}
                    scope="row"
                  >
                    {row.label}
                  </th>
                  <td
                    className="border-t border-[#0D2240]/08 px-4 py-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/75 sm:px-5"
                    style={inter}
                  >
                    {row.bulb}
                  </td>
                  <td
                    className="border-t border-[#0D2240]/08 px-4 py-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/75 sm:px-5"
                    style={inter}
                  >
                    {row.lamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className="mx-auto mt-10 max-w-3xl text-center !text-base !font-normal leading-relaxed text-[#0D2240]/75"
          style={inter}
        >
          Like any LiFi light, the Lamp needs a clear line of light to a compatible receiver, and it works
          room by room. That is why it pairs LiFi with WiFi 7 instead of replacing WiFi. New to the idea?
          Read{' '}
          <Link
            href="/what-is-lifi"
            prefetch={false}
            className="!font-medium text-[var(--lumen-cyan)] underline decoration-[var(--lumen-cyan)]/40 underline-offset-[3px] transition-colors hover:text-[#0D2240]"
          >
            What is LiFi?
          </Link>
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={PRE_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[2.85rem] w-full items-center justify-center gap-2 rounded-full bg-[#0D2240] px-7 text-sm !font-normal !text-white transition-opacity hover:opacity-90 sm:w-auto"
            style={inter}
          >
            Pre order now
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-[#0D2240]/10 pt-8">
          {LAMP_BULB_FAQS.map((item) => (
            <div key={item.q} className="border-b border-[#0D2240]/10 py-5">
              <h3 className="!m-0 !text-lg !font-normal text-[#0D2240]" style={geist}>
                {item.q}
              </h3>
              <p
                className="!mb-0 !mt-2 !text-base !font-normal leading-relaxed text-[#0D2240]/75"
                style={inter}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
