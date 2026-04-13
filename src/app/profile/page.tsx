"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Camera,
  Briefcase,
  Globe,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const userProfile = {
  name: "Admin User",
  role: "Senior Product Designer",
  email: "admin@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinDate: "January 2022",
  bio: "Passionate product designer with 8+ years of experience creating user-centered digital experiences. Specialized in design systems, interaction design, and user research.",
  website: "www.example.com",
  twitter: "@adminuser",
  linkedin: "adminuser",
  github: "adminuser",
};

const stats = [
  { label: "Projects", value: "24" },
  { label: "Tasks Completed", value: "156" },
  { label: "Team Members", value: "12" },
  { label: "Reviews", value: "48" },
];

const recentActivity = [
  { action: "Completed project", target: "Website Redesign", time: "2 hours ago" },
  { action: "Commented on", target: "Mobile App Design", time: "5 hours ago" },
  { action: "Uploaded files to", target: "Brand Guidelines", time: "1 day ago" },
  { action: "Created new task in", target: "Q4 Planning", time: "2 days ago" },
  { action: "Invited team member to", target: "Design System", time: "3 days ago" },
];

const skills = ["UI/UX Design", "Figma", "Prototyping", "User Research", "Design Systems", "React", "TypeScript", "Tailwind CSS"];

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="premium-card overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
              <div className="relative">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-[var(--background)] flex items-center justify-center text-3xl font-bold text-white">
                  AU
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-[var(--primary)] p-2 text-white shadow-lg hover:opacity-90 transition-opacity">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 sm:pb-2">
                <h1 className="text-2xl font-bold text-[var(--foreground)]">{userProfile.name}</h1>
                <p className="text-[var(--muted-foreground)]">{userProfile.role}</p>
              </div>
              <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2 self-start sm:self-auto">
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card p-5 text-center">
              <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">About</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{userProfile.bio}</p>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-[var(--secondary)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                    <div className="h-2 w-2 rounded-full bg-[var(--primary)] mt-2" />
                    <div>
                      <p className="text-[var(--foreground)]">
                        <span className="text-[var(--muted-foreground)]">{activity.action}</span>{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[var(--secondary)] p-2.5">
                    <Mail className="h-5 w-5 text-[var(--muted-foreground)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Email</p>
                    <p className="font-medium text-[var(--foreground)]">{userProfile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[var(--secondary)] p-2.5">
                    <Phone className="h-5 w-5 text-[var(--muted-foreground)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Phone</p>
                    <p className="font-medium text-[var(--foreground)]">{userProfile.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[var(--secondary)] p-2.5">
                    <MapPin className="h-5 w-5 text-[var(--muted-foreground)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Location</p>
                    <p className="font-medium text-[var(--foreground)]">{userProfile.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[var(--secondary)] p-2.5">
                    <Calendar className="h-5 w-5 text-[var(--muted-foreground)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Joined</p>
                    <p className="font-medium text-[var(--foreground)]">{userProfile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Social Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <Globe className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">{userProfile.website}</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <Twitter className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">{userProfile.twitter}</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <Linkedin className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">{userProfile.linkedin}</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <Github className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">{userProfile.github}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
