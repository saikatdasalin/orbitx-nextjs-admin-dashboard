"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Inbox, 
  Search, 
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  Reply,
  Trash2,
  Archive
} from "lucide-react";
import { useState } from "react";

const tickets = [
  { id: "TKT-001", subject: "Unable to login to my account", from: "john@example.com", priority: "High", status: "Open", time: "10 min ago", unread: true },
  { id: "TKT-002", subject: "Payment failed for subscription", from: "sarah@example.com", priority: "High", status: "Open", time: "30 min ago", unread: true },
  { id: "TKT-003", subject: "Feature request: Dark mode", from: "mike@example.com", priority: "Low", status: "Pending", time: "2 hours ago", unread: false },
  { id: "TKT-004", subject: "How to export data?", from: "emily@example.com", priority: "Medium", status: "Open", time: "3 hours ago", unread: true },
  { id: "TKT-005", subject: "Bug in dashboard charts", from: "chris@example.com", priority: "Medium", status: "In Progress", time: "5 hours ago", unread: false },
  { id: "TKT-006", subject: "Billing inquiry", from: "lisa@example.com", priority: "Low", status: "Resolved", time: "1 day ago", unread: false },
  { id: "TKT-007", subject: "API integration help", from: "james@example.com", priority: "Medium", status: "Pending", time: "1 day ago", unread: false },
];

const stats = [
  { label: "Open", count: 12, icon: Inbox, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { label: "Pending", count: 5, icon: Clock, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30" },
  { label: "Resolved", count: 48, icon: CheckCircle, color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  { label: "Urgent", count: 3, icon: AlertCircle, color: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
];

export default function SupportInboxPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTicket, setSelectedTicket] = useState<string | null>("TKT-001");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Support Inbox</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Manage customer support tickets</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card p-4">
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-[var(--foreground)]">{stat.count}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 premium-card p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  onClick={() => setSelectedTicket(ticket.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors ${
                    selectedTicket === ticket.id ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className={`font-medium text-sm ${selectedTicket === ticket.id ? "text-white" : "text-[var(--foreground)]"}`}>
                      {ticket.subject}
                    </p>
                    {ticket.unread && selectedTicket !== ticket.id && (
                      <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    )}
                  </div>
                  <p className={`text-xs ${selectedTicket === ticket.id ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>
                    {ticket.from}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${selectedTicket === ticket.id ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>
                      {ticket.time}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      selectedTicket === ticket.id ? "bg-card/20 text-white" :
                      ticket.priority === "High" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                      ticket.priority === "Medium" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                      "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                    }`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 premium-card p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Unable to login to my account</h3>
                <p className="text-sm text-[var(--muted-foreground)]">From: john@example.com - TKT-001</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                  <Star className="h-5 w-5 text-[var(--muted-foreground)]" />
                </button>
                <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                  <Archive className="h-5 w-5 text-[var(--muted-foreground)]" />
                </button>
                <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[var(--secondary)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-semibold text-white">
                    JD
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">John Doe</p>
                    <p className="text-xs text-[var(--muted-foreground)]">10 minutes ago</p>
                  </div>
                </div>
                <p className="text-[var(--foreground)]">
                  Hi, I&apos;ve been trying to login to my account but keep getting an error message saying &quot;Invalid credentials&quot;. 
                  I&apos;m sure my password is correct. Can you please help me resolve this issue?
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--border)] pt-4">
              <textarea
                placeholder="Type your reply..."
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                rows={4}
              />
              <div className="flex items-center justify-end gap-3 mt-4">
                <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                  Save Draft
                </button>
                <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Reply className="h-4 w-4" />
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
