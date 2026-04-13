"use client";

import { Briefcase, MapPin, Clock, DollarSign, Heart, Search, Filter, Building } from "lucide-react";
import { useState } from "react";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "San Francisco, CA", type: "Full-time", salary: "$120k - $160k", posted: "2 days ago", logo: "TC" },
  { id: 2, title: "Product Designer", company: "DesignHub", location: "Remote", type: "Full-time", salary: "$90k - $130k", posted: "3 days ago", logo: "DH" },
  { id: 3, title: "Backend Engineer", company: "DataFlow", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", posted: "1 week ago", logo: "DF" },
  { id: 4, title: "DevOps Engineer", company: "CloudScale", location: "Austin, TX", type: "Contract", salary: "$100k - $140k", posted: "4 days ago", logo: "CS" },
  { id: 5, title: "UX Researcher", company: "UserFirst", location: "Remote", type: "Full-time", salary: "$85k - $115k", posted: "5 days ago", logo: "UF" },
  { id: 6, title: "Mobile Developer", company: "AppWorks", location: "Seattle, WA", type: "Full-time", salary: "$110k - $150k", posted: "1 day ago", logo: "AW" },
];

export default function JobFeedPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground dark:text-white mb-2">Job Feed</h1>
          <p className="text-muted-foreground dark:text-muted-foreground">Discover your next career opportunity</p>
        </div>

        <div className="bg-card rounded-xl p-4 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <select className="rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white">
                <option>All Locations</option>
                <option>Remote</option>
                <option>San Francisco</option>
                <option>New York</option>
              </select>
              <select className="rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent">
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground mb-3">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-red-500 hover:bg-accent rounded-lg">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-accent font-medium">
            Load More Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
