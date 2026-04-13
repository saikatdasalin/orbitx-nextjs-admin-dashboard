"use client";

import { useEffect, useState } from "react";

interface ClientOnlyTextProps {
  value: string | number;
  format?: "number" | "currency";
  currencySymbol?: string;
}

export default function ClientOnlyText({
  value,
  format = "number",
  currencySymbol = "$",
}: ClientOnlyTextProps) {
  const [mounted, setMounted] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: sync React state after mount for hydration safety */
  useEffect(() => {
    setMounted(true);
    let formatted = "";
    
    if (format === "currency" && typeof value === "number") {
      formatted = `${currencySymbol}${Math.abs(value).toLocaleString()}`;
    } else if (format === "number" && typeof value === "number") {
      formatted = value.toLocaleString();
    } else {
      formatted = String(value);
    }
    
    setDisplayValue(formatted);
  }, [value, format, currencySymbol]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!mounted) {
    // Return a placeholder with the same height to prevent layout shift
    return <span>{currencySymbol}{value}</span>;
  }

  return <span>{displayValue}</span>;
}
