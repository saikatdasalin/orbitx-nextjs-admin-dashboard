"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLayoutSettings } from "@/context/LayoutSettingsContext";
import {
  Bell,
  MessageSquare,
  Settings,
  User,
  LogOut,
  CreditCard,
  HelpCircle,
  ShoppingCart,
  Package,
  CheckCircle,
  Clock,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
      className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
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
              <div className="h-2 w-2 rounded-full bg-[var(--primary)] mt-2" />
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
      className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
        <h3 className="font-semibold text-[var(--foreground)]">Messages</h3>
        <span className="rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--primary)]">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-purple-600 text-sm font-semibold text-white">
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
      className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl animate-fade-in z-50"
    >
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl gradient-primary shadow-lg shadow-[var(--primary)]/25" />
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

interface HeaderDropdownsProps {
  variant?: "default" | "compact";
  showSettings?: boolean;
}

export default function HeaderDropdowns({
  variant = "default",
  showSettings = true,
}: HeaderDropdownsProps) {
  const { openSettings, settings, setTheme } = useLayoutSettings();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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

  const buttonClass =
    variant === "compact"
      ? "rounded-lg p-2 text-muted-foreground hover:bg-accent"
      : "rounded-xl p-2.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-200";

  const activeButtonClass =
    variant === "compact"
      ? "bg-secondary"
      : "bg-[var(--secondary)] text-[var(--foreground)]";

  return (
    <div className="flex items-center gap-1" suppressHydrationWarning>
      <div className="relative" suppressHydrationWarning>
        <button
          onClick={toggleNotifications}
          className={cn(
            buttonClass,
            "relative",
            notificationsOpen && activeButtonClass
          )}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[var(--background)]" />
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
            buttonClass,
            "relative",
            messagesOpen && activeButtonClass
          )}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--primary)] ring-2 ring-[var(--background)]" />
        </button>
        <MessagesDropdown
          isOpen={messagesOpen}
          onClose={() => setMessagesOpen(false)}
        />
      </div>
      <button
        onClick={toggleTheme}
        className={buttonClass}
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
      {showSettings && (
        <button onClick={openSettings} className={buttonClass}>
          <Settings className="h-5 w-5" />
        </button>
      )}
      <div
        className="ml-2 h-8 w-px bg-[var(--border)]"
        suppressHydrationWarning
      />
      <div className="relative" suppressHydrationWarning>
        <button
          onClick={toggleProfile}
          className={cn(
            "ml-2 flex items-center gap-2 rounded-xl p-1.5 hover:bg-[var(--secondary)] transition-all duration-200",
            profileOpen && "bg-[var(--secondary)]"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-purple-500" />
        </button>
        <ProfileDropdown
          isOpen={profileOpen}
          onClose={() => setProfileOpen(false)}
        />
      </div>
    </div>
  );
}
