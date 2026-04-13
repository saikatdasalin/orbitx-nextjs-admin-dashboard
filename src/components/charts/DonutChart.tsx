"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface DonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  centerLabel?: string;
  centerValue?: string;
}

export default function DonutChart({
  data,
  height = 250,
  innerRadius = 60,
  outerRadius = 80,
  showLegend = true,
  centerLabel,
  centerValue,
}: DonutChartProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: sync React state from DOM after mount for hydration safety */
  useEffect(() => {
    setIsMounted(true);
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!isMounted) return <div style={{ width: '100%', height: `${height}px` }} />;

  return (
    <div className="relative">
      <div>
        <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1f2937" : "#fff",
              border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              color: isDark ? "#f3f4f6" : "#000",
            }}
          />
          {showLegend && (
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ color: isDark ? "#9ca3af" : "#6b7280" }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
      </div>
      {centerLabel && centerValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" suppressHydrationWarning>
          <span className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-foreground'}`}>{centerValue}</span>
          <span className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-muted-foreground'}`}>{centerLabel}</span>
        </div>
      )}
    </div>
  );
}
