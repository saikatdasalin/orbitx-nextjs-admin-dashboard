"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import ProgressCircle from "@/components/charts/ProgressCircle";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  supportStats,
  ticketActivityData,
  satisfactionData,
} from "@/data/dashboard-data";
import {
  Ticket,
  AlertCircle,
  CheckCircle,
  Clock,
  MoreVertical,
  User,
} from "lucide-react";

const tickets = [
  { id: "TKT-001", issue: "Login issue", client: "John Doe", assignedTo: "Sarah Wilson", created: "Dec 5, 2024", due: "Dec 7, 2024", priority: "High", status: "Open" },
  { id: "TKT-002", issue: "Payment failed", client: "Jane Smith", assignedTo: "Mike Johnson", created: "Dec 4, 2024", due: "Dec 6, 2024", priority: "Critical", status: "In Progress" },
  { id: "TKT-003", issue: "Feature request", client: "Bob Wilson", assignedTo: "Emily Brown", created: "Dec 4, 2024", due: "Dec 10, 2024", priority: "Low", status: "Open" },
  { id: "TKT-004", issue: "Bug report", client: "Alice Brown", assignedTo: "Sarah Wilson", created: "Dec 3, 2024", due: "Dec 5, 2024", priority: "Medium", status: "Resolved" },
  { id: "TKT-005", issue: "Account access", client: "Charlie Davis", assignedTo: "Mike Johnson", created: "Dec 3, 2024", due: "Dec 4, 2024", priority: "High", status: "In Progress" },
];

const priorityColors: Record<string, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusColors: Record<string, string> = {
  Open: "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Resolved: "bg-green-100 text-green-700",
  Closed: "bg-secondary text-foreground",
};

export default function SupportDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Tickets"
            value={<ClientOnlyText value={supportStats.totalTickets.value} format="number" />}
            change={supportStats.totalTickets.change}
            icon={<Ticket className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Unassigned"
            value={<ClientOnlyText value={supportStats.unassignedTickets.value} format="number" />}
            change={supportStats.unassignedTickets.change}
            icon={<AlertCircle className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
          <StatCard
            title="Open"
            value={<ClientOnlyText value={supportStats.openTickets.value} format="number" />}
            change={supportStats.openTickets.change}
            icon={<Clock className="h-5 w-5 text-yellow-600" />}
            iconBgColor="bg-yellow-100"
          />
          <StatCard
            title="Solved"
            value={<ClientOnlyText value={supportStats.solvedTickets.value} format="number" />}
            change={supportStats.solvedTickets.change}
            icon={<CheckCircle className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Daily Ticket Activity</h3>
                <p className="text-sm text-muted-foreground">New vs Solved vs Overdue</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="text-muted-foreground">New</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-muted-foreground">Solved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="text-muted-foreground">Overdue</span>
                </div>
              </div>
            </div>
            <BarChart
              data={ticketActivityData}
              dataKeys={[
                { key: "new", color: "#3b82f6", name: "New" },
                { key: "solved", color: "#10b981", name: "Solved" },
                { key: "overdue", color: "#ef4444", name: "Overdue" },
              ]}
              xAxisKey="month"
              height={280}
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Customer Satisfaction</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center py-4">
              <ProgressCircle value={75} size={120} strokeWidth={10} color="#10b981" />
              <p className="mt-4 text-sm text-muted-foreground">Overall satisfaction rate</p>
            </div>
            <DonutChart
              data={satisfactionData}
              height={180}
              innerRadius={40}
              outerRadius={60}
              showLegend
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Response Rate</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">First Response</span>
                  <span className="text-sm font-medium text-foreground">2.5 hrs</span>
                </div>
                <div className="h-2 rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Resolution Time</span>
                  <span className="text-sm font-medium text-foreground">8.2 hrs</span>
                </div>
                <div className="h-2 rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">SLA Compliance</span>
                  <span className="text-sm font-medium text-foreground">92%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Top Support Agents</h3>
              <a href="/support/agents" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: "Sarah Wilson", tickets: 156, resolved: 142, rating: 4.8 },
                { name: "Mike Johnson", tickets: 134, resolved: 128, rating: 4.7 },
                { name: "Emily Brown", tickets: 112, resolved: 98, rating: 4.5 },
                { name: "David Lee", tickets: 98, resolved: 89, rating: 4.6 },
              ].map((agent, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">{agent.resolved}/{agent.tickets} resolved</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{agent.rating}</p>
                    <p className="text-xs text-yellow-500">Rating</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Recent Tickets</h3>
            <a href="/support/tickets" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Ticket ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Issue</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Client</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Assigned To</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Due Date</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Priority</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent">
                    <td className="py-3 text-sm font-medium text-blue-600">{ticket.id}</td>
                    <td className="py-3 text-sm text-foreground">{ticket.issue}</td>
                    <td className="py-3 text-sm text-muted-foreground">{ticket.client}</td>
                    <td className="py-3 text-sm text-muted-foreground">{ticket.assignedTo}</td>
                    <td className="py-3 text-sm text-muted-foreground">{ticket.due}</td>
                    <td className="py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${priorityColors[ticket.priority]}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[ticket.status]}`}>
                        {ticket.status}
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
