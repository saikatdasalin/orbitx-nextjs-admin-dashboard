"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import BarChart from "@/components/charts/BarChart";
import AreaChart from "@/components/charts/AreaChart";
import DonutChart from "@/components/charts/DonutChart";
import ProgressCircle from "@/components/charts/ProgressCircle";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  analyticsStats,
  acquisitionData,
  deviceSessionsData,
  trafficSourceData,
} from "@/data/dashboard-data";
import {
  Globe,
  TrendingUp,
  TrendingDown,
  Clock,
  Smartphone,
  Monitor,
  MoreVertical,
} from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Website Traffic"
            value={analyticsStats.websiteTraffic.value}
            change={analyticsStats.websiteTraffic.change}
            icon={<Globe className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Conversion Rate"
            value={analyticsStats.conversionRate.value}
            change={analyticsStats.conversionRate.change}
            icon={<TrendingUp className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Bounce Rate"
            value={analyticsStats.bounceRate.value}
            change={analyticsStats.bounceRate.change}
            icon={<TrendingDown className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
          <StatCard
            title="Session Duration"
            value={analyticsStats.sessionDuration.value}
            change={analyticsStats.sessionDuration.change}
            icon={<Clock className="h-5 w-5 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Acquisition</h3>
                <p className="text-sm text-muted-foreground">Weekly traffic overview</p>
              </div>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <BarChart
              data={acquisitionData}
              dataKeys={[{ key: "value", color: "#3b82f6", name: "Visitors" }]}
              xAxisKey="day"
              height={280}
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Device Sessions</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Mobile</p>
                    <p className="text-xs text-muted-foreground">9,690 sessions</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">52%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2">
                    <Monitor className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Desktop</p>
                    <p className="text-xs text-muted-foreground">6,780 sessions</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">36%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Others</p>
                    <p className="text-xs text-muted-foreground">2,150 sessions</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">12%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Top Traffic Source</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <DonutChart
              data={trafficSourceData}
              height={220}
              innerRadius={50}
              outerRadius={70}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Goal Accomplished</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <ProgressCircle value={67} size={120} strokeWidth={10} color="#3b82f6" />
              <p className="mt-4 text-sm text-muted-foreground">Target: 10,000 visitors</p>
              <p className="text-sm font-medium text-foreground">6,700 achieved</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Audience Metrics</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <AreaChart
              data={deviceSessionsData}
              dataKeys={[
                { key: "mobile", color: "#3b82f6", name: "Mobile" },
                { key: "desktop", color: "#10b981", name: "Desktop" },
              ]}
              xAxisKey="day"
              height={180}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Top Pages</h3>
            <a href="/analytics/pages" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Page</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Views</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Unique Views</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Bounce Rate</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { page: "/home", views: 12450, unique: 8920, bounce: "32.5%", time: "2:45" },
                  { page: "/products", views: 8920, unique: 6540, bounce: "45.2%", time: "3:12" },
                  { page: "/about", views: 5670, unique: 4320, bounce: "28.9%", time: "1:58" },
                  { page: "/contact", views: 3450, unique: 2890, bounce: "52.1%", time: "1:23" },
                  { page: "/blog", views: 2340, unique: 1890, bounce: "38.7%", time: "4:05" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent">
                    <td className="py-3 text-sm font-medium text-blue-600">{row.page}</td>
                    <td className="py-3 text-sm text-muted-foreground"><ClientOnlyText value={row.views} format="number" /></td>
                    <td className="py-3 text-sm text-muted-foreground"><ClientOnlyText value={row.unique} format="number" /></td>
                    <td className="py-3 text-sm text-muted-foreground">{row.bounce}</td>
                    <td className="py-3 text-sm text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing 5 of 25 pages</span>
            <div className="flex gap-2">
              <button className="rounded-lg border border-border px-3 py-1 hover:bg-accent">Previous</button>
              <button className="rounded-lg border border-border px-3 py-1 hover:bg-accent">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
