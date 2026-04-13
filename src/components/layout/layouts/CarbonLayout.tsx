"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, ChevronRight, X, HelpCircle } from "lucide-react";
import { useState } from "react";
import { navigationItems, NavItem } from "../navigation-data";
import HeaderDropdowns from "../HeaderDropdowns";

// Simplified navigation sections for Carbon layout
const carbonNavSections = [
  { name: "Dashboard", items: navigationItems[0].items.slice(0, 8) },
  { name: "Apps Kit", items: navigationItems[1].items.slice(0, 6) },
  { name: "Search", items: navigationItems[2]?.items || [] },
  { name: "Widgets", items: navigationItems[3]?.items || [] },
  { name: "Forms", items: navigationItems[4]?.items || [] },
  { name: "Tables", items: navigationItems[5]?.items || [] },
  { name: "Pages", items: navigationItems[6]?.items || [] },
  { name: "Authentication", items: navigationItems[7]?.items || [] },
];

function CollapsibleSection({ 
  name, 
  items, 
  isOpen, 
  onToggle 
}: { 
  name: string; 
  items: NavItem[]; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground dark:text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:hover:text-white"
      >
        <div className="flex h-5 w-5 items-center justify-center rounded bg-secondary">
          {isOpen ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </div>
        <span className="flex-1 text-left font-medium">{name}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      {isOpen && items.length > 0 && (
        <div className="ml-4 mt-1 space-y-1 pl-4">
          {items.slice(0, 8).map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-secondary text-foreground dark:text-white font-medium"
                  : "text-muted-foreground dark:text-muted-foreground hover:bg-accent hover:text-foreground dark:hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto rounded-full bg-green-100 dark:bg-green-900 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CarbonLayout({ children }: { children: React.ReactNode }) {
  const [openSections, setOpenSections] = useState<string[]>(["Dashboard"]);
  const [showSupport, setShowSupport] = useState(true);

  const toggleSection = (name: string) => {
    setOpenSections((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900" suppressHydrationWarning>
      {/* Sidebar with workspace selector */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-card flex flex-col">
        {/* Logo */}
        <div className="flex h-14 items-center gap-2 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="OrbitX Logo" width={32} height={32} />
            <span className="text-lg font-semibold text-foreground dark:text-white">OrbitX</span>
          </Link>
        </div>

        {/* Workspace Selector */}
        <div className="border-b border-border p-4">
          <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-secondary px-3 py-2 text-sm hover:bg-accent">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="text-xs font-bold text-white">RQ</span>
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-foreground dark:text-white">REDQ</div>
              <div className="text-xs text-muted-foreground dark:text-muted-foreground">Select Workspace</div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Menu Label */}
        <div className="px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-muted-foreground">
            Menu
          </span>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4">
          <nav className="space-y-1">
            {carbonNavSections.map((section) => (
              <CollapsibleSection
                key={section.name}
                name={section.name}
                items={section.items}
                isOpen={openSections.includes(section.name)}
                onToggle={() => toggleSection(section.name)}
              />
            ))}
          </nav>
        </div>

        {/* Support Section */}
        {showSupport && (
          <div className="border-t border-border p-4">
            <div className="rounded-lg bg-secondary p-4 relative">
              <button
                onClick={() => setShowSupport(false)}
                className="absolute right-2 top-2 p-1 rounded hover:bg-muted"
              >
                <X className="h-3 w-3 text-muted-foreground" />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                <h6 className="font-medium text-foreground dark:text-white text-sm">Need Support?</h6>
              </div>
              <p className="text-xs text-muted-foreground dark:text-muted-foreground mb-3">
                Contact with one of our experts to get support.
              </p>
              <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-accent">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
                <div className="flex-1 text-left">
                  <div className="font-medium text-foreground dark:text-white text-sm">Elsie Burnett</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground">Chief Officer</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className="ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-card px-6">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:bg-accent">
            <Search className="h-4 w-4" />
            <span>Search your page...</span>
            <kbd className="ml-8 rounded bg-muted dark:bg-gray-600 px-2 py-0.5 text-xs">⌘K</kbd>
          </button>

          <HeaderDropdowns variant="compact" />
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
