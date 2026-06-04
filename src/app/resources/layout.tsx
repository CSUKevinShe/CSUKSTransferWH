import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warehouse Racking Planner & Resources',
  description:
    'Free warehouse racking planner and curated directory of material handling racking systems, industry standards (FEM, EN, ISO), and pallet rack design resources for warehouse professionals.',
  openGraph: {
    title: 'Warehouse Racking Planner & Resources',
    description:
      'Free warehouse racking planner and curated directory of material handling racking systems, industry standards, and pallet rack design resources for warehouse professionals.',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
