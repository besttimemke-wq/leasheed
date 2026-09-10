import { NavTab } from '@/components/Navbar';

export const TAB_TO_ROUTE: Record<NavTab, string> = {
  home: '/',
  academy: '/academy',
  landing: '/academy',
  catalog: '/academy',
  courses: '/courses',
  training: '/training',
  paths: '/pathway',
  software: '/software',
  pricing: '/pricing',
  about: '/about',
  resources: '/resources',
  support: '/support',
  'scenario-builder': '/courses',
  '72h-plan': '/courses',
  analytics: '/courses',
  library: '/courses',
  'google-workspace': '/software',
  auth: '/auth',
};

export function getRouteForTab(tab: NavTab): string {
  return TAB_TO_ROUTE[tab] || '/';
}
