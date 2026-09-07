import React from 'react';
import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import {
  HeroSection,
  CurriculumSection,
  ApplicationsSection,
  CommunityExperienceSection,
  MonetizeSection,
  FinalCTASection,
} from '../../components/sections/academy';

export default function AcademyPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip antialiased font-sans lumen-page-bg text-[#0D2240]">
      <Head>
        <title>LumenFi Academy — Shaping the Future of Light Connectivity</title>
        <meta name="description" content="At LumenFi Academy, we provide you with the tools, knowledge, and community to master Li-Fi technology." />
        <meta property="og:title" content="LumenFi Academy — Master Li-Fi Technology" />
        <meta property="og:description" content="Discover the future of the internet. Join for free, master Li-Fi, and become a certified reseller." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CurriculumSection />
        <ApplicationsSection />
        <CommunityExperienceSection />
        <MonetizeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
