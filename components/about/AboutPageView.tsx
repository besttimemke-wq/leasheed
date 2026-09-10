'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface AboutPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const AboutPageView: React.FC<AboutPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* ========================================================================= */}
      {/* 1. HERO & TOP NAVIGATION (FULL BLEED - EXACT SYMMETRY WITH ACADEMY) */}
      {/* ========================================================================= */}
      <header className="relative w-full bg-[#0c1626] text-white overflow-hidden">
        {/* Hero Background Image & Gradient Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero-ALLPAGES.jpeg"
              alt="Woman grooming golden retriever dog happily"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-right-top opacity-75 filter saturate-105"
            />
          </div>
          {/* Soft darkening overlay */}
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Standardized Header */}
          <SharedHeader
            currentTab="about"
            onNavigateToTab={onNavigateToTab}
            onOpenAuth={onOpenAuth}
            currentUser={currentUser}
          />

          {/* Hero Main Content Area - IDENTICAL SYMMETRY */}
          <div className="py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column: Value Proposition */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-6">
              <div className="inline-block">
                <span className="text-[#34d399] tracking-wider uppercase text-xs sm:text-sm font-extrabold px-1">
                  OUR MISSION &amp; STORY
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                Empowering Pet
                <br />
                <span className="text-[#34d399]">Groomers Everywhere.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                We believe in the power of second chances, dedicated craft, and transformative software. Leashed.io is on a mission to build a brighter future for the pet care community.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => {
                    const el = document.getElementById('mission-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition-all duration-150 cursor-pointer group"
                >
                  Our Mission
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => onNavigateToTab('paths')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all duration-150 cursor-pointer"
                >
                  Career Pathways
                </button>
              </div>
            </div>

            {/* Right column empty - natural hero image shows */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </header>
      {/* END: Hero & Top Navigation */}

      <main className="flex-grow">
        {/* BEGIN: Mission & Story Section */}
        <section id="mission-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-blue-600 text-sm font-bold uppercase tracking-wider block mb-2">Our Story</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Born from a passion for animals and a belief in human potential.
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Leashed.io was founded with a dual purpose: to elevate the pet grooming trade through modern, intuitive business tools, and to open doors of opportunity for individuals seeking a fresh start through vocational training.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  We saw that groomers were struggling with outdated, bloated software that wasn&apos;t built for the tactile reality of a grooming salon. At the same time, we saw a massive nationwide shortage of skilled pet professionals. We connected the dots — creating an integrated ecosystem where education, certification, and business management work seamlessly together.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To empower groomers with world-class education and modern software, building sustainable careers and thriving businesses.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A future where pet care professionals are recognized as skilled artisans with the digital infrastructure to achieve financial independence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Values */}
              <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Core Values</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Second Chances</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">We believe anyone with dedication and care can transform their life through mastering a respected trade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Craftsmanship</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">We hold ourselves and our students to the highest standards of safety, technique, and animal welfare.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Community First</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">We grow when our groomers grow. We prioritize direct mentorship, peer collaboration, and salon success.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Purpose-Built Innovation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">We build tools designed strictly around real shop workflows, eliminating friction without unnecessary complexity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Impact Numbers */}
        <section className="py-16 bg-[#0b132b] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">2,500+</div>
                <div className="text-sm sm:text-base text-slate-300 font-medium">Certified Graduates</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">98%</div>
                <div className="text-sm sm:text-base text-slate-300 font-medium">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">$1.2M+</div>
                <div className="text-sm sm:text-base text-slate-300 font-medium">Scholarships Awarded</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">50+</div>
                <div className="text-sm sm:text-base text-slate-300 font-medium">Partner Salon Networks</div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: CallToActionBanner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 sm:p-16 text-white text-center shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Join Us in Reimagining Pet Care</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you are looking to start a new career or streamline your existing salon operations, we are here to support your journey.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup') : onNavigateToTab('auth')}
                  className="px-8 py-3.5 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition cursor-pointer"
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => onNavigateToTab('support')}
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition cursor-pointer"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};
