import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Search } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { BLOG_POSTS } from '../../data/blogs';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const CATEGORIES = ['All', ...Array.from(new Set(BLOG_POSTS.map((post) => post.category)))];

export default function BlogsPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const posts = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.category.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const [featured, ...rest] = posts;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[var(--lumen-navy)] antialiased">
      <Head>
        <title>Lumen LIFI — Blogs</title>
        <meta
          name="description"
          content="News, guides, and ideas about LiFi, LumenFi products, and light-speed home connectivity."
        />
        <link rel="canonical" href="https://lifilumen.com/blogs" />
      </Head>

      <Header />

      <main className="relative z-10">
        <section
          className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
          style={{
            background: 'linear-gradient(180deg, #06131d 0%, #0D2240 58%, #16325c 100%)',
          }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h1
              className="!m-0 max-w-3xl !text-[clamp(2.4rem,5vw,3.75rem)] !font-bold leading-[1.05] tracking-[-0.03em] text-white"
              style={geist}
            >
              Ideas on light-speed internet
            </h1>
            <p
              className="!mt-4 max-w-xl !text-sm !font-normal leading-relaxed text-white/70 sm:!text-base"
              style={inter}
            >
              Guides and simple explainers about LiFi and how light carries internet into your home.
            </p>
            <p
              className="!mt-6 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              Speed · Privacy · Light
            </p>
          </div>
        </section>

        <section
          className="py-8 sm:py-10"
          style={{ backgroundColor: '#F4F7FB', backgroundImage: 'none' }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-4 border-b border-[#0D2240]/08 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((label) => {
                  const active = category === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setCategory(label)}
                      className={`rounded-full px-4 py-2 text-xs !font-normal transition-colors sm:text-sm ${
                        active
                          ? 'bg-[#0D2240] text-white'
                          : 'bg-[#EBF5FF] text-[#0D2240]/70 hover:bg-[#dcecff]'
                      }`}
                      style={inter}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <label className="relative block w-full lg:max-w-xs">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0D2240]/35"
                  strokeWidth={1.75}
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search journals..."
                  className="h-11 w-full rounded-full border border-[#0D2240]/12 bg-white pl-10 pr-4 text-sm !font-normal text-[#0D2240] outline-none placeholder:text-[#0D2240]/35 focus:border-[var(--lumen-cyan)]"
                  style={inter}
                />
              </label>
            </div>

            {!featured ? (
              <p className="!mt-12 text-center !text-sm !font-normal text-[#0D2240]/55" style={inter}>
                No journals match that search.
              </p>
            ) : (
              <>
                <Link
                  href={`/blogs/${featured.slug}`}
                  prefetch={false}
                  className="group mt-8 grid overflow-hidden rounded-2xl border border-[#0D2240]/08 bg-white shadow-[0_10px_30px_rgba(13,34,64,0.05)] lg:grid-cols-[1.15fr_0.85fr]"
                >
                  <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt || featured.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <span
                      className="!text-[11px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
                      style={inter}
                    >
                      {featured.category}
                    </span>
                    <h2
                      className="!mt-3 !m-0 !text-2xl !font-normal leading-snug tracking-tight text-[#0D2240] sm:!text-[1.75rem]"
                      style={geist}
                    >
                      {featured.title}
                    </h2>
                    <p
                      className="!mt-3 !mb-0 line-clamp-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-base"
                      style={inter}
                    >
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span
                        className="inline-flex items-center gap-1.5 !text-xs !font-normal text-[#0D2240]/45"
                        style={inter}
                      >
                        <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                        {featured.date}
                      </span>
                      <span
                        className="!text-sm !font-normal text-[#0D2240] transition-colors group-hover:text-[var(--lumen-cyan)]"
                        style={inter}
                      >
                        Read Journal →
                      </span>
                    </div>
                  </div>
                </Link>

                {rest.length > 0 && (
                  <ul className="m-0 mt-6 grid list-none gap-5 p-0 sm:grid-cols-2">
                    {rest.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          prefetch={false}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0D2240]/08 bg-white shadow-[0_10px_30px_rgba(13,34,64,0.05)]"
                        >
                          <div className="relative aspect-[16/9]">
                            <Image
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-5 sm:p-6">
                            <span
                              className="!text-[11px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
                              style={inter}
                            >
                              {post.category}
                            </span>
                            <h2
                              className="!mt-2 !m-0 !text-xl !font-normal leading-snug text-[#0D2240]"
                              style={geist}
                            >
                              {post.title}
                            </h2>
                            <p
                              className="!mt-2 !mb-0 line-clamp-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/60"
                              style={inter}
                            >
                              {post.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                              <span
                                className="inline-flex items-center gap-1.5 !text-xs !font-normal text-[#0D2240]/45"
                                style={inter}
                              >
                                <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                                {post.date}
                              </span>
                              <span
                                className="!text-sm !font-normal text-[#0D2240] transition-colors group-hover:text-[var(--lumen-cyan)]"
                                style={inter}
                              >
                                View →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
