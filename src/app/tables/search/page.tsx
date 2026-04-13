"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, X } from "lucide-react";
import { useState } from "react";

const allData = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Developer", location: "New York" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Designer", location: "Los Angeles" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Manager", location: "Chicago" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", role: "Developer", location: "San Francisco" },
  { id: 5, name: "David Lee", email: "david@example.com", role: "Designer", location: "Seattle" },
  { id: 6, name: "Lisa Chen", email: "lisa@example.com", role: "Developer", location: "Boston" },
  { id: 7, name: "James Taylor", email: "james@example.com", role: "Manager", location: "Miami" },
  { id: 8, name: "Anna Martinez", email: "anna@example.com", role: "Designer", location: "Denver" },
];

export default function SearchTablePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = allData.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Search Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with real-time search filtering</p>
        </div>

        <div className="premium-card p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search by name, email, role, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-[var(--secondary)] transition-colors"
              >
                <X className="h-4 w-4 text-[var(--muted-foreground)]" />
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="mb-4 text-sm text-[var(--muted-foreground)]">
              Found {filteredData.length} result(s) for &quot;{searchQuery}&quot;
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Name</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Email</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Role</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-[var(--muted-foreground)]">
                      No results found
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row) => (
                    <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                      <td className="py-4 font-medium text-[var(--foreground)]">{row.name}</td>
                      <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.email}</td>
                      <td className="py-4">
                        <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                          {row.role}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.location}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
