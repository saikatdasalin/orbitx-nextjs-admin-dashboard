# OrbitX - Admin Dashboard Template

A premium, feature-rich admin dashboard template built with Next.js 16, React 19, and Tailwind CSS 4. Includes 100+ pages, 6 layout variants, 6 color themes, and full dark mode support.

## Tech Stack

- **Next.js 16** with Turbopack
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Recharts** for data visualization
- **Lucide React** for icons
- **Headless UI** for accessible components

## Features

- **100+ Pages** across 35+ route categories
- **6 Layout Variants** - Quantum, Qubit, Electron, Neutron, Boron, Carbon
- **6 Color Themes** - Blue, Black, Teal, Violet, Rose, Yellow
- **Dark / Light Mode** with smooth transitions
- **RTL / LTR Support**
- **Fully Responsive** design
- **Settings Drawer** for live theme, layout, color, and direction switching
- **Persistent Settings** via localStorage

## Pages

| Category | Pages |
|---|---|
| **Dashboards** | File Manager, Appointment, Executive, Project, CRM, Affiliate, Store Analytics, Bidding, Social Media, Job Board, Financial, Logistics, E-Commerce, Analytics, Support, Podcast |
| **E-Commerce** | Products, Orders, Reviews, Cart, Checkout, Categories, Product Details, Order Details, Create/Edit pages |
| **Auth** | Sign In (5 variants), Sign Up (5 variants), Forgot Password (5 variants), OTP (5 variants) |
| **Invoice** | List, Details, Builder |
| **Support** | Inbox, Snippets, Templates |
| **Logistics** | Shipment List, Shipment Details, Tracking |
| **Tables** | Basic, Enhanced, Collapsible, Drag & Drop, Pagination, Pinning, Resizable, Search, Sticky Header |
| **Forms** | Account Settings, Profile Settings, Newsletter, Multi-Step |
| **Widgets** | Cards, Charts, Icons, Maps |
| **Utility** | Access Denied, Blank, Coming Soon, Maintenance, Welcome, Image Viewer |

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # 35 route categories (100+ pages)
├── components/
│   ├── cards/            # StatCard
│   ├── charts/           # AreaChart, BarChart, DonutChart, ProgressCircle
│   ├── layout/           # Header, Sidebar, DashboardLayout
│   │   └── layouts/      # Quantum, Qubit, Electron, Neutron, Boron, Carbon
│   ├── settings/         # SettingsDrawer
│   └── ui/               # Utility components
├── context/              # LayoutSettingsContext (theme/layout state)
├── data/                 # Static dashboard data
└── lib/                  # Utility functions
```

## Customization

### Theme Colors

Edit CSS variables in `src/app/globals.css` under `:root` and `.dark` selectors.

### Adding a New Color Theme

1. Add CSS variables in `globals.css` under a new `[data-color="name"]` block
2. Add the color option to the `ColorTheme` type in `src/context/LayoutSettingsContext.tsx`
3. Add the swatch to `src/components/settings/SettingsDrawer.tsx`

### Layout Variants

Each layout is a self-contained component in `src/components/layout/layouts/`. To create a new layout:

1. Create a new layout component in the `layouts/` directory
2. Register it in `src/components/layout/DashboardLayout.tsx`
3. Add it to the `LayoutType` type in `src/context/LayoutSettingsContext.tsx`
4. Add a preview thumbnail in the SettingsDrawer

## License

This is a premium template. Please refer to the license included with your purchase.
