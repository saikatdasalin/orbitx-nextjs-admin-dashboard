"use client";

import { X, Sun, Moon, AlignLeft, AlignRight } from "lucide-react";
import {
  useLayoutSettings,
  LayoutType,
  ThemeMode,
  Direction,
  ColorTheme,
} from "@/context/LayoutSettingsContext";

const layouts: { id: LayoutType; name: string; description: string }[] = [
  { id: "quantum", name: "Quantum", description: "Classic sidebar" },
  { id: "qubit", name: "Qubit", description: "Dark compact sidebar" },
  { id: "electron", name: "Electron", description: "Top navigation" },
  { id: "neutron", name: "Neutron", description: "Icon sidebar" },
  { id: "boron", name: "Boron", description: "Keyboard shortcuts" },
  { id: "carbon", name: "Carbon", description: "Workspace selector" },
];

const colors: { id: ColorTheme; name: string; hex: string }[] = [
  { id: "blue", name: "Blue", hex: "#3b82f6" },
  { id: "black", name: "Black", hex: "#111827" },
  { id: "teal", name: "Teal", hex: "#14b8a6" },
  { id: "violet", name: "Violet", hex: "#8b5cf6" },
  { id: "rose", name: "Rose", hex: "#f43f5e" },
  { id: "yellow", name: "Yellow", hex: "#ca9c14ff" },
];

