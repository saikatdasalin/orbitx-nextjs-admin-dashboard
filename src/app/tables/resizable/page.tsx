"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { GripVertical } from "lucide-react";

const data = [
  { id: 1, name: "John Smith", email: "john@example.com", department: "Engineering", salary: "$95,000" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", department: "Marketing", salary: "$78,000" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", department: "Sales", salary: "$82,000" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", department: "HR", salary: "$68,000" },
  { id: 5, name: "David Lee", email: "david@example.com", department: "Engineering", salary: "$105,000" },
];

export default function ResizableTablePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Resizable Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with resizable columns (demo)</p>
        </div>

        <div className="premium-card p-6">
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Drag the column borders to resize columns. This is a visual demonstration.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-[80px] relative">
                    ID
                    <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[var(--primary)] flex items-center justify-center">
                      <GripVertical className="h-4 w-4 text-[var(--muted-foreground)] opacity-0 hover:opacity-100" />
                    </div>
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-[200px] relative">
                    Name
                    <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[var(--primary)]" />
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-[250px] relative">
                    Email
                    <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[var(--primary)]" />
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-[150px] relative">
                    Department
                    <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-[var(--primary)]" />
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-[120px]">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.id}</td>
                    <td className="py-4 font-medium text-[var(--foreground)]">{row.name}</td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.email}</td>
                    <td className="py-4">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {row.department}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-medium text-[var(--foreground)]">{row.salary}</td>
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
