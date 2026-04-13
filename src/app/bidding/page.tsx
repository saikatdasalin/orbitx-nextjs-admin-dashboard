"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnly from "@/components/ui/ClientOnly";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Gavel, Clock, Trophy, Users, ArrowUpRight, MoreHorizontal, Heart } from "lucide-react";

const biddingData = [
  { time: "00:00", bids: 120 },
  { time: "04:00", bids: 80 },
  { time: "08:00", bids: 200 },
  { time: "12:00", bids: 350 },
  { time: "16:00", bids: 420 },
  { time: "20:00", bids: 380 },
  { time: "24:00", bids: 290 },
];

const liveAuctions = [
  { id: 1, title: "Vintage Rolex Submariner", currentBid: "$12,500", bids: 45, timeLeft: "2h 15m", image: "watch" },
  { id: 2, title: "1967 Ford Mustang", currentBid: "$45,000", bids: 89, timeLeft: "5h 30m", image: "car" },
  { id: 3, title: "Original Banksy Print", currentBid: "$8,200", bids: 32, timeLeft: "1h 45m", image: "art" },
  { id: 4, title: "Signed Michael Jordan Jersey", currentBid: "$3,800", bids: 67, timeLeft: "3h 20m", image: "sports" },
];

const topBidders = [
  { name: "Alexander K.", totalBids: 156, won: 12, avatar: "AK" },
  { name: "Sarah M.", totalBids: 134, won: 8, avatar: "SM" },
  { name: "James W.", totalBids: 98, won: 15, avatar: "JW" },
  { name: "Emily R.", totalBids: 87, won: 6, avatar: "ER" },
  { name: "Michael T.", totalBids: 76, won: 9, avatar: "MT" },
];

const recentWins = [
  { item: "Antique Diamond Ring", winner: "Sarah M.", price: "$4,200", date: "Dec 5, 2024" },
  { item: "Rare Comic Book Collection", winner: "James W.", price: "$1,850", date: "Dec 5, 2024" },
  { item: "Vintage Guitar", winner: "Alexander K.", price: "$6,500", date: "Dec 4, 2024" },
  { item: "Limited Edition Sneakers", winner: "Emily R.", price: "$890", date: "Dec 4, 2024" },
];

export default function BiddingDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Bidding Dashboard</h1>
              <p className="mt-2 text-purple-100">Track live auctions, bids, and winning items in real-time</p>
            </div>
            <button className="rounded-lg bg-card/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-card/30">
              Create Auction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-900 p-3">
                <Gavel className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Active Auctions</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">156</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 dark:bg-blue-900 p-3">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Total Bids Today</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">2,847</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-100 dark:bg-green-900 p-3">
                <Trophy className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Items Won</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">89</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-orange-100 dark:bg-orange-900 p-3">
                <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Active Bidders</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">1,234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Bidding Activity</h3>
              <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 280 }} />}>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={biddingData}>
                  <defs>
                    <linearGradient id="colorBids" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="bids" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorBids)" />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Top Bidders</h3>
              <button className="rounded-lg p-2 hover:bg-accent">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {topBidders.map((bidder, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-sm font-medium text-white">
                      {bidder.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-white">{bidder.name}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{bidder.totalBids} bids</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Trophy className="h-4 w-4" />
                    {bidder.won} won
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Live Auctions</h3>
            <a href="/auctions" className="flex items-center gap-1 text-sm text-purple-600 hover:underline">
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {liveAuctions.map((auction) => (
              <div key={auction.id} className="rounded-lg border border-border p-4 hover:shadow-lg transition-shadow">
                <div className="relative mb-3 h-32 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                  <button className="absolute right-2 top-2 rounded-full bg-card/80 p-1.5 hover:bg-card">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <div className="absolute bottom-2 left-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                    LIVE
                  </div>
                </div>
                <h4 className="font-medium text-foreground dark:text-white truncate">{auction.title}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-purple-600">{auction.currentBid}</p>
                    <p className="text-xs text-muted-foreground dark:text-muted-foreground">{auction.bids} bids</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-orange-600">
                    <Clock className="h-4 w-4" />
                    {auction.timeLeft}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Recent Wins</h3>
            <a href="/wins" className="flex items-center gap-1 text-sm text-purple-600 hover:underline">
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Item</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Winner</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Final Price</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentWins.map((win, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3 text-sm font-medium text-foreground dark:text-white">{win.item}</td>
                    <td className="py-3 text-sm text-muted-foreground dark:text-muted-foreground">{win.winner}</td>
                    <td className="py-3 text-sm font-medium text-green-600">{win.price}</td>
                    <td className="py-3 text-sm text-muted-foreground dark:text-muted-foreground">{win.date}</td>
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
