"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const allData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  department: ["Engineering", "Marketing", "Sales", "HR", "Finance"][i % 5],
  status: ["Active", "Inactive", "Pending"][i % 3],
}));

export default function PaginationTablePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Pagination Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with pagination controls</p>
        </div>

        <div className="premium-card p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">ID</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Name</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Email</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Department</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.id}</td>
                    <td className="py-4 font-medium text-[var(--foreground)]">{row.name}</td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.email}</td>
                    <td className="py-4">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {row.department}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--muted-foreground)]">Rows per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--muted-foreground)]">
                {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allData.length)} of {allData.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4 text-[var(--foreground)]" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-[var(--primary)] text-white"
                          : "hover:bg-[var(--secondary)] text-[var(--foreground)]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4 text-[var(--foreground)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