export default function SettingsDrawer() {
  const {
    settings,
    setLayout,
    setTheme,
    setDirection,
    setColor,
    isSettingsOpen,
    closeSettings,
  } = useLayoutSettings();

  if (!isSettingsOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={closeSettings}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-[340px] bg-[var(--card)] shadow-2xl z-50 overflow-y-auto border-l border-[var(--border)] animate-slide-in">
        <div className="p-5 border-b border-[var(--border)] flex items-center justify-between sticky top-0 bg-[var(--card)] z-10">
          <div>
            <h5 className="text-lg font-bold text-[var(--foreground)]">
              Settings
            </h5>
            <p className="text-sm text-[var(--muted-foreground)]">
              Customize your dashboard
            </p>
          </div>
          <button
            onClick={closeSettings}
            className="p-2.5 hover:bg-[var(--secondary)] rounded-xl transition-all duration-200 group"
          >
            <X className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
          </button>
        </div>

        <div className="p-5 space-y-8">
          {/* Appearance */}
          <div>
            <h6 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              Appearance
            </h6>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setTheme("light")}
                className={`p-5 rounded-2xl border-2 transition-all duration-200 ${
                  settings.theme === "light"
                    ? "border-[var(--primary)] bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-10 bg-card border border-border rounded-xl flex items-center justify-center shadow-sm">
                    <Sun className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    Light
                  </span>
                </div>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`p-5 rounded-2xl border-2 transition-all duration-200 ${
                  settings.theme === "dark"
                    ? "border-[var(--primary)] bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-10 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                    <Moon className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    Dark
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Direction */}
          <div>
            <h6 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              Direction
            </h6>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setDirection("ltr")}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                  settings.direction === "ltr"
                    ? "border-[var(--primary)] bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                <AlignLeft className="w-5 h-5 text-[var(--foreground)]" />
                <span className="text-sm font-medium text-[var(--foreground)]">
                  LTR
                </span>
              </button>
              <button
                onClick={() => setDirection("rtl")}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                  settings.direction === "rtl"
                    ? "border-[var(--primary)] bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                <AlignRight className="w-5 h-5 text-[var(--foreground)]" />
                <span className="text-sm font-medium text-[var(--foreground)]">
                  RTL
                </span>
              </button>
            </div>
          </div>

          {/* Layout */}
          <div>
            <h6 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              Layout
            </h6>
            <div className="grid grid-cols-3 gap-3">
              {layouts.map((layout) => (
                <button
                  key={layout.id}
                  onClick={() => setLayout(layout.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                    settings.layout === layout.id
                      ? "border-[var(--primary)] bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                      : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2.5">
                    <LayoutIcon type={layout.id} />
                    <span className="text-xs font-medium text-[var(--foreground)] capitalize">
                      {layout.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h6 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              Colors
            </h6>
            <div className="grid grid-cols-3 gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setColor(color.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                    settings.color === color.id
                      ? "border-[var(--primary)] shadow-lg"
                      : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
                  }`}
                  style={
                    settings.color === color.id
                      ? { boxShadow: `0 4px 14px ${color.hex}40` }
                      : {}
                  }
                >
                  <div className="flex flex-col items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                      style={{
                        backgroundColor: color.hex,
                        boxShadow: `0 4px 14px ${color.hex}40`,
                      }}
                    >
                      {settings.color === color.id && (
                        <svg
                          className="w-5 h-5 text-white drop-shadow"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[var(--foreground)]">
                      {color.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function LayoutIcon({ type }: { type: LayoutType }) {
  const baseClass =
    "w-10 h-7 rounded border border-border overflow-hidden";

  switch (type) {
    case "quantum":
      return (
        <div className={baseClass}>
          <div className="flex h-full">
            <div className="w-3 bg-muted h-full" />
            <div className="flex-1 p-0.5">
              <div className="w-full h-1 bg-muted rounded-sm mb-0.5" />
              <div className="w-full flex-1 bg-secondary" />
            </div>
          </div>
        </div>
      );
    case "qubit":
      return (
        <div className={baseClass}>
          <div className="flex h-full">
            <div className="w-3 bg-gray-800 h-full" />
            <div className="flex-1 p-0.5">
              <div className="w-full h-1 bg-muted rounded-sm mb-0.5" />
              <div className="w-full flex-1 bg-secondary" />
            </div>
          </div>
        </div>
      );
    case "electron":
      return (
        <div className={baseClass}>
          <div className="flex flex-col h-full">
            <div className="h-2 bg-muted w-full flex items-center px-0.5">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-gray-400 rounded-sm" />
                <div className="w-1 h-1 bg-gray-400 rounded-sm" />
                <div className="w-1 h-1 bg-gray-400 rounded-sm" />
              </div>
            </div>
            <div className="flex-1 bg-secondary" />
          </div>
        </div>
      );
    case "neutron":
      return (
        <div className={baseClass}>
          <div className="flex h-full">
            <div className="w-2 bg-muted h-full flex flex-col items-center pt-0.5 gap-0.5">
              <div className="w-1 h-1 bg-gray-400 rounded-sm" />
              <div className="w-1 h-1 bg-gray-400 rounded-sm" />
            </div>
            <div className="w-3 bg-secondary h-full" />
            <div className="flex-1 p-0.5">
              <div className="w-full h-1 bg-muted rounded-sm mb-0.5" />
            </div>
          </div>
        </div>
      );
    case "boron":
      return (
        <div className={baseClass}>
          <div className="flex h-full">
            <div className="w-4 bg-muted h-full p-0.5">
              <div className="w-full h-0.5 bg-gray-400 rounded-sm mb-0.5" />
              <div className="w-full h-0.5 bg-gray-400 rounded-sm mb-0.5" />
              <div className="w-full h-0.5 bg-gray-400 rounded-sm" />
            </div>
            <div className="flex-1 p-0.5">
              <div className="w-full h-1 bg-muted rounded-sm mb-0.5" />
            </div>
          </div>
        </div>
      );
    case "carbon":
      return (
        <div className={baseClass}>
          <div className="flex h-full">
            <div className="w-4 bg-muted h-full p-0.5">
              <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-sm mb-0.5" />
              <div className="w-full h-0.5 bg-gray-400 rounded-sm mb-0.5" />
              <div className="w-full h-0.5 bg-gray-400 rounded-sm" />
            </div>
            <div className="flex-1 p-0.5">
              <div className="w-full h-1 bg-muted rounded-sm mb-0.5" />
            </div>
          </div>
        </div>
      );
    default:
      return <div className={baseClass} />;
  }
}
