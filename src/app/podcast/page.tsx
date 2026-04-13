"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnly from "@/components/ui/ClientOnly";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Play, Pause, SkipBack, SkipForward, Volume2, Headphones, Users, Clock, TrendingUp, Heart, Share2, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const listenerData = [
  { day: "Mon", listeners: 1200 },
  { day: "Tue", listeners: 1800 },
  { day: "Wed", listeners: 2200 },
  { day: "Thu", listeners: 1900 },
  { day: "Fri", listeners: 2500 },
  { day: "Sat", listeners: 3200 },
  { day: "Sun", listeners: 2800 },
];

const episodes = [
  { id: 1, title: "The Future of AI in Business", duration: "45:32", plays: 12500, date: "Dec 5, 2024", status: "published" },
  { id: 2, title: "Interview with Tech Leaders", duration: "58:15", plays: 9800, date: "Dec 3, 2024", status: "published" },
  { id: 3, title: "Startup Success Stories", duration: "42:08", plays: 8200, date: "Dec 1, 2024", status: "published" },
  { id: 4, title: "Remote Work Revolution", duration: "36:45", plays: 7500, date: "Nov 28, 2024", status: "published" },
  { id: 5, title: "Investing in 2025", duration: "51:20", plays: 0, date: "Dec 8, 2024", status: "scheduled" },
];

const topEpisodes = [
  { title: "The Future of AI in Business", plays: "12.5K", growth: "+15%" },
  { title: "Interview with Tech Leaders", plays: "9.8K", growth: "+8%" },
  { title: "Startup Success Stories", plays: "8.2K", growth: "+12%" },
];

export default function PodcastDashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime] = useState("12:45");
  const [totalTime] = useState("45:32");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-100">NOW PLAYING</p>
              <h1 className="mt-1 text-2xl font-bold">The Future of AI in Business</h1>
              <p className="mt-1 text-orange-100">Episode 45 • Season 3</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-card/20 p-3 hover:bg-card/30">
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full bg-card p-4 text-orange-500 hover:bg-orange-50"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <button className="rounded-full bg-card/20 p-3 hover:bg-card/30">
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <span className="text-sm">{currentTime}</span>
              <div className="flex-1 h-1.5 rounded-full bg-card/30">
                <div className="h-full w-1/3 rounded-full bg-card" />
              </div>
              <span className="text-sm">{totalTime}</span>
              <button className="ml-4 rounded-full bg-card/20 p-2 hover:bg-card/30">
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-orange-100 dark:bg-orange-900 p-3">
                <Headphones className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Total Plays</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">125.4K</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-pink-100 dark:bg-pink-900 p-3">
                <Users className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Subscribers</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">8,234</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-900 p-3">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Avg. Listen Time</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">32:15</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-100 dark:bg-green-900 p-3">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Growth Rate</p>
                <p className="text-2xl font-bold text-foreground dark:text-white">+24.5%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Listener Analytics</h3>
              <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 280 }} />}>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={listenerData}>
                  <defs>
                    <linearGradient id="colorListeners" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="listeners" stroke="#f97316" fillOpacity={1} fill="url(#colorListeners)" />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Top Episodes</h3>
              <button className="rounded-lg p-2 hover:bg-accent">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {topEpisodes.map((episode, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground dark:text-white text-sm truncate">{episode.title}</p>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{episode.plays} plays</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">{episode.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">All Episodes</h3>
            <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
              Upload Episode
            </button>
          </div>
          <div className="space-y-4">
            {episodes.map((episode) => (
              <div key={episode.id} className="flex items-center gap-4 rounded-lg border border-border p-4 hover:bg-accent/50">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800">
                  <Play className="h-5 w-5" />
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground dark:text-white">{episode.title}</h4>
                    {episode.status === "scheduled" && (
                      <span className="rounded-full bg-yellow-100 dark:bg-yellow-900 px-2 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                        Scheduled
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
                    <span>{episode.date}</span>
                    <span>{episode.duration}</span>
                    {episode.plays > 0 && <span><ClientOnlyText value={episode.plays} format="number" /> plays</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg p-2 hover:bg-accent">
                    <Heart className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <button className="rounded-lg p-2 hover:bg-accent">
                    <Share2 className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <button className="rounded-lg p-2 hover:bg-accent">
                    <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
