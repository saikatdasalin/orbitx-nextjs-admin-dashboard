"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  FolderOpen,
  Calendar,
  Briefcase,
  FolderKanban,
  Users,
  Link2,
  Store,
  Gavel,
  Share2,
  Building2,
  DollarSign,
  Truck,
  ShoppingCart,
  BarChart3,
  HeadphonesIcon,
  Podcast,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  children?: NavItem[];
}

const overviewItems: NavItem[] = [
  { name: "File Manager", href: "/", icon: FolderOpen },
  { name: "Appointment", href: "/appointment", icon: Calendar },
  { name: "Executive", href: "/executive", icon: Briefcase },
  { name: "Project", href: "/project", icon: FolderKanban },
  { name: "CRM", href: "/crm", icon: Users },
  { name: "Affiliate", href: "/affiliate", icon: Link2 },
  {
    name: "Store Analytics",
    href: "/store-analytics",
    icon: Store,
    badge: "NEW",
  },
  { name: "Bidding", href: "/bidding", icon: Gavel, badge: "NEW" },
  { name: "Social Media", href: "/social-media", icon: Share2 },
  { name: "Job Board", href: "/job-board", icon: Building2 },
  { name: "Financial", href: "/financial", icon: DollarSign },
  { name: "Logistics", href: "/logistics", icon: Truck },
  { name: "E-Commerce", href: "/ecommerce", icon: ShoppingCart },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Support", href: "/support", icon: HeadphonesIcon },
  { name: "Podcast", href: "/podcast", icon: Podcast, badge: "NEW" },
];

const appsKitItems: NavItem[] = [
  {
    name: "E-Commerce",
    href: "#",
    icon: ShoppingCart,
    children: [
      { name: "Products", href: "/ecommerce/products", icon: ShoppingCart },
      { name: "Orders", href: "/ecommerce/orders", icon: ShoppingCart },
      { name: "Reviews", href: "/ecommerce/reviews", icon: ShoppingCart },
    ],
  },
  {
    name: "Support",
    href: "#",
    icon: HeadphonesIcon,
    children: [
      { name: "Inbox", href: "/support/inbox", icon: HeadphonesIcon },
      { name: "Snippets", href: "/support/snippets", icon: HeadphonesIcon },
      { name: "Templates", href: "/support/templates", icon: HeadphonesIcon },
    ],
  },
  {
    name: "Invoice",
    href: "#",
    icon: DollarSign,
    children: [
      { name: "List", href: "/invoice/list", icon: DollarSign },
      { name: "Details", href: "/invoice/details", icon: DollarSign },
      { name: "Builder", href: "/invoice/builder", icon: DollarSign },
    ],
  },
  {
    name: "Logistics",
    href: "#",
    icon: Truck,
    children: [
      { name: "Shipment List", href: "/logistics/shipment-list", icon: Truck },
      {
        name: "Shipment Details",
        href: "/logistics/shipment-details",
        icon: Truck,
      },
      { name: "Tracking", href: "/logistics/tracking", icon: Truck },
    ],
  },
];

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-secondary text-foreground font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-foreground"
      )}
    >
      <item.icon className="h-5 w-5" />
      <span className="flex-1">{item.name}</span>
      {item.badge && (
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

function CollapsibleNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <item.icon className="h-5 w-5" />
        <span className="flex-1 text-left">{item.name}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      {isOpen && item.children && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {item.children.map((child, index) => (
            <NavLink
              key={`${item.name}-${child.href}-${index}`}
              item={child}
              isActive={pathname === child.href}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-card">
      <div className="flex h-16 items-center gap-2 px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="OrbitX Logo" width={32} height={32} />
          <span className="text-lg font-semibold text-foreground">
            OrbitX
          </span>
        </div>
      </div>

      <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Overview
            </h3>
            <nav className="space-y-1">
              {overviewItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Apps Kit
            </h3>
            <nav className="space-y-1">
              {appsKitItems.map((item) => (
                <CollapsibleNavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
