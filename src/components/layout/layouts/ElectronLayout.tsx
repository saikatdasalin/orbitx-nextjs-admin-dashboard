"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { topNavItems, NavItem } from "../navigation-data";
import HeaderDropdowns from "../HeaderDropdowns";

function DropdownMenu({ name, items, isOpen, onToggle }: { 
  name: string; 
  items: NavItem[]; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg",
          isOpen
            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
            : "text-foreground hover:text-foreground dark:hover:text-white hover:bg-accent"
        )}
      >
        {name}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {items.slice(0, 10).map((item, index) => (
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
        </div>
      )}
    </div>
  );
}

export default function ElectronLayout({ children }: { children: React.ReactNode }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900" suppressHydrationWarning>
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="OrbitX Logo" width={32} height={32} />
            <span className="text-lg font-semibold text-foreground dark:text-white">OrbitX</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {topNavItems.map((section) => (
              <DropdownMenu
                key={section.name}
                name={section.name}
                items={section.items}
                isOpen={openDropdown === section.name}
                onToggle={() => setOpenDropdown(openDropdown === section.name ? null : section.name)}
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-muted-foreground hover:bg-accent">
              <Search className="h-5 w-5" />
            </button>
            <HeaderDropdowns variant="compact" />
          </div>
        </div>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
