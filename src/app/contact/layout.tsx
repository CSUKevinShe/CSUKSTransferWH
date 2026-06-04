import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get Expert Racking Advice | RackingHub',
  description:
    'Contact RackingHub for expert warehouse racking advice, supplier recommendations, and project consultation. Reach our team directly — no automated systems.',
  keywords: [
    'warehouse racking consultation',
    'racking system quote',
    'pallet racking supplier',
    'warehouse storage expert',
    'racking project advice',
  ],
  openGraph: {
    title: 'Contact Us — Get Expert Racking Advice | RackingHub',
    description:
      'Contact RackingHub for expert warehouse racking advice, supplier recommendations, and project consultation.',
  },
  twitter: {
    title: 'Contact Us — Get Expert Racking Advice | RackingHub',
    description:
      'Contact RackingHub for expert warehouse racking advice, supplier recommendations, and project consultation.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
