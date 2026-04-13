"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

const tableData = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Admin", status: "Active", joined: "Jan 15, 2024" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Editor", status: "Active", joined: "Feb 20, 2024" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Viewer", status: "Inactive", joined: "Mar 10, 2024" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active", joined: "Apr 5, 2024" },
  { id: 5, name: "Chris Brown", email: "chris@example.com", role: "Admin", status: "Active", joined: "May 12, 2024" },
  { id: 6, name: "Lisa Anderson", email: "lisa@example.com", role: "Viewer", status: "Pending", joined: "Jun 8, 2024" },
  { id: 7, name: "James Taylor", email: "james@example.com", role: "Editor", status: "Active", joined: "Jul 22, 2024" },
  { id: 8, name: "Amanda White", email: "amanda@example.com", role: "Viewer", status: "Inactive", joined: "Aug 30, 2024" },
];

export default function BasicTablePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Basic Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">A simple table with basic styling and functionality</p>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    <input type="checkbox" className="rounded border-[var(--border)]" />
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Name</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Email</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Role</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Joined</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)] transition-colors">
                    <td className="py-4">
                      <input type="checkbox" className="rounded border-[var(--border)]" />
                    </td>
                    <td className="py-4 font-medium text-[var(--foreground)]">{row.name}</td>
                    <td className="py-4 text-[var(--muted-foreground)]">{row.email}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.role === "Admin" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                        row.role === "Editor" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                        "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                      }`}>
                        {row.role}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.status === "Active" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        row.status === "Inactive" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-[var(--muted-foreground)]">{row.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[var(--muted-foreground)]">Showing 1-8 of 8 entries</p>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-sm text-white">1</button>
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
