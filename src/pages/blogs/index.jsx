import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FinalCTASection from '../../components/sections/home/FinalCTASection';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const POSTS = [
  {
    slug: 'what-is-lifi',
    category: 'Basics',
    date: 'Sep 2, 2026',
    title: 'What is LiFi, in simple words?',
    excerpt:
      'LiFi sends internet through light instead of radio waves. Here is an easy guide to how it works and why homes care.',
    readTime: '4 min read',
    image: '/images/lifi/what-is-lifi.png',
  },
  {
    slug: 'lifi-vs-wifi',
    category: 'Compare',
    date: 'Sep 5, 2026',
    title: 'LiFi vs WiFi: which one do you need?',
    excerpt:
      'WiFi is great for coverage. LiFi is great for speed and privacy in a room. Learn when to use each — or both.',
    readTime: '5 min read',
    image: '/images/lifi_wifi/lifi_wifi.png',
  },
  {
    slug: 'indoor-lifi-pole',
    category: 'Product',
    date: 'Sep 8, 2026',
    title: 'Meet the indoor LiFi Lamp (coming soon)',
    excerpt:
      'A decor-style Lamp that lights your room and carries LiFi. Preview the look, use cases, and launch plans.',
    readTime: '3 min read',
    image: '/images/pole/7.png',
  },
  {
    slug: 'secure-home-network',
    category: 'Security',
    date: 'Sep 10, 2026',
    title: 'Why light makes home networks more private',
    excerpt:
      'Because light stops at walls, your room becomes a natural boundary. A short note on safer indoor connectivity.',
    readTime: '4 min read',
    image: '/images/lifi/security.png',
  },
  {
    slug: 'smart-home-setup',
    category: 'Guides',
    date: 'Sep 12, 2026',
    title: 'A simple home setup with light-speed internet',
    excerpt:
      'Dummy walkthrough: place the kit, connect devices, and enjoy a cleaner network for streaming and work.',
    readTime: '6 min read',
    image: '/images/hero/home-automation.png',
  },
  {
    slug: 'future-of-lifi',
    category: 'Insights',
    date: 'Sep 14, 2026',
    title: 'Where LiFi is headed next',
    excerpt:
      'From living rooms to offices — placeholder thoughts on the next wave of light-powered connectivity.',
    readTime: '5 min read',
    image: '/images/hero/ultra_fast.png',
  },
];

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
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
          className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16"
          style={{
            background: 'linear-gradient(180deg, #06131d 0%, #0D2240 55%, #143356 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
              style={inter}
            >
              Blogs
            </p>
            <h1
              className="!mt-4 !m-0 !text-[clamp(2rem,5vw,3.25rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
              style={geist}
            >
              Ideas on light-speed internet
            </h1>
            <p
              className="!mx-auto !mt-4 max-w-xl !text-base !font-normal leading-relaxed text-white/60"
              style={inter}
            >
              Dummy posts for now — guides, product notes, and simple explainers about LiFi and
              LumenFi.
            </p>
          </div>
        </section>

        <section
          className="relative py-14 sm:py-16 lg:py-20"
          style={{ backgroundColor: '#EBF5FF' }}
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {POSTS.map((post) => (
                <li
                  key={post.slug}
                  id={post.slug}
                  className="flex flex-col overflow-hidden rounded-[1.25rem] border border-[#0D2240]/08 bg-white"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#0D2240]/05">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="!text-[11px] !font-normal uppercase tracking-[0.14em] text-[var(--lumen-cyan)]"
                        style={inter}
                      >
                        {post.category}
                      </span>
                      <span className="!text-xs !font-normal text-[#0D2240]/45" style={inter}>
                        {post.date}
                      </span>
                    </div>
                    <h2
                      className="!mt-3 !m-0 !text-lg !font-normal leading-snug tracking-tight text-[#0D2240] sm:!text-xl"
                      style={geist}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="!mt-3 !mb-0 flex-1 !text-sm !font-normal leading-relaxed text-[#0D2240]/60"
                      style={inter}
                    >
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#0D2240]/08 pt-4">
                      <span className="!text-xs !font-normal text-[#0D2240]/45" style={inter}>
                        {post.readTime}
                      </span>
                      <Link
                        href={`/blogs#${post.slug}`}
                        prefetch={false}
                        className="!text-sm !font-normal text-[#0D2240] transition-colors hover:text-[var(--lumen-cyan)]"
                        style={inter}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
