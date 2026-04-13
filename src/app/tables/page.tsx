"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
  joinDate: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Admin", status: "Active", joinDate: "Jan 15, 2024", avatar: "JS" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Editor", status: "Active", joinDate: "Feb 20, 2024", avatar: "SJ" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Viewer", status: "Inactive", joinDate: "Mar 10, 2024", avatar: "MW" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active", joinDate: "Apr 5, 2024", avatar: "ED" },
  { id: 5, name: "Chris Brown", email: "chris@example.com", role: "Admin", status: "Pending", joinDate: "May 12, 2024", avatar: "CB" },
  { id: 6, name: "Lisa Anderson", email: "lisa@example.com", role: "Viewer", status: "Active", joinDate: "Jun 8, 2024", avatar: "LA" },
  { id: 7, name: "David Martinez", email: "david@example.com", role: "Editor", status: "Active", joinDate: "Jul 22, 2024", avatar: "DM" },
  { id: 8, name: "Jennifer Taylor", email: "jennifer@example.com", role: "Viewer", status: "Inactive", joinDate: "Aug 15, 2024", avatar: "JT" },
  { id: 9, name: "Robert Garcia", email: "robert@example.com", role: "Admin", status: "Active", joinDate: "Sep 3, 2024", avatar: "RG" },
  { id: 10, name: "Amanda White", email: "amanda@example.com", role: "Editor", status: "Pending", joinDate: "Oct 18, 2024", avatar: "AW" },
];

type SortField = "name" | "email" | "role" | "status" | "joinDate";
type SortDirection = "asc" | "desc";

export default function TablesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const itemsPerPage = 5;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : 1;
    }
    return aValue > bValue ? -1 : 1;
  });

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map((u) => u.id));
    }
  };

  const handleSelectUser = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((uid) => uid !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <ChevronDown className="h-4 w-4 text-muted-foreground" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4 text-blue-600" />
    ) : (
      <ChevronDown className="h-4 w-4 text-blue-600" />
    );
  };

  const getStatusColor = (status: User["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case "Inactive":
        return "bg-secondary text-foreground";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground dark:text-white">Tables</h1>
          <p className="text-muted-foreground dark:text-muted-foreground">Manage and view your data with advanced table features</p>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg border border-border bg-card pl-10 pr-4 py-2 text-sm text-foreground dark:text-white placeholder-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              {selectedUsers.length > 0 && (
                <span className="text-sm text-muted-foreground dark:text-muted-foreground">
                  {selectedUsers.length} selected
                </span>
              )}
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Add User
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === paginatedUsers.length && paginatedUsers.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-border text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-gray-200"
                    >
                      Name {renderSortIcon("name")}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("email")}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-gray-200"
                    >
                      Email {renderSortIcon("email")}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-gray-200"
                    >
                      Role {renderSortIcon("role")}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-gray-200"
                    >
                      Status {renderSortIcon("status")}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("joinDate")}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-gray-200"
                    >
                      Join Date {renderSortIcon("joinDate")}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border hover:bg-accent/50"
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-border text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-medium text-white">
                          {user.avatar}
                        </div>
                        <span className="font-medium text-foreground dark:text-white">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground dark:text-muted-foreground">{user.email}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground dark:text-muted-foreground">{user.role}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground dark:text-muted-foreground">{user.joinDate}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button className="rounded p-1.5 hover:bg-accent">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="rounded p-1.5 hover:bg-accent">
                          <Edit className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="rounded p-1.5 hover:bg-accent">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="rounded p-1.5 hover:bg-accent">
                          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <div className="text-sm text-muted-foreground dark:text-muted-foreground">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, sortedUsers.length)} of {sortedUsers.length} results
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-border p-2 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-border p-2 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
