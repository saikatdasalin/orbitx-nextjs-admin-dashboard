"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { navigationItems, NavItem } from "../navigation-data";
import HeaderDropdowns from "../HeaderDropdowns";

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
          : "text-muted-foreground dark:text-muted-foreground hover:bg-accent hover:text-foreground dark:hover:text-white"
      )}
    >
      <item.icon className="h-5 w-5" />
      <span className="flex-1">{item.name}</span>
      {item.shortcut && (
        <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
          <kbd className="rounded bg-secondary px-1.5 py-0.5">⌘</kbd>
          <kbd className="rounded bg-secondary px-1.5 py-0.5">{item.shortcut}</kbd>
        </span>
      )}
      {item.badge && (
        <span className="rounded-full bg-green-100 dark:bg-green-900 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
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
    <div suppressHydrationWarning>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground dark:text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:hover:text-white"
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
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4" suppressHydrationWarning>
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              item={child}
              isActive={pathname === child.href}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BoronLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900" suppressHydrationWarning>
      {/* Sidebar with keyboard shortcuts */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-72 bg-card">
        <div className="h-[calc(100vh)] overflow-y-auto px-4 py-4">
          <div className="space-y-6">
            {navigationItems.slice(0, 2).map((section) => (
              <div key={section.title}>
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-muted-foreground">
                  {section.title}
                </h3>
                <nav className="space-y-1">
                  {section.items.map((item) =>
                    item.children ? (
                      <CollapsibleNavItem key={item.name} item={item} />
                    ) : (
                      <NavLink
                        key={item.href}
                        item={item}
                        isActive={pathname === item.href}
                      />
                    )
                  )}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-72">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-card px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="OrbitX Logo" width={32} height={32} />
            <span className="text-lg font-semibold text-foreground dark:text-white">OrbitX</span>
          </Link>

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
