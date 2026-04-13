"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Search, 
  Filter,
  Download,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { useState } from "react";

const initialData = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Admin", status: "Active", joined: "Jan 15, 2024" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Editor", status: "Active", joined: "Feb 20, 2024" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Viewer", status: "Inactive", joined: "Mar 10, 2024" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", role: "Editor", status: "Active", joined: "Apr 5, 2024" },
  { id: 5, name: "David Lee", email: "david@example.com", role: "Admin", status: "Active", joined: "May 12, 2024" },
  { id: 6, name: "Lisa Chen", email: "lisa@example.com", role: "Viewer", status: "Pending", joined: "Jun 8, 2024" },
];

export default function EnhancedTablePage() {
  const [data, setData] = useState(initialData);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(d => d.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(r => r !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Enhanced Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with sorting, selection, and actions</p>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div className="flex gap-2">
              <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          {selectedRows.length > 0 && (
            <div className="mb-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-between">
              <span className="text-sm text-blue-600 dark:text-blue-400">{selectedRows.length} row(s) selected</span>
              <button className="text-sm text-red-600 dark:text-red-400 hover:underline">Delete Selected</button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === data.length}
                      onChange={toggleSelectAll}
                      className="rounded border-[var(--border)]"
                    />
                  </th>
                  {["Name", "Email", "Role", "Status", "Joined"].map((header) => (
                    <th
                      key={header}
                      className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] cursor-pointer hover:text-[var(--foreground)]"
                      onClick={() => handleSort(header.toLowerCase())}
                    >
                      <div className="flex items-center gap-1">
                        {header}
                        {sortField === header.toLowerCase() && (
                          sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </th>
                  ))}
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className={`border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors ${selectedRows.includes(row.id) ? "bg-blue-50 dark:bg-blue-900/10" : ""}`}>
                    <td className="py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleSelectRow(row.id)}
                        className="rounded border-[var(--border)]"
                      />
                    </td>
                    <td className="py-4 font-medium text-[var(--foreground)]">{row.name}</td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.email}</td>
                    <td className="py-4">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {row.role}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.status === "Active" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        row.status === "Inactive" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.joined}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Edit className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
