"use client";

import { useEffect, useState } from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface AreaChartProps {
  data: Array<Record<string, string | number>>;
  dataKeys: Array<{ key: string; color: string; name?: string }>;
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

export default function AreaChart({
  data,
  dataKeys,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
}: AreaChartProps) {
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
    <div>
      <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#f0f0f0"} />}
        <XAxis
          dataKey={xAxisKey}
          axisLine={false}
          tickLine={false}
          tick={{ fill: isDark ? "#9ca3af" : "#6b7280", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: isDark ? "#9ca3af" : "#6b7280", fontSize: 12 }}
          tickFormatter={(value) => {
            if (value >= 1000) return `${value / 1000}K`;
            return value;
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            color: isDark ? "#f3f4f6" : "#000",
          }}
        />
        {showLegend && <Legend />}
        {dataKeys.map((item) => (
          <Area
            key={item.key}
            type="monotone"
            dataKey={item.key}
            name={item.name || item.key}
            stroke={item.color}
            fill={item.color}
            fillOpacity={0.1}
            strokeWidth={2}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
    </div>
  );
}
