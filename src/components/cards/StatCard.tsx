"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: React.ReactNode;
  change: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  chart?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  changeLabel = "last month",
  icon,
  iconBgColor = "bg-blue-100",
  chart,
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-border bg-card p-5" suppressHydrationWarning>
      <div className="flex items-start justify-between" suppressHydrationWarning>
        <div className="flex items-center gap-3" suppressHydrationWarning>
          {icon && (
            <div className={cn("rounded-lg p-2.5", iconBgColor)} suppressHydrationWarning>{icon}</div>
          )}
          <div suppressHydrationWarning>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold text-foreground">{value}</p>
          </div>
        </div>
        {chart && <div className="h-12 w-20" suppressHydrationWarning>{chart}</div>}
      </div>
      <div className="mt-3 flex items-center gap-1.5" suppressHydrationWarning>
        <span
          className={cn(
            "flex items-center gap-0.5 text-sm font-medium",
            isPositive ? "text-green-600" : "text-red-600"
          )}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </span>
        <span className="text-sm text-muted-foreground">{changeLabel}</span>
      </div>
    </div>
  );
}
