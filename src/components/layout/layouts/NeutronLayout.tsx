"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { iconNavItems, navigationItems, NavItem } from "../navigation-data";
import HeaderDropdowns from "../HeaderDropdowns";

export default function NeutronLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const currentSectionItems =
    navigationItems.find((section) => section.title === activeSection)?.items || [];

  return (
    <div
      className="min-h-screen bg-secondary dark:bg-gray-900"
      suppressHydrationWarning
    >
      <button
        type="button"
        aria-label="Close sidebar"
        onClick={() => setSidebarOpen(false)}
        className={cn(
          "fixed inset-0 z-[35] bg-black/40 transition-opacity lg:hidden",
          sidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* Icon Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-16 flex-col bg-card transform transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center">
          <button className="rounded-lg p-2 hover:bg-accent">
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-2 px-2">
            {iconNavItems.map((item, index) => (
              <li key={`icon-nav-${index}-${item.name}`}>
                <button
                  onClick={() => setActiveSection(item.section)}
                  className={cn(
                    "flex w-full flex-col items-center gap-1 rounded-lg p-2 text-xs transition-colors",
                    activeSection === item.section
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground dark:hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Secondary Sidebar */}
      {activeSection && (
        <aside
          className={cn(
            "fixed left-16 top-0 z-30 h-screen w-56 bg-secondary/50 transform transition-transform duration-300 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center px-4">
            <h2 className="font-semibold text-foreground dark:text-white">{activeSection}</h2>
          </div>

          <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
            <nav className="space-y-1">
              {currentSectionItems.slice(0, 15).map((item: NavItem, index: number) => (
                <Link
                  key={`nav-item-${index}-${item.href}`}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-card text-foreground dark:text-white font-medium shadow-sm"
                      : "text-muted-foreground dark:text-muted-foreground hover:bg-card hover:text-foreground dark:hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      )}

      {/* Main content */}
      <div className={cn("transition-all", activeSection ? "ml-0 lg:ml-72" : "ml-0 lg:ml-16")}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-card px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-muted-foreground hover:bg-accent lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="OrbitX Logo" width={32} height={32} />
              <span className="text-lg font-semibold text-foreground dark:text-white">OrbitX</span>
            </Link>
          </div>

          <button className="hidden items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground hover:bg-accent dark:text-muted-foreground sm:flex">
            <Search className="h-4 w-4" />
            <span>Search your page...</span>
            <kbd className="ml-4 hidden rounded bg-muted px-2 py-0.5 text-xs dark:bg-gray-600 lg:inline-flex">
              Ctrl+K
            </kbd>
          </button>

          <HeaderDropdowns variant="compact" />
        </header>

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

