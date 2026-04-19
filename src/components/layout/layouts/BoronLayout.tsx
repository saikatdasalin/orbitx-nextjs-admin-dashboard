"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { navigationItems, NavItem } from "../navigation-data";
import HeaderDropdowns from "../HeaderDropdowns";

function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
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
          <kbd className="rounded bg-secondary px-1.5 py-0.5">Ctrl</kbd>
          <kbd className="rounded bg-secondary px-1.5 py-0.5">{item.shortcut}</kbd>
        </span>
      )}
      {item.badge && (
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

function CollapsibleNavItem({
  item,
  onItemClick,
}: {
  item: NavItem;
  onItemClick?: () => void;
}) {
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
              onClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BoronLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

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

      {/* Sidebar with keyboard shortcuts */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-72 bg-card transform transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
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
                      <CollapsibleNavItem
                        key={item.name}
                        item={item}
                        onItemClick={() => setSidebarOpen(false)}
                      />
                    ) : (
                      <NavLink
                        key={item.href}
                        item={item}
                        isActive={pathname === item.href}
                        onClick={() => setSidebarOpen(false)}
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
      <div className="ml-0 lg:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-card px-3 sm:px-4 lg:px-6">
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

