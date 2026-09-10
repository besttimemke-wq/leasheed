'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import { NavTab } from '@/components/Navbar';

interface SharedFooterProps {
  onNavigateToTab: (tab: NavTab) => void;
}

export const SharedFooter: React.FC<SharedFooterProps> = ({ onNavigateToTab }) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isNonprofitsModalOpen, setIsNonprofitsModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  return (
    <>
      {/* ========================================================================= */}
      {/* 4. FOOTER & IMPACT SECTION (USING ASSET /assets/footer.png) */}
      {/* ========================================================================= */}
      <footer
        id="footer-section"
        aria-label="Impact and Partners Footer"
        className="relative w-full bg-[#07111e] overflow-hidden border-t border-slate-900"
      >
        <div className="relative w-full">
          {/* High resolution footer image asset from user */}
          <Image
            src="/assets/footer.png"
            alt="Leashed.io Community Impact, Trusted Partners, and Footer"
            width={1156}
            height={645}
            className="w-full h-auto object-cover block"
            priority
          />

          {/* Interactive Clickable Hotspot Layer (100% transparent, NO hover boxes/borders) */}
          <div className="absolute inset-0 z-10 pointer-events-auto">
            {/* PARTNER 1: Department of Labor */}
            <a
              href="https://www.dol.gov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit U.S. Department of Labor (opens in a new tab)"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '60.0%', top: '64.5%', width: '10.5%', height: '10.0%' }}
            />

            {/* PARTNER 2: USDA */}
            <a
              href="https://www.usda.gov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit USDA (opens in a new tab)"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '73.0%', top: '64.5%', width: '5.5%', height: '10.0%' }}
            />

            {/* PARTNER 3: Goodwill */}
            <a
              href="https://www.goodwill.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Goodwill Industries (opens in a new tab)"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '80.0%', top: '64.5%', width: '5.5%', height: '10.0%' }}
            />

            {/* PARTNER 4: Local Nonprofits */}
            <button
              type="button"
              onClick={() => setIsNonprofitsModalOpen(true)}
              aria-label="Explore Local Nonprofits and Community Partners"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '87.0%', top: '64.5%', width: '9.8%', height: '10.0%' }}
            />

            {/* FOOTER: Leashed.io Brand / Logo */}
            <button
              type="button"
              onClick={() => onNavigateToTab('home')}
              aria-label="Leashed.io Home"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '3.5%', top: '87.0%', width: '12.0%', height: '8.0%' }}
            />

            {/* FOOTER: Privacy Policy */}
            <button
              type="button"
              onClick={() => setLegalModalContent('privacy')}
              aria-label="Privacy Policy"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '34.5%', top: '89.5%', width: '6.2%', height: '4.0%' }}
            />

            {/* FOOTER: Terms of Service */}
            <button
              type="button"
              onClick={() => setLegalModalContent('terms')}
              aria-label="Terms of Service"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '41.2%', top: '89.5%', width: '7.2%', height: '4.0%' }}
            />

            {/* FOOTER: Contact */}
            <button
              type="button"
              onClick={() => setLegalModalContent('contact')}
              aria-label="Contact Us"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '49.0%', top: '89.5%', width: '4.5%', height: '4.0%' }}
            />

            {/* FOOTER: Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leashed.io on Facebook"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '63.8%', top: '89.5%', width: '2.0%', height: '4.0%' }}
            />

            {/* FOOTER: Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leashed.io on Instagram"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '66.2%', top: '89.5%', width: '2.0%', height: '4.0%' }}
            />

            {/* FOOTER: YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leashed.io on YouTube"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '68.6%', top: '89.5%', width: '2.0%', height: '4.0%' }}
            />

            {/* FOOTER: LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leashed.io on LinkedIn"
              className="absolute cursor-pointer border-0 outline-none bg-transparent select-none focus:outline-none focus:ring-0"
              style={{ left: '71.0%', top: '89.5%', width: '2.0%', height: '4.0%' }}
            />
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL: LOCAL NONPROFITS & COMMUNITY PARTNERS */}
      {/* ========================================================================= */}
      {isNonprofitsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0c1626] border border-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
                  🤝
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Community &amp; Nonprofit Partners</h3>
                  <p className="text-xs text-slate-400">Collaborating for second chances and workforce mobility</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsNonprofitsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Leashed.io works hand-in-hand with regional rescue organizations, re-entry shelters, and vocational workforce initiatives across all 50 states. Our curriculum and software are provided at subsidized and scholarship rates to community partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Vocational Transition</span>
                <h4 className="text-sm font-bold text-white">Second Chance Re-Entry</h4>
                <p className="text-xs text-slate-400">Guiding justice-impacted and unhoused individuals into certified pet grooming trades.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Animal Welfare</span>
                <h4 className="text-sm font-bold text-white">Shelter Care Alliances</h4>
                <p className="text-xs text-slate-400">Partnering with humane societies to provide free grooming and increase adoption velocity.</p>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-700">
              <button
                type="button"
                onClick={() => setIsNonprofitsModalOpen(false)}
                className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: LEGAL (PRIVACY, TERMS, CONTACT) */}
      {/* ========================================================================= */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0c1626] border border-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <h3 className="text-xl font-bold text-white capitalize">
                {legalModalContent === 'privacy' && 'Privacy Policy'}
                {legalModalContent === 'terms' && 'Terms of Service'}
                {legalModalContent === 'contact' && 'Contact Support & Inquiries'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed space-y-4">
              {legalModalContent === 'privacy' && (
                <>
                  <p>
                    At Leashed.io, your privacy and trust are paramount. We collect only the data necessary to deliver your grooming courses, track your certifications, and manage your pet salon operations securely.
                  </p>
                  <p>
                    We never sell personal information to third parties. All user and transaction data is encrypted in transit and at rest using bank-grade AES-256 standard protocols.
                  </p>
                  <p className="text-xs text-slate-400">Last updated: October 2025. Compliant with SOC2 and CCPA guidelines.</p>
                </>
              )}

              {legalModalContent === 'terms' && (
                <>
                  <p>
                    By using Leashed.io Academy and Software, you agree to uphold our community standards of ethical animal care, authentic certification completion, and professional groomer conduct.
                  </p>
                  <p>
                    All course materials, video lessons, and operational templates remain the intellectual property of Leashed.io and its accredited partners.
                  </p>
                  <p className="text-xs text-slate-400">Terms apply to all individual learners, salon enterprise accounts, and nonprofit participants.</p>
                </>
              )}

              {legalModalContent === 'contact' && (
                <>
                  <p>
                    Have questions about courses, certifications, enterprise software pricing, or nonprofit partner scholarships?
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <p className="text-white font-semibold">Email: support@leashed.io</p>
                    <p className="text-slate-400">Response Time: Typically within 2 to 4 business hours</p>
                    <p className="text-slate-400">Headquarters: Austin, TX &bull; Operating Nationwide</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-700">
              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
