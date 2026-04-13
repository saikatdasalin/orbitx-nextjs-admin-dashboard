"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { GripVertical } from "lucide-react";
import { useState } from "react";

const initialData = [
  { id: 1, task: "Design homepage mockup", priority: "High", status: "In Progress", assignee: "John" },
  { id: 2, task: "Implement user authentication", priority: "High", status: "Todo", assignee: "Sarah" },
  { id: 3, task: "Write API documentation", priority: "Medium", status: "In Progress", assignee: "Mike" },
  { id: 4, task: "Fix navigation bug", priority: "Low", status: "Done", assignee: "Emily" },
  { id: 5, task: "Optimize database queries", priority: "Medium", status: "Todo", assignee: "David" },
];

export default function DragDropTablePage() {
  const [data, setData] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent, id: number) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === id) return;

    const draggedIndex = data.findIndex(item => item.id === draggedItem);
    const targetIndex = data.findIndex(item => item.id === id);

    const newData = [...data];
    const [removed] = newData.splice(draggedIndex, 1);
    newData.splice(targetIndex, 0, removed);
    setData(newData);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Drag & Drop Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Reorder rows by dragging</p>
        </div>

        <div className="premium-card p-6">
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Drag rows using the handle to reorder them.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-10"></th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Task</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Priority</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Assignee</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.id}
                    draggable
                    onDragStart={() => handleDragStart(row.id)}
                    onDragOver={(e) => handleDragOver(e, row.id)}
                    onDragEnd={handleDragEnd}
                    className={`border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors cursor-move ${
                      draggedItem === row.id ? "opacity-50 bg-[var(--secondary)]" : ""
                    }`}
                  >
                    <td className="py-4">
                      <GripVertical className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </td>
                    <td className="py-4 font-medium text-[var(--foreground)]">{row.task}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.priority === "High" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                        row.priority === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400" :
                        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                      }`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        row.status === "Done" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        row.status === "In Progress" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                        "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.assignee}</td>
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
