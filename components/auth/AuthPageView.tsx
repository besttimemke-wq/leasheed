'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NavTab } from '@/components/Navbar';
import { 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle2, 
  ArrowLeft, 
  Globe, 
  GraduationCap, 
  Laptop, 
  Users, 
  BookOpen, 
  LogIn, 
  X, 
  Sparkles,
  HelpCircle,
  FileText,
  ShieldCheck,
  Phone
} from 'lucide-react';

export type UserRole = 'Learner' | 'Instructor' | 'Partner' | 'Salon Owner';

export interface AuthUser {
  name: string;
  email: string;
  role: UserRole;
}

interface AuthPageViewProps {
  onSuccess: (user: AuthUser) => void;
  onNavigateToTab: (tab: NavTab) => void;
  initialMode?: 'welcome' | 'signin' | 'signup';
  gateMessage?: string;
  targetTab?: NavTab | null;
}

export const AuthPageView: React.FC<AuthPageViewProps> = ({
  onSuccess,
  onNavigateToTab,
  initialMode = 'welcome',
  gateMessage,
}) => {
  // Always open on the Welcome Options screen first
  const [viewState, setViewState] = useState<'welcome' | 'form'>('welcome');
  const [formMode, setFormMode] = useState<'signin' | 'signup'>(
    initialMode === 'signin' ? 'signin' : 'signup'
  );
  const [selectedRole, setSelectedRole] = useState<UserRole>('Learner');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [partnerNumber, setPartnerNumber] = useState('');
  const [partnerNotice, setPartnerNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'support' | 'help' | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerNumber.trim()) {
      setPartnerNotice('Please enter your partner organization or referral ID.');
      return;
    }
    setPartnerNotice(null);
    setSelectedRole('Partner');
    setFullName('Referred Partner Member');
    setEmail(`partner-${partnerNumber.toLowerCase().replace(/[^a-z0-9]/g, '')}@leashed.io`);
    setFormMode('signup');
    setViewState('form');
  };

  const handleSelectGoal = (goal: 'training' | 'software') => {
    if (goal === 'training') {
      setSelectedRole('Learner');
      setFormMode('signup');
      setViewState('form');
    } else {
      setSelectedRole('Salon Owner');
      setFormMode('signup');
      setViewState('form');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please fill in all required credentials.');
      return;
    }

    if (formMode === 'signup' && !fullName.trim()) {
      setError('Please enter your full name to set up your profile.');
      return;
    }

    if (formMode === 'signup' && !agreeTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const user: AuthUser = {
        name: formMode === 'signup' ? fullName : (email.split('@')[0] || 'Member'),
        email,
        role: selectedRole,
      };
      onSuccess(user);
    }, 400);
  };

  const handleInstantDemoLogin = (role: UserRole = selectedRole) => {
    const demoProfiles: Record<UserRole, { name: string; email: string }> = {
      Learner: { name: 'Jordan Lee', email: 'jordan.lee@leashed.io' },
      'Salon Owner': { name: 'Elena Vance', email: 'elena@pawsprosalon.com' },
      Instructor: { name: 'Marcus Sterling', email: 'm.sterling@leashed.academy' },
      Partner: { name: 'City Shelter Alliance', email: 'director@cityshelter.org' },
    };

    const profile = demoProfiles[role];
    onSuccess({
      name: profile.name,
      email: profile.email,
      role: role,
    });
  };

  const roles: UserRole[] = ['Learner', 'Instructor', 'Partner', 'Salon Owner'];

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans antialiased text-slate-800 flex flex-col justify-center">
      {/* BEGIN: MainContainer */}
      <main className="w-full min-h-screen flex flex-col lg:flex-row shadow-2xl overflow-hidden bg-white">
        
        {/* BEGIN: LeftHeroColumn */}
        <section className="relative w-full lg:w-[48%] min-h-[620px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0d1624]">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ZkN2wVdUzxwsk4GWDfgUTVRaTEZFKtGK5QKbHb9KUKa-LtRPPLPVF2jG_CexQAKJlh2T5DEp4lXx77kmfejuPccirpu6xxpML3xEYwe1gZnJhdFkqNCfxCsw1AxYQgAVYvfmUpgJst7_vLQcWQitVv2GRZWM2iiu_4NJ4n-qYwcN5V9ZVVpA4GAoWFAuxDumJTX0AzdAQop2LyLPvLsao9HTWdtSFlTyGaZeCkoJMu9PZdTW4Zpt"
              alt="Professional groomer caring for a dog"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              referrerPolicy="no-referrer"
              className="object-cover object-center brightness-75 mix-blend-luminosity opacity-40"
              priority
            />
            {/* Deep Gradient Overlays to match visual darkness and contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b]/95 via-[#070e1b]/85 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-[#070e1b]/70"></div>
          </div>

          {/* Top Branding Section */}
          <div className="relative z-10 p-8 md:p-12 lg:p-14">
            {/* Brand Logo and Tagline */}
            <div 
              onClick={() => onNavigateToTab('landing')}
              className="flex items-center gap-3.5 cursor-pointer group"
            >
              {/* Paw Print Logo with Inner Heart SVG */}
              <div className="w-12 h-12 flex-shrink-0 text-white group-hover:scale-105 transition-transform">
                <svg className="w-full h-full drop-shadow-md" fill="currentColor" viewBox="0 0 100 100">
                  <ellipse cx="23" cy="36" rx="10" ry="14" transform="rotate(-18 23 36)"></ellipse>
                  <ellipse cx="41" cy="22" rx="9" ry="13" transform="rotate(-4 41 22)"></ellipse>
                  <ellipse cx="61" cy="22" rx="9" ry="13" transform="rotate(4 61 22)"></ellipse>
                  <ellipse cx="79" cy="36" rx="10" ry="14" transform="rotate(18 79 36)"></ellipse>
                  <path d="M51,41 C37,41 26,52 26,67 C26,82 45,95 51,98 C57,95 76,82 76,67 C76,52 65,41 51,41 Z M51,83 C45,78 37,70 37,63 C37,56 42,52 47,54 C49,55 50,57 51,58 C52,57 53,55 55,54 C60,52 65,56 65,63 C65,70 57,78 51,83 Z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-none">Leashed.io</h1>
                <p className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide mt-1">Skills. Stability. Second Chances.</p>
              </div>
            </div>
          </div>

          {/* Center Hero Content Section */}
          <div className="relative z-10 px-8 md:px-12 lg:px-14 my-auto py-6">
            {/* Eyebrow Pill */}
            <div className="inline-block bg-slate-800/80 border border-slate-700/60 rounded-md px-3 py-1 mb-5 backdrop-blur-sm">
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">Welcome to Leashed.io</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight mb-6">
              Build Your Future.<br />
              With Skills, Support<br />
              <span className="text-[#38bdf8]">and Opportunity.</span>
            </h2>

            {/* Descriptive Copy */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-normal opacity-90">
              Whether you&apos;re here to get trained or grow your business, Leashed.io gives you the tools, training, and support to succeed in the pet care industry.
            </p>

            {/* Feature Pillars (Horizontal 3-Column Layout) */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-10 pt-4 border-t border-slate-700/50">
              {/* Pillar 1 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full border border-slate-500/60 bg-slate-800/60 flex items-center justify-center mb-3 text-cyan-400 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-white text-xs sm:text-sm font-bold tracking-tight">Get Certified</h3>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-normal mt-1">Professional training and real-world skills.</p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full border border-slate-500/60 bg-slate-800/60 flex items-center justify-center mb-3 text-cyan-400 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="6.5" cy="8.5" r="2.2"></circle>
                    <circle cx="11.5" cy="5.5" r="2.2"></circle>
                    <circle cx="16.5" cy="6.5" r="2.2"></circle>
                    <circle cx="19.5" cy="11.5" r="2.2"></circle>
                    <path d="M12 11.5c-3.2 0-6 2.2-6 5.2 0 2.5 2.5 4.8 6 4.8s6-2.3 6-4.8c0-3-2.8-5.2-6-5.2z"></path>
                  </svg>
                </div>
                <h3 className="text-white text-xs sm:text-sm font-bold tracking-tight">Launch Your Business</h3>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-normal mt-1">Turn your skills into income and independence.</p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full border border-slate-500/60 bg-slate-800/60 flex items-center justify-center mb-3 text-cyan-400 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-white text-xs sm:text-sm font-bold tracking-tight">Stronger Communities</h3>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-normal mt-1">Creating opportunities for underserved individuals.</p>
              </div>
            </div>
          </div>

          {/* Bottom Branding / Return Link */}
          <div className="relative z-10 px-8 md:px-12 lg:px-14 pb-8 pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60">
            <span>© 2026 Leashed.io Social Impact LMS</span>
            <button
              type="button"
              onClick={() => onNavigateToTab('landing')}
              className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Homepage
            </button>
          </div>
        </section>
        {/* END: LeftHeroColumn */}

        {/* BEGIN: RightPortalColumn */}
        <section className="w-full lg:w-[52%] bg-white flex flex-col justify-between p-6 sm:p-10 lg:px-14 lg:py-8 min-h-screen">
          
          {/* Top Navigation & Language Selector */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={() => {
                if (viewState === 'form') {
                  setViewState('welcome');
                } else {
                  onNavigateToTab('landing');
                }
              }}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-2 py-1 rounded transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-500" />
              <span>{viewState === 'form' ? 'Back to Options' : 'Home'}</span>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-2 py-1 rounded transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.6"></circle>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeWidth="1.6"></path>
                </svg>
                <span>{selectedLanguage}</span>
                <svg className="w-3.5 h-3.5 text-slate-500 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-30 text-xs">
                  {['English', 'Español', 'Français', 'Português'].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-slate-50 cursor-pointer ${
                        selectedLanguage === lang ? 'font-bold text-blue-600' : 'text-slate-700'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Action Content Area */}
          <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center py-4">
            
            {/* Contextual Gate Banner (if redirected from locked feature) */}
            {gateMessage && (
              <div className="mb-6 p-3.5 rounded-xl bg-blue-50 border border-blue-200/90 text-blue-900 text-xs flex items-start gap-2.5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Access Protected: </span>
                  <span>{gateMessage}</span>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* VIEW 1: WELCOME SELECTION (The exact 2 cards + partner referral + catalog) */}
            {/* ========================================================================= */}
            {viewState === 'welcome' && (
              <div className="animate-in fade-in duration-200">
                {/* Center Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Welcome to Leashed.io</h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5">Choose what you&apos;d like to do, and we&apos;ll get you started.</p>
                </div>

                {/* Two Primary Large Options Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Card 1: Training (Royal Blue) */}
                  <div className="bg-[#1e6bf2] text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md transition hover:shadow-lg relative overflow-hidden group">
                    {/* Graduation Cap Icon in White Circle */}
                    <div className="w-13 h-13 p-3.5 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md group-hover:scale-105 transition-transform">
                      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1e6bf2]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">I want to get training</h3>
                    <p className="text-xs text-blue-50/90 leading-relaxed mb-6 font-normal min-h-[50px]">
                      Join the Leashed Academy and learn in-demand skills, including pet grooming, business, and life skills.
                    </p>
                    {/* White CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleSelectGoal('training')}
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-[#1e6bf2] hover:bg-slate-50 font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-sm transition-all w-full max-w-[190px] cursor-pointer"
                    >
                      <span>Get Training</span>
                      <span>→</span>
                    </button>
                  </div>

                  {/* Card 2: Software (Soft Mint/Sage Green) */}
                  <div className="bg-[#e7f7f2] border border-[#cbece2] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm transition hover:shadow-md group">
                    {/* Laptop Icon in White Circle */}
                    <div className="w-13 h-13 p-3.5 bg-white/60 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 shadow-sm">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">I want to get software</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal min-h-[50px]">
                      Access the Leashed Groomer Management System to run your business, manage clients, and grow your salon.
                    </p>
                    {/* Dark CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleSelectGoal('software')}
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-[#0c1f33] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-sm transition-all w-full max-w-[190px] cursor-pointer"
                    >
                      <span>Get Software</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Hairline Divider: Already part of the program? */}
                <div className="relative flex py-3 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-4 text-[11px] font-medium text-slate-700 uppercase tracking-wider">Already part of the program?</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                {/* Partner Number Referral Box */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 bg-white shadow-xs">
                  {/* Left Icon & Info */}
                  <div className="flex items-center gap-3.5 w-full md:w-auto">
                    <div className="w-10 h-10 rounded-full bg-[#1e6bf2] text-white flex-shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 16.5a4.5 4.5 0 00-3-4.24V14a5 5 0 013 2.5zM4 16.5A4.5 4.5 0 017 12.26V14a5 5 0 00-3 2.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Do you have a partner number?</h4>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">If you&apos;ve been referred by a partner organization, enter your number to get started.</p>
                      {partnerNotice && (
                        <p className="text-[11px] text-amber-600 font-medium mt-1">{partnerNotice}</p>
                      )}
                    </div>
                  </div>
                  {/* Input + Continue Button Form */}
                  <form onSubmit={handlePartnerSubmit} className="flex items-center gap-2 w-full md:w-auto flex-shrink-0">
                    <input
                      type="text"
                      value={partnerNumber}
                      onChange={(e) => setPartnerNumber(e.target.value)}
                      placeholder="Enter partner number"
                      className="w-full md:w-44 text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    />
                    <button
                      type="submit"
                      className="bg-[#1e6bf2] hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors shadow-xs cursor-pointer shrink-0"
                    >
                      Continue
                    </button>
                  </form>
                </div>

                {/* Hairline Divider: OR */}
                <div className="relative flex py-3 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-4 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">OR</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                {/* Course Catalog Card */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-xs">
                  {/* Left Icon & Info */}
                  <div className="flex items-center gap-3.5 w-full sm:w-auto">
                    <div className="w-10 h-10 rounded-full bg-[#1e6bf2] text-white flex-shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">See Courses</h4>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">Browse our course catalog to learn more about the training available.</p>
                    </div>
                  </div>
                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => onNavigateToTab('landing')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-[#1e6bf2] text-[#1e6bf2] hover:bg-blue-50 font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    <span>View Courses</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Bottom Sign-in Section */}
                <div className="mt-8 text-center">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Already have an account?</h4>
                  <p className="text-xs text-slate-500 mt-0.5 mb-3">Sign in to access your workspace.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormMode('signin');
                      setViewState('form');
                    }}
                    className="w-full max-w-sm inline-flex items-center justify-center gap-2 border border-[#1e6bf2] text-[#1e6bf2] hover:bg-blue-50 font-bold text-xs sm:text-sm py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
                  >
                    {/* Sign In Icon */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
                    </svg>
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* VIEW 2: INTERACTIVE SIGN IN / REGISTRATION FORM */}
            {/* ========================================================================= */}
            {viewState === 'form' && (
              <div className="animate-in fade-in duration-200">
                <div className="space-y-1.5 mb-6 text-center sm:text-left">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                      {formMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
                    </h1>
                    <button
                      type="button"
                      onClick={() => setViewState('welcome')}
                      className="text-xs text-blue-600 hover:underline font-medium cursor-pointer"
                    >
                      ← Back to Options
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    {formMode === 'signup'
                      ? 'Your journey starts here. Choose your role to personalize your workspace.'
                      : 'Sign in to access your courses, scenario simulations, and certifications.'}
                  </p>
                </div>

                {/* Role Selector Tabs */}
                <div
                  aria-label="Account Role Selection"
                  className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-lg mb-6"
                  role="tablist"
                >
                  {roles.map((role) => {
                    const isActive = selectedRole === role;
                    return (
                      <button
                        key={role}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setSelectedRole(role)}
                        className={`py-2 text-xs font-semibold rounded-md transition-all text-center cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {role}
                      </button>
                    );
                  })}
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name Field (Sign Up only) */}
                  {formMode === 'signup' && (
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="full-name">
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        name="full-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Jordan Lee"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition outline-none"
                      />
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition outline-none"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Terms / Remember Me */}
                  {formMode === 'signup' ? (
                    <div className="flex items-start gap-2 pt-1">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                        className="h-4 w-4 mt-0.5 rounded border border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed select-none">
                        I agree to the{' '}
                        <button
                          type="button"
                          onClick={() => setLegalModal('terms')}
                          className="text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                          Terms of Service
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={() => setLegalModal('privacy')}
                          className="text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                          Privacy Policy
                        </button>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <label className="flex items-center gap-2 text-slate-500 select-none cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <span>Remember me</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => alert('Password reset link has been dispatched to your email address.')}
                        className="text-blue-600 hover:underline font-medium cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  {/* Primary Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-xs text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-center cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Authenticating...</span>
                      ) : formMode === 'signup' ? (
                        <span>Create Account</span>
                      ) : (
                        <span>Sign In</span>
                      )}
                    </button>
                  </div>

                  {/* Instant Demo Login Button */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => handleInstantDemoLogin(selectedRole)}
                      className="text-[11px] text-slate-500 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                    >
                      Instant Demo Access as {selectedRole} &rarr;
                    </button>
                  </div>
                </form>

                {/* Footer Switcher between Signin and Signup */}
                <div className="mt-6 text-center pt-3 border-t border-slate-100">
                  {formMode === 'signup' ? (
                    <p className="text-xs text-slate-500">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setFormMode('signin');
                          setError(null);
                        }}
                        className="text-blue-600 font-semibold hover:underline cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500">
                      Don&apos;t have an account?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setFormMode('signup');
                          setError(null);
                        }}
                        className="text-blue-600 font-semibold hover:underline cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Utilities & Legal Links */}
          <footer className="mt-8 pt-4 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 text-[11px] text-slate-500 font-medium">
              <button
                type="button"
                onClick={() => setLegalModal('help')}
                className="hover:text-slate-800 transition cursor-pointer"
              >
                Need Help?
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setLegalModal('support')}
                className="hover:text-slate-800 transition cursor-pointer"
              >
                Contact Support
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-800 transition cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-800 transition cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </footer>
        </section>
        {/* END: RightPortalColumn */}
      </main>
      {/* END: MainContainer */}

      {/* Info Dialog for Footer Links */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 text-slate-900">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'help' && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Getting Started with Leashed.io</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Training Pathway:</strong> Select &quot;I want to get training&quot; to join the Leashed Academy, master professional dog grooming, animal behavioral safety, and earn certified credentials.
                  </p>
                  <p>
                    <strong>2. Software Suite:</strong> Select &quot;I want to get software&quot; to access the Groomer Management System for salon booking, client management, and POS tracking.
                  </p>
                  <p>
                    <strong>3. Referral Codes:</strong> If you are enrolled through an animal shelter or workforce development agency, enter your partner number for sponsored tuition and equipment grant kits.
                  </p>
                </div>
              </div>
            )}

            {legalModal === 'support' && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Contact Support</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1 border border-slate-100">
                    <p className="font-semibold text-slate-800">Support Desk:</p>
                    <p className="text-blue-600 font-mono">support@leashed.io</p>
                    <p className="text-slate-500 text-[11px]">Available Mon–Sat 8:00 AM – 7:00 PM CST</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1 border border-slate-100">
                    <p className="font-semibold text-slate-800">Toll-Free Helpline:</p>
                    <p className="text-slate-800 font-mono font-bold">(800) 555-LEASH</p>
                  </div>
                </div>
              </div>
            )}

            {legalModal === 'privacy' && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-slate-900">Privacy Policy</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-64 overflow-y-auto pr-1">
                  <p>
                    Leashed.io is deeply committed to protecting student and partner privacy. We collect only the educational and verification data needed to administer vocational grants, certifications, and apprentice mentorship.
                  </p>
                  <p>
                    Student records and simulation evaluations are protected under strict encryption standards and never sold or shared with third-party advertisers.
                  </p>
                </div>
              </div>
            )}

            {legalModal === 'terms' && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Terms of Service</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-64 overflow-y-auto pr-1">
                  <p>
                    By accessing Leashed.io courses or software toolkits, users agree to uphold humane animal welfare standards, compassionate handling, and professional salon safety protocols.
                  </p>
                  <p>
                    Certification credentials require satisfactory completion of hands-on simulation assessments and mentor sign-offs.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
