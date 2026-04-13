"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2,
  TrendingUp,
  Eye,
  MoreHorizontal,
  Plus,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ClientOnly from "@/components/ui/ClientOnly";

const stats = [
  { title: "Total Followers", value: "124.5K", change: "+12.5%", trending: true, icon: Users, iconBg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { title: "Total Likes", value: "89.2K", change: "+8.3%", trending: true, icon: Heart, iconBg: "bg-gradient-to-br from-pink-500 to-pink-600" },
  { title: "Comments", value: "12.8K", change: "+15.2%", trending: true, icon: MessageCircle, iconBg: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { title: "Shares", value: "5.4K", change: "+6.7%", trending: true, icon: Share2, iconBg: "bg-gradient-to-br from-green-500 to-green-600" },
];

const engagementData = [
  { day: "Mon", likes: 1200, comments: 450, shares: 180 },
  { day: "Tue", likes: 1800, comments: 620, shares: 240 },
  { day: "Wed", likes: 2400, comments: 780, shares: 320 },
  { day: "Thu", likes: 2100, comments: 650, shares: 280 },
  { day: "Fri", likes: 3200, comments: 950, shares: 420 },
  { day: "Sat", likes: 2800, comments: 820, shares: 380 },
  { day: "Sun", likes: 2200, comments: 580, shares: 260 },
];

const platforms = [
  { name: "Twitter", followers: "45.2K", engagement: "4.8%", icon: Twitter, color: "bg-blue-400" },
  { name: "Facebook", followers: "38.1K", engagement: "3.2%", icon: Facebook, color: "bg-blue-600" },
  { name: "Instagram", followers: "32.8K", engagement: "6.5%", icon: Instagram, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { name: "LinkedIn", followers: "8.4K", engagement: "2.1%", icon: Linkedin, color: "bg-blue-700" },
];

const recentPosts = [
  { platform: "Twitter", content: "Excited to announce our new product launch!", likes: 1250, comments: 89, shares: 234, time: "2 hours ago" },
  { platform: "Instagram", content: "Behind the scenes of our latest photoshoot", likes: 3420, comments: 156, shares: 78, time: "5 hours ago" },
  { platform: "Facebook", content: "Join us for our upcoming webinar on digital marketing", likes: 890, comments: 45, shares: 123, time: "1 day ago" },
  { platform: "LinkedIn", content: "We're hiring! Check out our open positions", likes: 567, comments: 34, shares: 89, time: "2 days ago" },
];

export default function SocialMediaPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Social Media</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Monitor your social media performance</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Post
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="premium-card p-5">
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 ${stat.iconBg}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Engagement Overview</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Weekly engagement metrics</p>
              </div>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 300 }} />}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Area type="monotone" dataKey="likes" stroke="#ec4899" fillOpacity={1} fill="url(#colorLikes)" name="Likes" />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Platforms</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <div className={`rounded-xl p-2.5 ${platform.color}`}>
                    <platform.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[var(--foreground)]">{platform.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{platform.followers} followers</p>
                  </div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{platform.engagement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">Recent Posts</h3>
            <button className="text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                      {post.platform}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">{post.time}</span>
                  </div>
                  <p className="text-[var(--foreground)]">{post.content}</p>
                  <div className="flex items-center gap-6 mt-3">
                    <span className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                      <Share2 className="h-4 w-4" />
                      {post.shares}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
