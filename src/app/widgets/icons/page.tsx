"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Home, User, Settings, Bell, Mail, Search, Heart, Star, 
  ShoppingCart, Package, Truck, CreditCard, Calendar, Clock,
  FileText, Folder, Image, Video, Music, Download, Upload,
  Edit, Trash2, Plus, Minus, Check, X, ChevronRight, ChevronDown,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RefreshCw, Share2,
  Copy, Eye, EyeOff, Lock, Unlock, Key, Shield, AlertCircle,
  Info, HelpCircle, MessageCircle, Phone, MapPin, Globe
} from "lucide-react";
import { useState } from "react";

const iconCategories = {
  "Navigation": [Home, Search, ChevronRight, ChevronDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight],
  "User": [User, Settings, Bell, Mail, Lock, Unlock, Key, Shield],
  "Commerce": [ShoppingCart, Package, Truck, CreditCard, Heart, Star],
  "Files": [FileText, Folder, Image, Video, Music, Download, Upload],
  "Actions": [Edit, Trash2, Plus, Minus, Check, X, RefreshCw, Share2, Copy],
  "Status": [Eye, EyeOff, AlertCircle, Info, HelpCircle],
  "Communication": [MessageCircle, Phone, MapPin, Globe, Calendar, Clock],
};

export default function IconLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Object.keys(iconCategories)];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Icon Library</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Browse available icons from Lucide</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(iconCategories).map(([category, icons]) => {
          if (selectedCategory !== "All" && selectedCategory !== category) return null;
          return (
            <div key={category} className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">{category}</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
                {icons.map((Icon, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors group"
                  >
                    <Icon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
                    <span className="text-xs text-[var(--muted-foreground)] truncate w-full text-center">
                      {Icon.displayName || "Icon"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        <div className="premium-card p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Icon Sizes</h3>
          <div className="flex items-end gap-8">
            <div className="text-center">
              <Home className="h-4 w-4 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">16px</span>
            </div>
            <div className="text-center">
              <Home className="h-5 w-5 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">20px</span>
            </div>
            <div className="text-center">
              <Home className="h-6 w-6 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">24px</span>
            </div>
            <div className="text-center">
              <Home className="h-8 w-8 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">32px</span>
            </div>
            <div className="text-center">
              <Home className="h-10 w-10 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">40px</span>
            </div>
            <div className="text-center">
              <Home className="h-12 w-12 text-[var(--foreground)] mx-auto mb-2" />
              <span className="text-xs text-[var(--muted-foreground)]">48px</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
