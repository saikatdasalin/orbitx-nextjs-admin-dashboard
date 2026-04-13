"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Star, 
  Search, 
  Filter,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";

const reviews = [
  { id: 1, product: "iPhone 15 Pro Max", customer: "John Smith", rating: 5, comment: "Amazing phone! The camera quality is outstanding and the battery life is incredible.", date: "Dec 5, 2024", helpful: 24, avatar: "JS" },
  { id: 2, product: "MacBook Pro 16\"", customer: "Sarah Johnson", rating: 4, comment: "Great laptop for development work. The M3 chip is blazing fast. Only wish it had more ports.", date: "Dec 4, 2024", helpful: 18, avatar: "SJ" },
  { id: 3, product: "AirPods Pro 2", customer: "Mike Wilson", rating: 5, comment: "Best earbuds I've ever owned. The noise cancellation is top-notch.", date: "Dec 3, 2024", helpful: 32, avatar: "MW" },
  { id: 4, product: "Apple Watch Ultra 2", customer: "Emily Davis", rating: 3, comment: "Good watch but a bit too bulky for my wrist. Battery life is excellent though.", date: "Dec 2, 2024", helpful: 8, avatar: "ED" },
  { id: 5, product: "iPad Pro 12.9\"", customer: "Chris Brown", rating: 5, comment: "Perfect for digital art and note-taking. The display is gorgeous!", date: "Dec 1, 2024", helpful: 15, avatar: "CB" },
];

const ratingStats = [
  { stars: 5, count: 156, percentage: 65 },
  { stars: 4, count: 48, percentage: 20 },
  { stars: 3, count: 24, percentage: 10 },
  { stars: 2, count: 8, percentage: 3 },
  { stars: 1, count: 4, percentage: 2 },
];

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const averageRating = 4.5;
  const totalReviews = 240;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Product Reviews</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Manage customer reviews and ratings</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="premium-card p-6">
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-[var(--foreground)]">{averageRating}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-5 w-5 ${star <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">{totalReviews} reviews</p>
            </div>
            <div className="space-y-3">
              {ratingStats.map((stat) => (
                <div key={stat.stars} className="flex items-center gap-3">
                  <span className="text-sm text-[var(--muted-foreground)] w-8">{stat.stars} star</span>
                  <div className="flex-1 h-2 rounded-full bg-[var(--secondary)]">
                    <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${stat.percentage}%` }} />
                  </div>
                  <span className="text-sm text-[var(--muted-foreground)] w-8">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search reviews..."
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

            {reviews.map((review) => (
              <div key={review.id} className="premium-card p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{review.customer}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{review.product}</p>
                    </div>
                  </div>
                  <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                    <MoreHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                  <span className="text-sm text-[var(--muted-foreground)] ml-2">{review.date}</span>
                </div>
                <p className="text-[var(--foreground)] mb-4">{review.comment}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    Reply
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
