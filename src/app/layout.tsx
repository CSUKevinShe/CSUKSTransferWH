import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RackingHub — Industrial Warehouse Racking Systems & Pallet Rack Solutions',
    template: '%s | RackingHub',
  },
  description:
    'Professional industrial warehouse racking systems and storage solutions. Selective pallet rack, drive-in, radio shuttle, cantilever, wire mesh deck, and metal pallet. Free planner tool, FEM/RMI standards, OEM/ODM manufacturing. Get expert quotes from certified suppliers.',
  keywords: [
    'industrial warehouse racking',
    'pallet racking systems',
    'warehouse racking systems',
    'pallet rack',
    'selective pallet racking',
    'drive-in racking',
    'radio shuttle racking',
    'cantilever racking',
    'push-back racking',
    'mezzanine racking',
    'VNA racking',
    'wire mesh deck',
    'metal pallet',
    'steel pallet',
    'warehouse storage systems',
    'warehouse planner tool',
    'racking calculator',
    'racking BOM',
    'FEM 10.2.02',
    'RMI MH16.1',
    'EN 15512',
    'ISO 9001',
    'OEM racking manufacturer',
    'ODM racking',
    'pallet rack design',
    'warehouse layout optimization',
    'material handling equipment',
  ],
  metadataBase: new URL('https://rackinghub.com'),
  alternates: {
    canonical: 'https://rackinghub.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RackingHub',
    title: 'RackingHub — Industrial Warehouse Racking Systems & Pallet Rack Solutions',
    description:
      'Professional industrial warehouse racking systems, pallet rack, drive-in, shuttle, cantilever racking. Free planner tool, FEM/RMI standards, expert quotes from certified manufacturers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RackingHub — Industrial Warehouse Racking Systems & Pallet Rack Solutions',
    description:
      'Professional industrial warehouse racking systems, pallet rack, drive-in, shuttle, cantilever racking. Free planner tool, FEM/RMI standards, expert quotes.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD structured data —强化 Industrial B2B 信号，隔离 C 端品牌混淆
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rackinghub.com/#organization',
  name: 'RackingHub',
  url: 'https://rackinghub.com',
  logo: 'https://rackinghub.com/favicon.svg',
  description:
    'Professional B2B resource platform for industrial warehouse racking systems, pallet racking design, and material handling equipment. Free planning tools, FEM/RMI standards reference, and certified supplier directory.',
  email: 'info@rackinghub.com',
  category: 'Material Handling Equipment',
  industry: 'Industrial Warehousing & Logistics',
  areaServed: 'Worldwide',
  knowsAbout: [
    'Industrial Warehouse Racking Systems',
    'Selective Pallet Racking',
    'Drive-In Racking',
    'Radio Shuttle Racking',
    'Mezzanine Floor Systems',
    'Wire Mesh Decking',
    'Metal Pallets',
    'FEM 10.2.02 Standard',
    'ANSI/RMI MH16.1',
    'EN 15512',
    'ISO 9001',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@rackinghub.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Chinese'],
  },
  sameAs: [
    'https://www.boracs.com',
  ],
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://rackinghub.com/#website',
  name: 'RackingHub',
  url: 'https://rackinghub.com',
  description:
    'Industrial warehouse racking systems, pallet rack solutions, and B2B supplier directory. Free planning tools, industry standards, and expert consultation.',
  publisher: {
    '@id': 'https://rackinghub.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rackinghub.com/resources/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const jsonLd = [organizationJsonLd, webSiteJsonLd];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-950 focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
