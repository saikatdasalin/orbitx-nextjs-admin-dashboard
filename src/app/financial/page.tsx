"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  financialStats,
  revenueExpenseData,
  budgetStatus,
} from "@/data/dashboard-data";
import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  CreditCard,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const transactions = [
  { id: "TXN-001", date: "Dec 5, 2024", recipient: "Amazon Inc.", type: "Payment", amount: -1250, currency: "USD", method: "Bank Transfer", status: "Completed" },
  { id: "TXN-002", date: "Dec 4, 2024", recipient: "Client ABC", type: "Invoice", amount: 5600, currency: "USD", method: "Wire Transfer", status: "Completed" },
  { id: "TXN-003", date: "Dec 4, 2024", recipient: "Office Supplies Co.", type: "Payment", amount: -340, currency: "USD", method: "Credit Card", status: "Pending" },
  { id: "TXN-004", date: "Dec 3, 2024", recipient: "Client XYZ", type: "Invoice", amount: 8900, currency: "USD", method: "Wire Transfer", status: "Completed" },
  { id: "TXN-005", date: "Dec 3, 2024", recipient: "Google Ads", type: "Payment", amount: -2100, currency: "USD", method: "Credit Card", status: "Completed" },
];

const spendingData = [
  { name: "Marketing", value: 35, color: "#3b82f6" },
  { name: "Operations", value: 25, color: "#10b981" },
  { name: "Salaries", value: 30, color: "#f59e0b" },
  { name: "Others", value: 10, color: "#8b5cf6" },
];

const investmentData = [
  { name: "Stocks", value: 45, color: "#3b82f6" },
  { name: "Bonds", value: 25, color: "#10b981" },
  { name: "Real Estate", value: 20, color: "#f59e0b" },
  { name: "Crypto", value: 10, color: "#ef4444" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

export default function FinancialDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Income"
            value={financialStats.totalIncome.value}
            change={financialStats.totalIncome.change}
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Total Orders"
            value={financialStats.totalOrders.value}
            change={financialStats.totalOrders.change}
            icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Net Profit"
            value={financialStats.netProfit.value}
            change={financialStats.netProfit.change}
            icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
          <StatCard
            title="Total Expense"
            value={financialStats.totalExpense.value}
            change={financialStats.totalExpense.change}
            icon={<CreditCard className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Total Statistics</h3>
                <p className="text-sm text-muted-foreground">Revenue vs Expenses</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="text-muted-foreground">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="text-muted-foreground">Expenses</span>
                </div>
              </div>
            </div>
            <AreaChart
              data={revenueExpenseData}
              dataKeys={[
                { key: "revenue", color: "#3b82f6", name: "Revenue" },
                { key: "expense", color: "#ef4444", name: "Expense" },
              ]}
              xAxisKey="day"
              height={300}
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Budget Status</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {budgetStatus.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="text-sm font-medium text-foreground">
                      ${item.spent}k / ${item.budget}k
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${(item.spent / item.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Cash in Bank</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-foreground">$245,890</p>
              <p className="text-sm text-green-600 flex items-center justify-center gap-1 mt-2">
                <ArrowUpRight className="h-4 w-4" />
                +12.5% from last month
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-green-50 p-3">
                <p className="text-lg font-semibold text-green-600">$89,450</p>
                <p className="text-xs text-muted-foreground">Income</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <p className="text-lg font-semibold text-red-600">$45,230</p>
                <p className="text-xs text-muted-foreground">Expenses</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Spending Breakdown</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <DonutChart
              data={spendingData}
              height={200}
              innerRadius={50}
              outerRadius={70}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Investment Portfolio</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <DonutChart
              data={investmentData}
              height={200}
              innerRadius={50}
              outerRadius={70}
              showLegend
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Transaction History</h3>
            <a href="/financial/transactions" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Transaction ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Recipient</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Method</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent">
                    <td className="py-3 text-sm font-medium text-blue-600">{txn.id}</td>
                    <td className="py-3 text-sm text-muted-foreground">{txn.date}</td>
                    <td className="py-3 text-sm text-foreground">{txn.recipient}</td>
                    <td className="py-3 text-sm text-muted-foreground">{txn.type}</td>
                    <td className="py-3">
                      <span className={`text-sm font-medium ${txn.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {txn.amount >= 0 ? "+" : ""}<ClientOnlyText value={Math.abs(txn.amount)} format="currency" />
                      </span>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{txn.method}</td>
                    <td className="py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[txn.status]}`}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Exchange Rate</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { from: "USD", to: "EUR", rate: 0.92, change: -0.5 },
                { from: "USD", to: "GBP", rate: 0.79, change: 0.3 },
                { from: "USD", to: "JPY", rate: 149.50, change: 1.2 },
                { from: "USD", to: "CAD", rate: 1.36, change: -0.2 },
              ].map((currency, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
                      {currency.from}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{currency.from} to {currency.to}</p>
                      <p className="text-xs text-muted-foreground">1 {currency.from} = {currency.rate} {currency.to}</p>
                    </div>
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-medium ${currency.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {currency.change >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    {Math.abs(currency.change)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Send Money", icon: ArrowUpRight, color: "bg-blue-100 text-blue-600" },
                { label: "Request Payment", icon: ArrowDownRight, color: "bg-green-100 text-green-600" },
                { label: "Create Invoice", icon: CreditCard, color: "bg-purple-100 text-purple-600" },
                { label: "View Reports", icon: TrendingUp, color: "bg-orange-100 text-orange-600" },
              ].map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 hover:bg-accent transition-colors"
                >
                  <div className={`rounded-lg p-3 ${action.color}`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
