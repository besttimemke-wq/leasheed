'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface SoftwarePageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const SoftwarePageView: React.FC<SoftwarePageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col font-sans justify-between selection:bg-blue-100 selection:text-blue-700">
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
            currentTab="software"
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
                  ALL-IN-ONE BUSINESS PLATFORM
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                Powerful Groomer
                <br />
                <span className="text-[#34d399]">Management Software.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Everything you need to run, grow, and scale your pet grooming business in one place. Simplifies daily operations, saves you time, and helps you deliver an exceptional client experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup') : onNavigateToTab('auth')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition-all duration-150 cursor-pointer group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-5 py-3 rounded-full text-xs font-semibold text-slate-200 shadow">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>14-day free trial • No card required</span>
                </div>
              </div>
            </div>

            {/* Right column empty - natural hero image shows */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </header>
      {/* END: Hero & Top Navigation */}

      <main>
        {/* BEGIN: CompleteManagementSection */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Complete Business Management
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                From appointments to accounting, Leashed.io gives you the tools to manage your salon, your team, and your customers — all in one platform.
              </p>
            </div>
            {/* 3-Column Layout: Left Features, Center Mockups, Right Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center mb-16">
              {/* Left Feature Cards */}
              <div className="lg:col-span-3 space-y-6">
                {/* Feature 1 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">CRM &amp; Clients</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Manage customers, pets, appointments and more.</p>
                </div>
                {/* Feature 2 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Scheduling</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Book, reschedule and manage appointments with ease.</p>
                </div>
                {/* Feature 3 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Payments &amp; Invoicing</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Process payments, send invoices, track deposits and refunds.</p>
                </div>
              </div>

              {/* Center Mockup: Desktop Display + Smartphone UI Simulation */}
              <div className="lg:col-span-6 relative flex justify-center py-6">
                {/* Desktop Monitor Frame */}
                <div className="w-full max-w-md bg-slate-900 rounded-2xl p-3 shadow-2xl border-4 border-slate-800">
                  {/* Monitor Screen */}
                  <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                    {/* App Topbar */}
                    <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <span className="text-[11px] font-semibold text-slate-600 ml-2">Leashed Salon Workspace</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-sky-600 text-white text-[9px] flex items-center justify-center font-bold">L</div>
                    </div>
                    {/* App Dashboard Wireframe Preview */}
                    <div className="p-4 space-y-3 bg-slate-100/70">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="text-[10px] text-slate-400 font-medium">Today&apos;s Dogs</div>
                          <div className="text-base font-bold text-slate-800 mt-0.5">14 Appointments</div>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="text-[10px] text-slate-400 font-medium">Daily Revenue</div>
                          <div className="text-base font-bold text-emerald-600 mt-0.5">$1,280.00</div>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="text-[10px] text-slate-400 font-medium">Team On Shift</div>
                          <div className="text-base font-bold text-sky-600 mt-0.5">4 Groomers</div>
                        </div>
                      </div>
                      {/* Mini Schedule Timeline */}
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 space-y-2">
                        <div className="text-[11px] font-bold text-slate-700 flex justify-between">
                          <span>Schedule: Bay 1 &amp; 2</span>
                          <span className="text-sky-600">Active</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-1.5 rounded bg-sky-50 border border-sky-100 flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-sky-900">09:30 AM • Cooper (Goldendoodle) - Full Groom</span>
                            <span className="text-sky-600 font-medium">$95.00</span>
                          </div>
                          <div className="p-1.5 rounded bg-amber-50 border border-amber-100 flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-amber-900">11:00 AM • Bella (Poodle) - Bath &amp; Deshed</span>
                            <span className="text-amber-700 font-medium">In Progress</span>
                          </div>
                          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-slate-700">01:30 PM • Max (Husky) - Deluxe Package</span>
                            <span className="text-slate-500">Confirmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Monitor Stand Base */}
                  <div className="w-16 h-4 bg-slate-800 mx-auto mt-2 rounded-t"></div>
                  <div className="w-28 h-1.5 bg-slate-700 mx-auto rounded-full"></div>
                </div>

                {/* Overlapping Mobile Mockup */}
                <div className="absolute -bottom-4 right-2 sm:right-6 w-36 sm:w-44 bg-slate-900 rounded-3xl p-2 shadow-2xl border-2 border-slate-700">
                  <div className="bg-white rounded-2xl overflow-hidden p-2.5 border border-slate-200 space-y-2">
                    <div className="w-12 h-2.5 bg-slate-200 rounded-full mx-auto mb-2"></div>
                    <div className="w-full h-16 rounded-xl overflow-hidden relative">
                      <Image 
                        alt="Dog profile thumbnail" 
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv4AC0jN_8T-RbTQecE98hspPZHfmsxBoC3RVGC4YDr4stBMI548j087v1eGRqJx8EZfqX5iNzuyn2lqfjGDIdw9eG0dohn3Brg5KA0_byAADzJl4qV0RbnJzgUcFi1ql_13-TnY_QESf_57R_fjgU5m7W674bK0O8U0Tsetl7HAuEmZrVnwChYlHK-uttfWGzzSsY5h92fnXuLR6RcG7obXimGZZT5mxOISC90iqy-TNfRgdpWqds"
                      />
                    </div>
                    <div className="text-[10px] font-bold text-slate-800">Cooper&apos;s Profile</div>
                    <div className="text-[8px] text-slate-500">Allergies: Sensitive skin shampoo only</div>
                    <div className="w-full py-1 bg-sky-600 text-white text-[9px] text-center font-bold rounded-md">
                      Check-in Pet
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Feature Cards */}
              <div className="lg:col-span-3 space-y-6">
                {/* Feature 4 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Inventory &amp; Orders</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Track stock, create purchase orders, manage vendors.</p>
                </div>
                {/* Feature 5 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Staff &amp; Team Management</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Schedule staff, manage roles, track performance.</p>
                </div>
                {/* Feature 6 */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-sky-200 transition group">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Reports &amp; Analytics</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Get real-time insights to grow your business.</p>
                </div>
              </div>
            </div>

            {/* Blue Callout Banner */}
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex-shrink-0 flex items-center justify-center shadow-md shadow-sky-600/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">Built for Groomers, by Groomers</h4>
                  <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                    Leashed.io was created with input from real grooming professionals to ensure it meets the unique needs of your business — whether you&apos;re a solo groomer or a multi-location salon.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => onNavigateToTab('pricing')}
                className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white font-semibold text-sm transition cursor-pointer"
              >
                <span>Explore Features</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>
        {/* END: CompleteManagementSection */}

        {/* BEGIN: KeyFeaturesSection */}
        <section className="py-20 bg-slate-50/70 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Key Software Features
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-500">
                Tools that work as hard as you do.
              </p>
            </div>
            {/* 6 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Scheduling</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Reduce no-shows and keep your day on track.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Client &amp; Pet Profiles</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Track grooming history, preferences, and important notes.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Integrated Payments</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Accept payments, issue refunds, and manage gift cards.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Inventory Management</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Never run out of supplies again.
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Team Collaboration</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Keep your staff connected and organized.
                </p>
              </div>
              {/* Card 6 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Reports</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Make data-driven decisions for growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* END: KeyFeaturesSection */}

        {/* BEGIN: CallToActionBanner */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-900 overflow-hidden shadow-2xl relative text-white">
              {/* Background decorative glow */}
              <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Dog image left side */}
                <div className="lg:col-span-4 h-64 lg:h-full relative min-h-[260px]">
                  <Image 
                    alt="Fluffy groomed pet dog smiling" 
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover object-center" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeqCELfUXDrRRccGBj1gsGTR-a0MIO01Wk5O6NAdWq286gTryepHdCOpAOymhAeStX7fP6GZBJsrulVpieORmD3jhfMIQq8_QE9wrt7pOBZ8dmMILp8XgKUmW7enrUWkZGdcXZIRfgBQoVIDgWHqNvCCQhVV2k-VBNH0vIlkbNTWezj1t8Fz15S5cwYkq15V0Cd6NoUuEqXKcVG7VJuvwk84wppH0fKenyPOQOR0B_pDPyhztHSaI3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-slate-900/90 lg:to-slate-900"></div>
                </div>
                {/* Copy and Action buttons */}
                <div className="lg:col-span-8 p-8 sm:p-12 lg:py-14 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                    Ready to take your grooming business to the next level?
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                    Join thousands of groomers using Leashed.io to simplify their operations and deliver better care.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button 
                      onClick={() => onOpenAuth ? onOpenAuth('signup') : onNavigateToTab('auth')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm sm:text-base transition shadow-lg shadow-sky-900/50 cursor-pointer"
                    >
                      <span>Start Free Trial</span>
                      <span>→</span>
                    </button>
                    <button 
                      onClick={() => onNavigateToTab('academy')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm sm:text-base transition cursor-pointer"
                    >
                      <span className="text-xs">▶</span>
                      <span>Watch Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: CallToActionBanner */}
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};
