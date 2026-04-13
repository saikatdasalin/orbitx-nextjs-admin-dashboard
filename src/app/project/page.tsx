"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  FolderKanban, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  TrendingUp,
  MoreHorizontal,
  ArrowUpRight,
  Users,
  Calendar,
  Plus
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import ClientOnly from "@/components/ui/ClientOnly";

const stats = [
  { title: "Total Projects", value: "24", change: "+3", trending: true, icon: FolderKanban, iconBg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { title: "Completed", value: "18", change: "+5", trending: true, icon: CheckCircle2, iconBg: "bg-gradient-to-br from-green-500 to-green-600" },
  { title: "In Progress", value: "4", change: "0", trending: true, icon: Clock, iconBg: "bg-gradient-to-br from-orange-500 to-orange-600" },
  { title: "Overdue", value: "2", change: "-1", trending: true, icon: AlertCircle, iconBg: "bg-gradient-to-br from-red-500 to-red-600" },
];

const projectProgress = [
  { name: "Website Redesign", progress: 85 },
  { name: "Mobile App", progress: 65 },
  { name: "API Integration", progress: 45 },
  { name: "Dashboard UI", progress: 92 },
  { name: "Backend Refactor", progress: 30 },
];

const statusData = [
  { name: "Completed", value: 18, color: "#22c55e" },
  { name: "In Progress", value: 4, color: "#3b82f6" },
  { name: "On Hold", value: 1, color: "#f59e0b" },
  { name: "Overdue", value: 2, color: "#ef4444" },
];

const projects = [
  { name: "Website Redesign", status: "In Progress", priority: "High", team: 5, deadline: "Dec 15, 2024", progress: 85 },
  { name: "Mobile App Development", status: "In Progress", priority: "High", team: 8, deadline: "Jan 20, 2025", progress: 65 },
  { name: "API Integration", status: "In Progress", priority: "Medium", team: 3, deadline: "Dec 30, 2024", progress: 45 },
  { name: "Dashboard UI Update", status: "Completed", priority: "Low", team: 2, deadline: "Dec 1, 2024", progress: 100 },
  { name: "Backend Refactoring", status: "On Hold", priority: "Medium", team: 4, deadline: "Feb 1, 2025", progress: 30 },
];

const recentActivity = [
  { user: "John D.", action: "completed task", target: "Homepage Design", time: "2 hours ago", avatar: "JD" },
  { user: "Sarah M.", action: "commented on", target: "API Documentation", time: "4 hours ago", avatar: "SM" },
  { user: "Mike W.", action: "created", target: "New Feature Request", time: "5 hours ago", avatar: "MW" },
  { user: "Emily R.", action: "updated", target: "Project Timeline", time: "6 hours ago", avatar: "ER" },
];

function StatCard({ title, value, change, trending, icon: Icon, iconBg }: {
  title: string;
  value: string;
  change: string;
  trending: boolean;
  icon: React.ElementType;
  iconBg: string;
}) {
  return (
    <div className="premium-card stat-card p-6">
      <div className="flex items-center justify-between">
        <div className={`rounded-2xl p-3.5 ${iconBg} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
          trending 
            ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
            : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
        }`}>
          <TrendingUp className={`h-4 w-4 ${!trending && "rotate-180"}`} />
          {change}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">{value}</h3>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 font-medium">{title}</p>
      </div>
    </div>
  );
}

export default function ProjectDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Project Dashboard</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Track and manage all your projects in one place</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Project Progress</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Current progress of active projects</p>
              </div>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 300 }} />}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectProgress} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" domain={[0, 100]} stroke="#9ca3af" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={120} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Bar dataKey="progress" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Project Status</h3>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 200 }} />}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={statusData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                </PieChart>
              </ResponsiveContainer>
            </ClientOnly>
            <div className="mt-4 space-y-2">
              {statusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[var(--muted-foreground)]">{item.name}</span>
                  </div>
                  <span className="font-medium text-[var(--foreground)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">All Projects</h3>
              <a href="/projects" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Project</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Team</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Deadline</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index} className="border-b border-[var(--border)] last:border-0">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)]">
                            <FolderKanban className="h-5 w-5 text-[var(--muted-foreground)]" />
                          </div>
                          <div>
                            <span className="font-medium text-[var(--foreground)]">{project.name}</span>
                            <p className="text-xs text-[var(--muted-foreground)]">{project.priority} Priority</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          project.status === "Completed" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                          project.status === "In Progress" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                          project.status === "On Hold" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                          "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-[var(--muted-foreground)]">{project.team}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-[var(--muted-foreground)]">{project.deadline}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 rounded-full bg-[var(--secondary)]">
                            <div 
                              className={`h-2 rounded-full ${
                                project.progress === 100 ? "bg-green-500" :
                                project.progress >= 50 ? "bg-blue-500" :
                                "bg-orange-500"
                              }`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-[var(--muted-foreground)]">{project.progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Recent Activity</h3>
              <a href="/activity" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                    {activity.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--foreground)]">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-[var(--muted-foreground)]">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
