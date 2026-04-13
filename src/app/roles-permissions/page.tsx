"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Shield, 
  Users, 
  Plus,
  Edit,
  Trash2,
  Check,
  X
} from "lucide-react";

const roles = [
  { 
    name: "Super Admin", 
    description: "Full access to all features and settings",
    users: 2,
    color: "bg-red-500",
    permissions: { dashboard: true, users: true, settings: true, billing: true, reports: true, api: true }
  },
  { 
    name: "Admin", 
    description: "Access to most features except billing",
    users: 5,
    color: "bg-purple-500",
    permissions: { dashboard: true, users: true, settings: true, billing: false, reports: true, api: true }
  },
  { 
    name: "Editor", 
    description: "Can create and edit content",
    users: 12,
    color: "bg-blue-500",
    permissions: { dashboard: true, users: false, settings: false, billing: false, reports: true, api: false }
  },
  { 
    name: "Viewer", 
    description: "Read-only access to dashboard",
    users: 28,
    color: "bg-green-500",
    permissions: { dashboard: true, users: false, settings: false, billing: false, reports: false, api: false }
  },
];

const permissionsList = [
  { key: "dashboard", label: "Dashboard Access", description: "View and interact with dashboard" },
  { key: "users", label: "User Management", description: "Create, edit, and delete users" },
  { key: "settings", label: "Settings", description: "Modify system settings" },
  { key: "billing", label: "Billing", description: "Access billing and payment info" },
  { key: "reports", label: "Reports", description: "View and export reports" },
  { key: "api", label: "API Access", description: "Access API keys and documentation" },
];

export default function RolesPermissionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Roles & Permissions</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage user roles and access permissions</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Role
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">Roles</h3>
            {roles.map((role) => (
              <div key={role.name} className="premium-card p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2.5 ${role.color}`}>
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">{role.name}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{role.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                    <Users className="h-4 w-4" />
                    <span>{role.users} users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                      <Edit className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </button>
                    <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Permission Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Permission</th>
                    {roles.map((role) => (
                      <th key={role.name} className="pb-4 text-center text-sm font-medium text-[var(--muted-foreground)]">
                        {role.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {permissionsList.map((permission) => (
                    <tr key={permission.key} className="border-b border-[var(--border)] last:border-0">
                      <td className="py-4">
                        <p className="font-medium text-[var(--foreground)]">{permission.label}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{permission.description}</p>
                      </td>
                      {roles.map((role) => (
                        <td key={`${role.name}-${permission.key}`} className="py-4 text-center">
                          {role.permissions[permission.key as keyof typeof role.permissions] ? (
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                              <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </div>
                          ) : (
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                              <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
