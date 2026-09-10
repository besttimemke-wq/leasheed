import type {Metadata} from 'next';
import { Inter, Caveat } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leashed LMS Dashboard | Skills. Stability. Second Chances.',
  description: 'Leashed.io Social Impact LMS & Enterprise Training Platform with user management, real-time course progress tracking, branching scenario builder, and Google Stitch HTML-to-React onboarding flow.',
  openGraph: {
    title: 'Leashed LMS Dashboard | Skills. Stability. Second Chances.',
    description: 'Leashed.io Social Impact LMS & Enterprise Training Platform with user management, real-time course progress tracking, branching scenario builder, and Google Stitch HTML-to-React onboarding flow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leashed LMS Dashboard | Skills. Stability. Second Chances.',
    description: 'Leashed.io Social Impact LMS & Enterprise Training Platform with user management, real-time course progress tracking, branching scenario builder, and Google Stitch HTML-to-React onboarding flow.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`w-full min-h-screen m-0 p-0 ${inter.variable} ${caveat.variable}`}>
      <body suppressHydrationWarning className="w-full min-h-screen m-0 p-0 antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
