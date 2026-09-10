import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS } from './faqData';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const PREVIEW_COUNT = 5;

export default function ProductsFaqSection({
  items = FAQ_ITEMS,
  limit = PREVIEW_COUNT,
  showViewMore = true,
  showSearch = true,
  title = 'Frequently Asked Questions',
}) {
  const [activeFaq, setActiveFaq] = useState(-1);
  const [query, setQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [items, query]);

  const isSearching = query.trim().length > 0;
  const visibleFaqs = isSearching || limit == null ? filteredFaqs : filteredFaqs.slice(0, limit);

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
          {title}
        </h2>

        {showSearch && (
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
        )}

        <div className="border-t border-[#0D2240]/12">
          {visibleFaqs.length === 0 ? (
            <p className="py-10 text-center text-sm text-slate-500" style={inter}>
              No questions match your search.
            </p>
          ) : (
            visibleFaqs.map((faq, idx) => {
              const globalId = items.indexOf(faq);
              const itemId = globalId >= 0 ? globalId : idx;
              const isOpen = activeFaq === itemId;

              return (
                <div
                  key={`${faq.q}-${itemId}`}
                  className={`border-b border-[#0D2240]/12 transition-colors duration-300 ${
                    isOpen
                      ? 'border-l-2 border-l-[var(--lumen-cyan)] bg-[var(--lumen-cyan)]/[0.04] pl-3 sm:pl-4'
                      : 'border-l-2 border-l-transparent pl-3 sm:pl-4'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : itemId)}
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

        {showViewMore && !isSearching && items.length > limit && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/help"
              prefetch={false}
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#0D2240] px-8 text-sm !font-normal !text-white transition-opacity hover:opacity-90"
              style={inter}
            >
              View More
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
