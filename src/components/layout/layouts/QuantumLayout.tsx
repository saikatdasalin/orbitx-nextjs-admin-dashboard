"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLayoutSettings } from "@/context/LayoutSettingsContext";
import {
  Search,
  Bell,
  MessageSquare,
  Settings,
  ChevronDown,
  User,
  LogOut,
  CreditCard,
  HelpCircle,
  ShoppingCart,
  Package,
  CheckCircle,
  Clock,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { navigationItems, NavItem } from "../navigation-data";

const notifications = [
  {
    id: 1,
    title: "New order received",
    message: "Order #12345 has been placed",
    time: "2 min ago",
    type: "order",
    read: false,
  },
  {
    id: 2,
    title: "Payment successful",
    message: "Payment of $299 received",
    time: "1 hour ago",
    type: "payment",
    read: false,
  },
  {
    id: 3,
    title: "New user registered",
    message: "John Doe joined the platform",
    time: "3 hours ago",
    type: "user",
    read: true,
  },
  {
    id: 4,
    title: "Product out of stock",
    message: "iPhone 15 Pro is now out of stock",
    time: "5 hours ago",
    type: "alert",
    read: true,
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    avatar: "SJ",
    message: "Hey, can you check the new design?",
    time: "5 min ago",
    online: true,
  },
  {
    id: 2,
    sender: "Mike Wilson",
    avatar: "MW",
    message: "The report is ready for review",
    time: "30 min ago",
    online: true,
  },
  {
    id: 3,
    sender: "Emily Davis",
    avatar: "ED",
    message: "Thanks for your help yesterday!",
    time: "2 hours ago",
    online: false,
  },
  {
    id: 4,
    sender: "Chris Brown",
    avatar: "CB",
    message: "Meeting rescheduled to 3 PM",
    time: "4 hours ago",
    online: false,
  },
];

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function NotificationDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-[calc(100vw-1rem)] max-w-80 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
        <h3 className="font-semibold text-[var(--foreground)]">
          Notifications
        </h3>
        <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-600 dark:text-red-400">
          {notifications.filter((n) => !n.read).length} new
        </span>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex items-start gap-3 p-4 hover:bg-[var(--secondary)] transition-colors cursor-pointer border-b border-[var(--border)] last:border-0",
              !notification.read && "bg-blue-50/50 dark:bg-blue-900/10"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                notification.type === "order" &&
                  "bg-blue-100 dark:bg-blue-900/30",
                notification.type === "payment" &&
                  "bg-green-100 dark:bg-green-900/30",
                notification.type === "user" &&
                  "bg-purple-100 dark:bg-purple-900/30",
                notification.type === "alert" &&
                  "bg-orange-100 dark:bg-orange-900/30"
              )}
            >
              {notification.type === "order" && (
                <ShoppingCart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              )}
              {notification.type === "payment" && (
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              )}
              {notification.type === "user" && (
                <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              )}
              {notification.type === "alert" && (
                <Package className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)] truncate">
                {notification.title}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] truncate">
                {notification.message}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {notification.time}
              </p>
            </div>
            {!notification.read && (
              <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] p-3">
        <button className="w-full rounded-xl bg-[var(--primary)] py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
          View All Notifications
        </button>
      </div>
    </div>
  );
}

function MessagesDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-[calc(100vw-1rem)] max-w-80 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
        <h3 className="font-semibold text-[var(--foreground)]">Messages</h3>
        <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
          {messages.length} messages
        </span>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start gap-3 p-4 hover:bg-[var(--secondary)] transition-colors cursor-pointer border-b border-[var(--border)] last:border-0"
          >
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                {msg.avatar}
              </div>
              {msg.online && (
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[var(--card)]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {msg.sender}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  {msg.time}
                </p>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] truncate mt-0.5">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] p-3">
        <button className="w-full rounded-xl bg-[var(--primary)] py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
          View All Messages
        </button>
      </div>
    </div>
  );
}

function ProfileDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-[calc(100vw-1rem)] max-w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
    >
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl gradient-primary shadow-lg shadow-blue-500/25" />
          <div>
            <p className="font-semibold text-[var(--foreground)]">Admin User</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
        >
          <User className="h-4 w-4 text-[var(--muted-foreground)]" />
          My Profile
        </Link>
        <Link
          href="/forms/profile-settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
        >
          <Settings className="h-4 w-4 text-[var(--muted-foreground)]" />
          Account Settings
        </Link>
        <Link
          href="/ecommerce/orders"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
        >
          <CreditCard className="h-4 w-4 text-[var(--muted-foreground)]" />
          Billing & Plans
        </Link>
        <Link
          href="/support"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
        >
          <HelpCircle className="h-4 w-4 text-[var(--muted-foreground)]" />
          Help & Support
        </Link>
      </div>
      <div className="border-t border-[var(--border)] p-2">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

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
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
        isActive
          ? "bg-[var(--primary)] text-white font-medium shadow-lg shadow-blue-500/25"
          : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
      )}
    >
      <item.icon className={cn("h-5 w-5", isActive && "text-white")} />
      <span className="flex-1">{item.name}</span>
      {item.badge && (
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-semibold",
            isActive
              ? "bg-card/20 text-white"
              : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
          )}
        >
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
        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--muted-foreground)] transition-all duration-200 hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
      >
        <item.icon className="h-5 w-5" />
        <span className="flex-1 text-left">{item.name}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && item.children && (
        <div
          className="ml-4 mt-1 space-y-1 border-l-2 border-[var(--border)] pl-4 animate-fade-in"
          suppressHydrationWarning
        >
          {item.children.map((child, index) => (
            <NavLink
              key={`${item.name}-${child.href}-${index}`}
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

export default function QuantumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { openSettings, settings, setTheme } = useLayoutSettings();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(settings.theme === "light" ? "dark" : "light");
  };

  const closeAllDropdowns = () => {
    setNotificationsOpen(false);
    setMessagesOpen(false);
    setProfileOpen(false);
  };

  const toggleNotifications = () => {
    closeAllDropdowns();
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleMessages = () => {
    closeAllDropdowns();
    setMessagesOpen(!messagesOpen);
  };

  const toggleProfile = () => {
    closeAllDropdowns();
    setProfileOpen(!profileOpen);
  };

  return (
    <div
      className="min-h-screen bg-[var(--background)]"
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

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-[280px] sidebar-premium transform transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div
          className="flex h-16 items-center gap-3 px-6"
          suppressHydrationWarning
        >
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="OrbitX Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[var(--foreground)]">
              OrbitX
            </span>
          </Link>
        </div>

        <div
          className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6"
          suppressHydrationWarning
        >
          <div className="space-y-8">
            {navigationItems.map((section) => (
              <div
                key={section.title}
                className="animate-fade-in"
                suppressHydrationWarning
              >
                <h3 className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                  {section.title}
                </h3>
                <nav className="space-y-1">
                  {section.items.map((item, index) =>
                    item.children ? (
                      <CollapsibleNavItem
                        key={`${section.title}-${item.name}-${index}`}
                        item={item}
                        onItemClick={() => setSidebarOpen(false)}
                      />
                    ) : (
                      <NavLink
                        key={`${section.title}-${item.href}-${index}`}
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
      <div className="ml-0 lg:ml-[280px]" suppressHydrationWarning>
        {/* Header */}
        <header
          className="sticky top-0 z-30 flex h-16 items-center justify-between header-premium px-3 sm:px-4 lg:px-6"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button className="rounded-xl p-2 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200 sm:hidden">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:border-[var(--ring)] transition-all duration-200 group sm:flex lg:px-4 lg:py-2.5">
              <Search className="h-4 w-4 group-hover:text-[var(--primary)] transition-colors" />
              <span>Search anything...</span>
              <kbd className="ml-4 hidden rounded-lg bg-[var(--muted)] px-2 py-1 text-xs font-medium lg:inline-flex">
                Ctrl+K
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1" suppressHydrationWarning>
            <div className="relative" suppressHydrationWarning>
              <button
                onClick={toggleNotifications}
                className={cn(
                  "relative rounded-xl p-2.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200",
                  notificationsOpen &&
                    "bg-[var(--secondary)] text-[var(--foreground)]"
                )}
              >
                <Bell className="h-5 w-5" suppressHydrationWarning />
                <span
                  className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[var(--background)]"
                  suppressHydrationWarning
                />
              </button>
              <NotificationDropdown
                isOpen={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
              />
            </div>
            <div className="relative" suppressHydrationWarning>
              <button
                onClick={toggleMessages}
                className={cn(
                  "relative rounded-xl p-2.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200",
                  messagesOpen &&
                    "bg-[var(--secondary)] text-[var(--foreground)]"
                )}
              >
                <MessageSquare className="h-5 w-5" suppressHydrationWarning />
                <span
                  className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-[var(--background)]"
                  suppressHydrationWarning
                />
              </button>
              <MessagesDropdown
                isOpen={messagesOpen}
                onClose={() => setMessagesOpen(false)}
              />
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-xl p-2.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200"
              title={
                settings.theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {settings.theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={openSettings}
              className="rounded-xl p-2.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200"
            >
              <Settings className="h-5 w-5" suppressHydrationWarning />
            </button>
            <div
              className="ml-1 hidden h-8 w-px bg-[var(--border)] sm:block"
              suppressHydrationWarning
            />
            <div className="relative" suppressHydrationWarning>
              <button
                onClick={toggleProfile}
                className={cn(
                  "ml-1 flex items-center gap-3 rounded-xl p-1.5 hover:bg-[var(--secondary)] transition-all duration-200 sm:ml-3",
                  profileOpen && "bg-[var(--secondary)]"
                )}
                suppressHydrationWarning
              >
                <div
                  className="h-9 w-9 rounded-xl gradient-primary shadow-lg shadow-blue-500/25"
                  suppressHydrationWarning
                />
                <div
                  className="hidden lg:block text-left"
                  suppressHydrationWarning
                >
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    Admin User
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    admin@example.com
                  </p>
                </div>
              </button>
              <ProfileDropdown
                isOpen={profileOpen}
                onClose={() => setProfileOpen(false)}
              />
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

