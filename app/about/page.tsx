'use client';

import React, { useState } from 'react';
import { AboutPageView } from '@/components/about/AboutPageView';
import { AuthUser } from '@/components/auth/AuthModal';
import { useRouter } from 'next/navigation';
import { NavTab } from '@/components/Navbar';
import { getRouteForTab } from '@/lib/navigation';

export default function AboutPage() {
  const router = useRouter();

  const [currentUser] = useState<AuthUser | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('leashed_auth_user');
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    }
    return null;
  });

  const handleNavigateToTab = (tab: NavTab) => {
    router.push(getRouteForTab(tab));
  };

  return (
    <AboutPageView
      onNavigateToTab={handleNavigateToTab}
      currentUser={currentUser}
    />
  );
}
