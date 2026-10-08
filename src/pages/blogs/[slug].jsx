import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { BLOG_POSTS, getPostBySlug } from '../../data/blogs';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const inlineLinkClass =
  'italic !font-medium text-[var(--lumen-cyan)] underline decoration-[var(--lumen-cyan)]/40 underline-offset-[3px] transition-colors hover:text-[#0D2240]';

function renderInline(text) {
  if (!text || !text.includes('](')) return text;

  const nodes = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const label = match[1];
    const href = match[2];
    const external = /^https?:\/\//.test(href);
    nodes.push(
      external ? (
        <a
          key={`${href}-${index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={inlineLinkClass}
        >
          {label}
        </a>
      ) : (
        <Link key={`${href}-${index}`} href={href} prefetch={false} className={inlineLinkClass}>
          {label}
        </Link>
      )
    );
    lastIndex = pattern.lastIndex;
    index += 1;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default function BlogPostPage({ post }) {
  if (!post) return null;

  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <Head>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.metaKeywords} />
        <link rel="canonical" href={`https://lifilumen.com/blogs/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://lifilumen.com/blogs/${post.slug}`} />
        <meta property="og:image" content={`https://lifilumen.com${post.image}`} />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
      </Head>

      <Header />

      <main className="relative z-10">
        <article className="bg-[#EBF5FF] pb-16 pt-20 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {/* <Link
              href="/blogs"
              prefetch={false}
              className="inline-flex items-center gap-2 !text-sm !font-normal text-[#0D2240]/60 transition-colors hover:text-[var(--lumen-cyan)]"
              style={inter}
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              Back to blogs
            </Link> */}

            <p
              className="!mt-8 !m-0 !text-[11px] !font-normal uppercase tracking-[0.18em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              {post.category}
            </p>
            <h1
              className="!mt-3 !m-0 !text-[clamp(1.85rem,4vw,2.75rem)] !font-bold leading-[1.15] tracking-[-0.03em] text-[#0D2240]"
              style={geist}
            >
              {post.title}
            </h1>
            <p className="!mt-4 !text-sm !font-normal text-[#0D2240]/50" style={inter}>
              {post.date} · {post.readTime}
            </p>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] bg-[#0D2240]">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-10 space-y-5">
              {post.sections.map((section, index) => {
                if (section.type === 'h2') {
                  return (
                    <h2
                      key={index}
                      className="!mt-12 !mb-5 !text-2xl !font-normal tracking-tight text-[#0D2240]"
                      style={geist}
                    >
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === 'ul') {
                  return (
                    <ul key={index} className="!mb-4 m-0 list-disc pl-5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="!mb-4 !text-base !font-normal leading-relaxed text-[#0D2240]/75"
                          style={inter}
                        >
                          {renderInline(item)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (section.type === 'ol') {
                  return (
                    <ol key={index} className="!mb-4 m-0 list-decimal pl-5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="!mb-4 !text-base !font-normal leading-relaxed text-[#0D2240]/75"
                          style={inter}
                        >
                          {renderInline(item)}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (section.type === 'cta') {
                  return (
                    <div
                      key={index}
                      className="my-8 rounded-2xl border-2 border-[#00C2C7] bg-[#E7FBFB] px-5 py-6 shadow-[0_10px_30px_rgba(0,194,199,0.12)] sm:px-7"
                    >
                      <p
                        className="!m-0 !text-lg !font-semibold text-[#0D2240]"
                        style={geist}
                      >
                        {section.title}
                      </p>
                      <p
                        className="!mt-2 !mb-0 !text-base !font-normal leading-relaxed text-[#0D2240]/80"
                        style={inter}
                      >
                        {renderInline(section.text)}
                      </p>
                      <a
                        href={section.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center rounded-full bg-[#00C2C7] px-5 py-2.5 !text-sm !font-semibold text-[#0D2240] transition-colors hover:bg-[#00aeb3]"
                        style={inter}
                      >
                        {section.label}
                      </a>
                    </div>
                  );
                }
                if (section.type === 'faq') {
                  return (
                    <div key={index} className="space-y-6 pt-2">
                      {section.items.map((item, faqIndex) => (
                        <div key={item.q}>
                          <h3
                            className="!m-0 !text-lg !font-normal text-[#0D2240]"
                            style={geist}
                          >
                            {faqIndex + 1}. {item.q}
                          </h3>
                          <p
                            className="!mt-2 !mb-0 !text-base !font-normal leading-relaxed text-[#0D2240]/75"
                            style={inter}
                          >
                            {renderInline(item.a)}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p
                    key={index}
                    className="!mt-0 !mb-4 !text-base !font-normal leading-[1.8] text-[#0D2240]/75"
                    style={inter}
                  >
                    {renderInline(section.text)}
                  </p>
                );
              })}
            </div>
            <div className="mt-14 flex justify-center border-t border-[#0D2240]/08 pt-10">
              <Link
                href="/blogs"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-full bg-[#0D2240] px-6 py-3 !text-sm !font-normal text-white transition-colors hover:bg-[#16325c]"
                style={inter}
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                All blogs
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: BLOG_POSTS.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}
