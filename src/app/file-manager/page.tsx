"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Folder, 
  File, 
  Image, 
  FileText, 
  Film, 
  Music,
  Upload,
  Plus,
  Search,
  Grid,
  List,
  MoreHorizontal,
  Download,
  Trash2,
  Star,
  Clock
} from "lucide-react";
import { useState } from "react";

const folders = [
  { name: "Documents", files: 24, size: "2.4 GB", color: "bg-blue-500" },
  { name: "Images", files: 156, size: "8.2 GB", color: "bg-green-500" },
  { name: "Videos", files: 12, size: "15.6 GB", color: "bg-purple-500" },
  { name: "Music", files: 89, size: "4.1 GB", color: "bg-orange-500" },
  { name: "Downloads", files: 45, size: "6.8 GB", color: "bg-pink-500" },
  { name: "Projects", files: 18, size: "1.2 GB", color: "bg-cyan-500" },
];

const recentFiles = [
  { name: "Project Proposal.pdf", type: "pdf", size: "2.4 MB", modified: "2 hours ago", icon: FileText },
  { name: "Dashboard Design.fig", type: "design", size: "15.8 MB", modified: "5 hours ago", icon: Image },
  { name: "Meeting Recording.mp4", type: "video", size: "245 MB", modified: "1 day ago", icon: Film },
  { name: "Budget Report.xlsx", type: "spreadsheet", size: "1.2 MB", modified: "2 days ago", icon: FileText },
  { name: "Brand Guidelines.pdf", type: "pdf", size: "8.5 MB", modified: "3 days ago", icon: FileText },
  { name: "Product Demo.mp4", type: "video", size: "156 MB", modified: "4 days ago", icon: Film },
  { name: "Team Photo.jpg", type: "image", size: "4.2 MB", modified: "5 days ago", icon: Image },
  { name: "Podcast Episode.mp3", type: "audio", size: "45 MB", modified: "1 week ago", icon: Music },
];

const storageUsage = [
  { type: "Documents", used: 2.4, color: "bg-blue-500" },
  { type: "Images", used: 8.2, color: "bg-green-500" },
  { type: "Videos", used: 15.6, color: "bg-purple-500" },
  { type: "Music", used: 4.1, color: "bg-orange-500" },
  { type: "Other", used: 3.7, color: "bg-gray-500" },
];

const totalStorage = 50;
const usedStorage = storageUsage.reduce((acc, item) => acc + item.used, 0);

export default function FileManagerPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">File Manager</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage and organize your files</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload
            </button>
            <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Folder
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search files and folders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2.5 transition-colors ${viewMode === "grid" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]"}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-2.5 transition-colors ${viewMode === "list" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Folders</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {folders.map((folder) => (
                  <div key={folder.name} className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`rounded-xl p-3 ${folder.color}`}>
                        <Folder className="h-6 w-6 text-white" />
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 rounded-lg p-1.5 hover:bg-[var(--secondary)] transition-all">
                        <MoreHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                    </div>
                    <h4 className="font-medium text-[var(--foreground)]">{folder.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">{folder.files} files - {folder.size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Recent Files</h3>
                <button className="text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                  View all
                </button>
              </div>
              <div className="space-y-2">
                {recentFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={`rounded-xl p-2.5 ${
                        file.type === "pdf" ? "bg-red-100 dark:bg-red-900/30" :
                        file.type === "image" || file.type === "design" ? "bg-green-100 dark:bg-green-900/30" :
                        file.type === "video" ? "bg-purple-100 dark:bg-purple-900/30" :
                        file.type === "audio" ? "bg-orange-100 dark:bg-orange-900/30" :
                        "bg-blue-100 dark:bg-blue-900/30"
                      }`}>
                        <file.icon className={`h-5 w-5 ${
                          file.type === "pdf" ? "text-red-600 dark:text-red-400" :
                          file.type === "image" || file.type === "design" ? "text-green-600 dark:text-green-400" :
                          file.type === "video" ? "text-purple-600 dark:text-purple-400" :
                          file.type === "audio" ? "text-orange-600 dark:text-orange-400" :
                          "text-blue-600 dark:text-blue-400"
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{file.name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{file.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[var(--muted-foreground)] hidden sm:block">{file.modified}</span>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="rounded-lg p-2 hover:bg-[var(--background)] transition-colors">
                          <Star className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--background)] transition-colors">
                          <Download className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Storage</h3>
              <div className="relative h-4 rounded-full bg-[var(--secondary)] overflow-hidden mb-4">
                {storageUsage.map((item, index) => {
                  const previousWidth = storageUsage.slice(0, index).reduce((acc, i) => acc + (i.used / totalStorage) * 100, 0);
                  return (
                    <div
                      key={item.type}
                      className={`absolute h-full ${item.color}`}
                      style={{
                        left: `${previousWidth}%`,
                        width: `${(item.used / totalStorage) * 100}%`,
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--muted-foreground)]">{usedStorage.toFixed(1)} GB used</span>
                <span className="text-sm text-[var(--muted-foreground)]">{totalStorage} GB total</span>
              </div>
              <div className="space-y-3">
                {storageUsage.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${item.color}`} />
                      <span className="text-sm text-[var(--foreground)]">{item.type}</span>
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)]">{item.used} GB</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Access</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors text-left">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-[var(--foreground)]">Starred</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors text-left">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-[var(--foreground)]">Recent</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors text-left">
                  <Trash2 className="h-5 w-5 text-red-500" />
                  <span className="text-[var(--foreground)]">Trash</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
