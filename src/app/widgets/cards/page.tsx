"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  ArrowUp,
  ArrowDown,
  MoreHorizontal
} from "lucide-react";

const statsCards = [
  { title: "Total Users", value: "24,589", change: "+12.5%", trending: true, icon: Users, color: "from-blue-500 to-blue-600" },
  { title: "Revenue", value: "$89,432", change: "+8.2%", trending: true, icon: DollarSign, color: "from-green-500 to-green-600" },
  { title: "Orders", value: "1,234", change: "-2.4%", trending: false, icon: ShoppingCart, color: "from-purple-500 to-purple-600" },
  { title: "Growth", value: "23.5%", change: "+4.1%", trending: true, icon: TrendingUp, color: "from-orange-500 to-orange-600" },
];

const profileCards = [
  { name: "John Smith", role: "Product Designer", avatar: "JS", status: "online" },
  { name: "Sarah Johnson", role: "Frontend Developer", avatar: "SJ", status: "offline" },
  { name: "Mike Wilson", role: "Backend Developer", avatar: "MW", status: "online" },
];

export default function CardWidgetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Card Widgets</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Various card component examples</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Statistics Cards</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card) => (
              <div key={card.title} className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-xl p-3 bg-gradient-to-br ${card.color}`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-medium ${card.trending ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {card.trending ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    {card.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-[var(--foreground)]">{card.value}</p>
                <p className="text-sm text-[var(--muted-foreground)]">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Profile Cards</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profileCards.map((profile) => (
              <div key={profile.name} className="premium-card p-5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">
                      {profile.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white ${profile.status === "online" ? "bg-green-500" : "bg-gray-400"}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[var(--foreground)]">{profile.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{profile.role}</p>
                  </div>
                  <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                    <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Gradient Cards</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Premium Plan</h3>
              <p className="text-white/80 mb-4">Get access to all premium features</p>
              <p className="text-3xl font-bold mb-4">$29<span className="text-lg font-normal">/mo</span></p>
              <button className="w-full rounded-xl bg-card/20 backdrop-blur px-4 py-2.5 text-sm font-medium hover:bg-card/30 transition-colors">
                Upgrade Now
              </button>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Business Plan</h3>
              <p className="text-white/80 mb-4">Perfect for growing businesses</p>
              <p className="text-3xl font-bold mb-4">$99<span className="text-lg font-normal">/mo</span></p>
              <button className="w-full rounded-xl bg-card/20 backdrop-blur px-4 py-2.5 text-sm font-medium hover:bg-card/30 transition-colors">
                Get Started
              </button>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-white/80 mb-4">Custom solutions for large teams</p>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <button className="w-full rounded-xl bg-card/20 backdrop-blur px-4 py-2.5 text-sm font-medium hover:bg-card/30 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
