import React, { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: '1. What is Li-Fi?',
    a: 'Li-Fi (Light Fidelity) is a cutting-edge wireless communication technology that uses light waves instead of traditional radio frequencies to transmit data. By modulating LED light, it provides secure, high-speed internet connectivity.',
  },
  {
    q: '2. How does the Lumenfi kit work?',
    a: 'Our kits use photonic antennas that connect to your lighting infrastructure. These antennas receive data from your network and project it via light pulses, which are then captured by a receiver dongle attached to your device.',
  },
  {
    q: '3. How much space does a standard kit cover?',
    a: 'Each individual photonic antenna covers 500 square feet. Because each kit includes two antennas, you receive 1,000 square feet of total coverage right out of the box.',
  },
  {
    q: '4. Can I expand my coverage if my space is larger than 1,000 sq ft?',
    a: 'Absolutely. We offer the ability to purchase additional photonic antennas to increase your total coverage area according to your needs.',
  },
  {
    q: '5. Do I need additional hardware to connect more devices?',
    a: 'Yes, you can purchase additional receiver dongles upon request to accommodate more devices on your Li-Fi network.',
  },
  {
    q: '6. What is the typical lead time for a kit?',
    a: 'Please allow 4 to 6 weeks for your kit to be processed, prepared, and delivered to your doorstep.',
  },
  {
    q: '7. Is Li-Fi faster than Wi-Fi?',
    a: 'Li-Fi has the potential to be significantly faster than standard Wi-Fi because the light spectrum is far broader and less congested than the radio frequency spectrum.',
  },
  {
    q: '8. Do the lights need to be fully bright for Li-Fi to work?',
    a: 'No. Li-Fi systems can operate at dimmed levels that are comfortable for human eyes. High-end systems can even operate using invisible infrared light to maintain connectivity in total darkness.',
  },
  {
    q: '9. Does Li-Fi work through walls?',
    a: 'One of the primary benefits of Li-Fi is that light does not pass through walls. This provides an inherent layer of physical security, as your data is contained strictly within the illuminated space.',
  },
  {
    q: '10. Can Li-Fi cause interference with other electronics?',
    a: 'No. Because Li-Fi uses light waves rather than radio waves, it generates zero electromagnetic interference, making it perfect for environments where radio interference is a concern, such as hospitals or aviation.',
  },
  {
    q: '11. Is Li-Fi harmful to human eyes or health?',
    a: 'Not at all. The light used is standard LED illumination. The modulation happens at speeds far beyond what the human eye can perceive, causing no flicker or health risks.',
  },
  {
    q: '12. What devices are compatible with Lumenfi?',
    a: 'Any device equipped with a USB port can utilize our receiver dongles to connect to the network.',
  },
  {
    q: '13. Why is Li-Fi considered more secure than Wi-Fi?',
    a: 'Since light is blocked by walls and opaque materials, your network cannot be accessed by someone outside of your office or home, effectively eliminating the risk of remote hacking.',
  },
  {
    q: '14. Can I use Li-Fi outdoors?',
    a: 'Li-Fi is designed primarily for indoor use. Direct, intense sunlight can create significant interference with the optical signal, which may degrade performance.',
  },
  {
    q: '15. Does Li-Fi work if I move around the room?',
    a: 'Yes, as long as your device maintains a line-of-sight or receives reflected light from the ceiling-mounted antennas, you can enjoy seamless connectivity while moving within the coverage area.',
  },
  {
    q: '16. What happens if I accidentally block the light signal?',
    a: 'If you completely obstruct the line-of-sight between the light source and your device, the connection may drop. However, Li-Fi systems are designed to utilize reflected light off walls and surfaces to maintain a connection even when a direct line-of-sight is occasionally interrupted.',
  },
  {
    q: '17. Is Li-Fi a replacement for my current Wi-Fi?',
    a: 'Most users implement Li-Fi as a high-security, ultra-fast "fast lane" for data-intensive tasks, while keeping Wi-Fi for general coverage throughout the rest of the home or office.',
  },
  {
    q: '18. How do I request additional antennas or dongles?',
    a: 'You can contact our sales or support team directly through our website to request and purchase additional hardware for your setup.',
  },
  {
    q: '19. Is the Lumenfi kit difficult to install?',
    a: 'Our kits are designed for straightforward integration with existing lighting environments. Detailed installation guides are provided with every shipment.',
  },
  {
    q: '20. Who should use Li-Fi?',
    a: 'Li-Fi is ideal for anyone prioritizing data security, anyone working in high-interference environments, or anyone who simply wants to experience the next generation of high-speed, congestion-free wireless connectivity',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function ProductsFaqSection() {
  const [activeFaq, setActiveFaq] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query]);

  const isSearching = query.trim().length > 0;

  const visibleFaqs = isSearching
    ? filteredFaqs
    : filteredFaqs.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10).slice(
        0,
        isExpanded ? 10 : 5
      );

  return (
    <section
      id="products-faq"
      className="section-wash-white relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-10"
      style={{ backgroundImage: 'none' }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          className="!mb-8 text-center !text-[clamp(1.75rem,4vw,2.75rem)] !font-bold tracking-tight text-[#0D2240]"
          style={geist}
        >
          Frequently Asked Questions
        </h2>

        <label className="relative mb-10 block">
          <span className="sr-only">Search for a question</span>
          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveFaq(-1);
            }}
            placeholder="Search for a question"
            className="w-full rounded-full border border-[#0D2240]/12 bg-transparent py-3.5 pl-12 pr-5 text-sm text-[#0D2240] outline-none placeholder:text-slate-400 focus:border-[var(--lumen-cyan)]/50 focus:ring-2 focus:ring-[var(--lumen-cyan)]/15"
            style={inter}
          />
        </label>

        <div className="border-t border-[#0D2240]/12">
          {visibleFaqs.length === 0 ? (
            <p className="py-10 text-center text-sm text-slate-500" style={inter}>
              No questions match your search.
            </p>
          ) : (
            visibleFaqs.map((faq, idx) => {
              const globalId = isSearching ? FAQ_ITEMS.indexOf(faq) : (currentPage - 1) * 10 + idx;
              const isOpen = activeFaq === globalId;

              return (
                <div
                  key={`${faq.q}-${globalId}`}
                  className={`border-b border-[#0D2240]/12 transition-colors duration-300 ${
                    isOpen
                      ? 'border-l-2 border-l-[var(--lumen-cyan)] bg-[var(--lumen-cyan)]/[0.04] pl-3 sm:pl-4'
                      : 'border-l-2 border-l-transparent pl-3 sm:pl-4'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : globalId)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`!m-0 min-w-0 !text-base !font-normal leading-snug tracking-tight transition-colors duration-300 sm:!text-lg ${
                        isOpen ? 'text-[#0D2240]' : 'text-[#0D2240]/85'
                      }`}
                      style={geist}
                    >
                      {faq.q.replace(/^\d+\.\s*/, '')}
                    </h3>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-[#0D2240]/45 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[var(--lumen-cyan)]' : ''
                      }`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="products-faq-a !mb-5 !mt-0 max-w-2xl !text-sm !font-normal leading-relaxed text-[#0D2240]/65 sm:!mb-6 sm:!text-[15px]"
                        style={inter}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {!isSearching && (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="mr-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Sets:
              </span>
              <button
                type="button"
                onClick={() => {
                  setCurrentPage(1);
                  setActiveFaq(-1);
                  setIsExpanded(false);
                }}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-bold transition-all ${
                  currentPage === 1
                    ? 'bg-[#0D2240] text-white'
                    : 'bg-transparent text-slate-600 hover:bg-[#0D2240]/05'
                }`}
              >
                1 (Q1-10)
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentPage(2);
                  setActiveFaq(-1);
                  setIsExpanded(false);
                }}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-bold transition-all ${
                  currentPage === 2
                    ? 'bg-[#0D2240] text-white'
                    : 'bg-transparent text-slate-600 hover:bg-[#0D2240]/05'
                }`}
              >
                2 (Q11-20)
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 rounded-full bg-[#0D2240] px-5 py-2.5 font-mono text-xs font-bold text-white transition-all hover:bg-[#16325c]"
            >
              {isExpanded ? 'Show Less' : 'Show More Questions'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
