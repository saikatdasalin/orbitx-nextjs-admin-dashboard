"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnly from "@/components/ui/ClientOnly";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const areaData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 4500 },
  { month: "May", value: 6000 },
  { month: "Jun", value: 5500 },
];

const barData = [
  { name: "Mon", sales: 4000, orders: 2400 },
  { name: "Tue", sales: 3000, orders: 1398 },
  { name: "Wed", sales: 2000, orders: 9800 },
  { name: "Thu", sales: 2780, orders: 3908 },
  { name: "Fri", sales: 1890, orders: 4800 },
  { name: "Sat", sales: 2390, orders: 3800 },
  { name: "Sun", sales: 3490, orders: 4300 },
];

const pieData = [
  { name: "Desktop", value: 400, color: "#3b82f6" },
  { name: "Mobile", value: 300, color: "#8b5cf6" },
  { name: "Tablet", value: 200, color: "#10b981" },
  { name: "Other", value: 100, color: "#f59e0b" },
];

const lineData = [
  { name: "Week 1", users: 400, sessions: 240 },
  { name: "Week 2", users: 300, sessions: 139 },
  { name: "Week 3", users: 500, sessions: 980 },
  { name: "Week 4", users: 278, sessions: 390 },
];

export default function ChartWidgetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Chart Widgets</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Various chart component examples</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Area Chart</h3>
            <ClientOnly fallback={<div style={{ width: "100%", height: 250 }} />}>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Bar Chart</h3>
            <ClientOnly fallback={<div style={{ width: "100%", height: 250 }} />}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Legend />
                  <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="orders" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Line Chart</h3>
            <ClientOnly fallback={<div style={{ width: "100%", height: 250 }} />}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6" }} />
                  <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
                </LineChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Pie Chart</h3>
            <ClientOnly fallback={<div style={{ width: "100%", height: 250 }} />}>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
