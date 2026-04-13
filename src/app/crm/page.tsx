"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Users,
  UserPlus,
  Target,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  MoreHorizontal,
  ArrowUpRight,
  Building2,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ClientOnly from "@/components/ui/ClientOnly";

const stats = [
  {
    title: "Total Contacts",
    value: "12,847",
    change: "+12.5%",
    trending: true,
    icon: Users,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "New Leads",
    value: "1,234",
    change: "+8.3%",
    trending: true,
    icon: UserPlus,
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Deals Won",
    value: "$847K",
    change: "+15.2%",
    trending: true,
    icon: Target,
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: "-2.1%",
    trending: false,
    icon: TrendingUp,
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
];

const leadData = [
  { month: "Jan", leads: 120, converted: 45 },
  { month: "Feb", leads: 150, converted: 62 },
  { month: "Mar", leads: 180, converted: 78 },
  { month: "Apr", leads: 220, converted: 95 },
  { month: "May", leads: 280, converted: 125 },
  { month: "Jun", leads: 320, converted: 148 },
];

const pipelineData = [
  { name: "Qualified", value: 35, color: "#3b82f6" },
  { name: "Proposal", value: 25, color: "#8b5cf6" },
  { name: "Negotiation", value: 20, color: "#f59e0b" },
  { name: "Closed Won", value: 15, color: "#22c55e" },
  { name: "Closed Lost", value: 5, color: "#ef4444" },
];

const recentContacts = [
  {
    name: "Sarah Johnson",
    company: "Tech Corp",
    email: "sarah@techcorp.com",
    status: "Hot Lead",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    company: "Global Inc",
    email: "michael@global.com",
    status: "Qualified",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    company: "StartUp XYZ",
    email: "emily@startup.xyz",
    status: "New",
    avatar: "ED",
  },
  {
    name: "James Wilson",
    company: "Enterprise Co",
    email: "james@enterprise.co",
    status: "Proposal",
    avatar: "JW",
  },
  {
    name: "Lisa Anderson",
    company: "Digital Ltd",
    email: "lisa@digital.ltd",
    status: "Negotiation",
    avatar: "LA",
  },
];

const upcomingTasks = [
  {
    title: "Follow up with Sarah Johnson",
    type: "call",
    time: "10:00 AM",
    priority: "high",
  },
  {
    title: "Send proposal to Tech Corp",
    type: "email",
    time: "11:30 AM",
    priority: "medium",
  },
  {
    title: "Meeting with Global Inc team",
    type: "meeting",
    time: "2:00 PM",
    priority: "high",
  },
  {
    title: "Review contract terms",
    type: "task",
    time: "4:00 PM",
    priority: "low",
  },
];

const deals = [
  {
    company: "Tech Corp",
    value: "$125,000",
    stage: "Negotiation",
    probability: 75,
    owner: "John D.",
  },
  {
    company: "Global Inc",
    value: "$89,000",
    stage: "Proposal",
    probability: 50,
    owner: "Sarah M.",
  },
  {
    company: "StartUp XYZ",
    value: "$67,000",
    stage: "Qualified",
    probability: 25,
    owner: "Mike W.",
  },
  {
    company: "Enterprise Co",
    value: "$234,000",
    stage: "Closed Won",
    probability: 100,
    owner: "Emily R.",
  },
];

function StatCard({
  title,
  value,
  change,
  trending,
  icon: Icon,
  iconBg,
}: {
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
        <div
          className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
            trending
              ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
              : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
          }`}
        >
          <TrendingUp className={`h-4 w-4 ${!trending && "rotate-180"}`} />
          {change}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
          {value}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function CRMDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              CRM Dashboard
            </h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Manage your customer relationships and sales pipeline
            </p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Contact
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
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Lead Generation
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  Monthly leads vs conversions
                </p>
              </div>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 300 }} />}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={leadData}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorConverted"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="leads"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorLeads)"
                    name="Leads"
                  />
                  <Area
                    type="monotone"
                    dataKey="converted"
                    stroke="#22c55e"
                    fillOpacity={1}
                    fill="url(#colorConverted)"
                    name="Converted"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Sales Pipeline
              </h3>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 200 }} />}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pipelineData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pipelineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ClientOnly>
            <div className="mt-4 space-y-2">
              {pipelineData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[var(--muted-foreground)]">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-medium text-[var(--foreground)]">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Recent Contacts
              </h3>
              <a
                href="/contacts"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity"
              >
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div
                  key={contact.email}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                      {contact.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]">
                        {contact.name}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {contact.company}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      contact.status === "Hot Lead"
                        ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        : contact.status === "Qualified"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : contact.status === "New"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : contact.status === "Proposal"
                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Today&apos;s Tasks
              </h3>
              <a
                href="/tasks"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity"
              >
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        task.type === "call"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : task.type === "email"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : task.type === "meeting"
                          ? "bg-purple-100 dark:bg-purple-900/30"
                          : "bg-orange-100 dark:bg-orange-900/30"
                      }`}
                    >
                      {task.type === "call" && (
                        <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                      )}
                      {task.type === "email" && (
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      )}
                      {task.type === "meeting" && (
                        <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      )}
                      {task.type === "task" && (
                        <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]">
                        {task.title}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {task.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Active Deals
            </h3>
            <a
              href="/deals"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    Company
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    Deal Value
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    Stage
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    Probability
                  </th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">
                    Owner
                  </th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--border)] last:border-0"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)]">
                          <Building2 className="h-5 w-5 text-[var(--muted-foreground)]" />
                        </div>
                        <span className="font-medium text-[var(--foreground)]">
                          {deal.company}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 font-semibold text-[var(--foreground)]">
                      {deal.value}
                    </td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          deal.stage === "Closed Won"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : deal.stage === "Negotiation"
                            ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                            : deal.stage === "Proposal"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        {deal.stage}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 rounded-full bg-[var(--secondary)]">
                          <div
                            className={`h-2 rounded-full ${
                              deal.probability === 100
                                ? "bg-green-500"
                                : deal.probability >= 50
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }`}
                            style={{ width: `${deal.probability}%` }}
                          />
                        </div>
                        <span className="text-sm text-[var(--muted-foreground)]">
                          {deal.probability}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-[var(--muted-foreground)]">
                      {deal.owner}
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
