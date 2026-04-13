"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

function ColumnPinningTableContent() {
  const [data, setData] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Employee ${i + 1}`,
      email: `employee${i + 1}@example.com`,
      department: ["Engineering", "Marketing", "Sales", "HR", "Finance"][i % 5],
      location: ["New York", "Los Angeles", "Chicago", "Miami", "Seattle"][i % 5],
      salary: "$0",
      startDate: `${["Jan", "Feb", "Mar", "Apr", "May"][i % 5]} ${2020 + (i % 5)}, 2024`,
      status: ["Active", "On Leave", "Active"][i % 3],
    }))
  );

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: generate random data after hydration to avoid SSR mismatch */
  useEffect(() => {
    // Generate random data after hydration
    setData(
      Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Employee ${i + 1}`,
        email: `employee${i + 1}@example.com`,
        department: ["Engineering", "Marketing", "Sales", "HR", "Finance"][i % 5],
        location: ["New York", "Los Angeles", "Chicago", "Miami", "Seattle"][i % 5],
        salary: `$${(Math.random() * 50000 + 50000).toFixed(0)}`,
        startDate: `${["Jan", "Feb", "Mar", "Apr", "May"][i % 5]} ${2020 + (i % 5)}, 2024`,
        status: ["Active", "On Leave", "Active"][i % 3],
      }))
    );
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Column Pinning Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with pinned columns on scroll</p>
        </div>

        <div className="premium-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="sticky left-0 bg-[var(--secondary)] px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] z-10">ID</th>
                  <th className="sticky left-[80px] bg-[var(--secondary)] px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Department</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Salary</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Start Date</th>
                  <th className="sticky right-0 bg-[var(--secondary)] px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="sticky left-0 bg-[var(--background)] px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.id}</td>
                    <td className="sticky left-[80px] bg-[var(--background)] px-6 py-4 font-medium text-[var(--foreground)] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.email}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {row.department}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.location}</td>
                    <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">{row.salary}</td>
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.startDate}</td>
                    <td className="sticky right-0 bg-[var(--background)] px-6 py-4 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.status === "Active" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
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
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function ColumnPinningTablePage() {
  return (
    <ColumnPinningTableContent />
  );
}
