"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Briefcase, 
  Users, 
  FileText, 
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { useState } from "react";

const stats = [
  { title: "Active Jobs", value: "24", change: "+3", icon: Briefcase, iconBg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { title: "Total Applications", value: "1,847", change: "+156", icon: FileText, iconBg: "bg-gradient-to-br from-green-500 to-green-600" },
  { title: "Candidates", value: "892", change: "+48", icon: Users, iconBg: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { title: "Hired This Month", value: "12", change: "+5", icon: TrendingUp, iconBg: "bg-gradient-to-br from-orange-500 to-orange-600" },
];

const jobs = [
  { title: "Senior Frontend Developer", company: "Tech Corp", location: "San Francisco, CA", type: "Full-time", salary: "$120k - $150k", applicants: 45, posted: "2 days ago" },
  { title: "Product Designer", company: "Design Studio", location: "Remote", type: "Full-time", salary: "$90k - $120k", applicants: 32, posted: "3 days ago" },
  { title: "Backend Engineer", company: "StartUp XYZ", location: "New York, NY", type: "Full-time", salary: "$130k - $160k", applicants: 28, posted: "5 days ago" },
  { title: "DevOps Engineer", company: "Cloud Inc", location: "Remote", type: "Contract", salary: "$100k - $130k", applicants: 19, posted: "1 week ago" },
  { title: "UX Researcher", company: "Digital Ltd", location: "Austin, TX", type: "Full-time", salary: "$85k - $110k", applicants: 24, posted: "1 week ago" },
];

const recentApplications = [
  { name: "John Smith", position: "Senior Frontend Developer", status: "Interview", avatar: "JS" },
  { name: "Sarah Johnson", position: "Product Designer", status: "Review", avatar: "SJ" },
  { name: "Mike Wilson", position: "Backend Engineer", status: "Shortlisted", avatar: "MW" },
  { name: "Emily Davis", position: "DevOps Engineer", status: "New", avatar: "ED" },
];

export default function JobBoardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Job Board</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage job postings and applications</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Post Job
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
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div key={index} className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="rounded-xl bg-[var(--secondary)] p-3">
                        <Building2 className="h-6 w-6 text-[var(--muted-foreground)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)]">{job.title}</h3>
                        <p className="text-sm text-[var(--muted-foreground)]">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-[var(--muted-foreground)]">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3.5 w-3.5" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                        {job.applicants} applicants
                      </span>
                      <p className="text-xs text-[var(--muted-foreground)] mt-2">{job.posted}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                    {app.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[var(--foreground)]">{app.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{app.position}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    app.status === "Interview" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                    app.status === "Review" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                    app.status === "Shortlisted" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                  }`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
