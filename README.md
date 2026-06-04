# RackingHub v2

A neutral, curator-driven B2B platform for warehouse racking professionals. Free planning tools, vetted industry resources, and expert knowledge.

## Quick Start

### Requirements
- Node.js 18+ (LTS recommended)
- npm 9+

### Install & Run
```bash
cd rackinghub-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Output directory: `out/` (static files for Cloudflare Pages)

## Directory Structure

```
src/
  app/                   # Next.js App Router pages
    planner/             # Warehouse racking planner tool
    resources/           # Industry resources directory
    learn/               # Knowledge center articles
    about/               # About page
    contact/             # Contact form
  components/
    layout/              # Header, Footer
    planner/             # Planner-specific components
      ParamPanel.tsx     # Parameter input panel (collapsible sections)
      LayoutCanvas.tsx   # 2D SVG layout visualization
      ResultSummary.tsx  # Plan summary (default expanded)
      BOMTable.tsx       # Bill of materials (default collapsed)
      CTASection.tsx     # Conversion buttons
  lib/
    calculator/          # Core calculation engine (pure functions)
      types.ts           # TypeScript type definitions
      config.ts          # Rack type configs, defaults, constraints
      layout.ts          # Layout calculation
      costing.ts         # Cost estimation + BOM generation
    store/               # Zustand state management
    data/                # Static data (resources, articles)
    utils.ts             # Utility functions
```

## Tech Stack
- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (via GitHub)

## Key Features
- **Free Warehouse Planner**: Interactive layout calculator with instant 2D diagrams
- **Resource Directory**: Curated industry standards, manufacturers, and tools
- **Knowledge Center**: Expert guides on racking standards and system selection
- **100% Static**: No server required, optimized for performance
- **SEO Optimized**: Proper metadata, structured content, semantic HTML

## Deployment
```bash
npm run build
# Upload `out/` directory to Cloudflare Pages
# Build command: npm run build
# Output directory: out
```
