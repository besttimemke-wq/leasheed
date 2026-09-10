'use client';

import React from 'react';
import { AuthPageView, AuthUser } from '@/components/auth/AuthPageView';
import { useRouter } from 'next/navigation';
import { NavTab } from '@/components/Navbar';
import { getRouteForTab } from '@/lib/navigation';

export default function AuthPage() {
  const router = useRouter();

  const handleNavigateToTab = (tab: NavTab) => {
    router.push(getRouteForTab(tab));
  };

  const handleAuthSuccess = (user: AuthUser) => {
    try {
      localStorage.setItem('leashed_auth_user', JSON.stringify(user));
    } catch (e) {
      console.error('Error storing session:', e);
    }
    router.push('/courses');
  };

  return (
    <AuthPageView
      onSuccess={handleAuthSuccess}
      onNavigateToTab={handleNavigateToTab}
    />
  );
}
