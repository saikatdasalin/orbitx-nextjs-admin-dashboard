"use client";

import { Search, Bell, MessageSquare, Settings } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-card px-6">
      <div className="flex flex-1 items-center">
        <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors">
          <Search className="h-4 w-4" />
          <span>Search your page...</span>
          <kbd className="ml-8 hidden rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
            ⌘K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-accent transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-accent transition-colors">
          <MessageSquare className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-500"></span>
        </button>
        <button className="rounded-lg p-2 text-muted-foreground hover:bg-accent transition-colors">
          <Settings className="h-5 w-5" />
        </button>
        <button className="ml-2 flex items-center gap-2 rounded-lg p-1 hover:bg-accent transition-colors">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
