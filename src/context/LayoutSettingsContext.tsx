"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LayoutType = "quantum" | "qubit" | "electron" | "neutron" | "boron" | "carbon";
export type ThemeMode = "light" | "dark";
export type Direction = "ltr" | "rtl";
export type ColorTheme = "blue" | "black" | "teal" | "violet" | "rose" | "yellow";

interface LayoutSettings {
  layout: LayoutType;
  theme: ThemeMode;
  direction: Direction;
  color: ColorTheme;
}

interface LayoutSettingsContextType {
  settings: LayoutSettings;
  setLayout: (layout: LayoutType) => void;
  setTheme: (theme: ThemeMode) => void;
  setDirection: (direction: Direction) => void;
  setColor: (color: ColorTheme) => void;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  isHydrated: boolean;
}

const defaultSettings: LayoutSettings = {
  layout: "quantum",
  theme: "light",
  direction: "ltr",
  color: "blue",
};

const LayoutSettingsContext = createContext<LayoutSettingsContextType | undefined>(undefined);

export function LayoutSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<LayoutSettings>(defaultSettings);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load settings from localStorage on mount
  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: sync React state from localStorage after mount for hydration safety */
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("layoutSettings");
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      }
    } catch (e) {
      console.error("Failed to parse saved settings", e);
    }
    setIsHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Save settings to localStorage when they change (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("layoutSettings", JSON.stringify(settings));
    }
  }, [settings, isHydrated]);

  // Apply theme class to document (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(settings.theme);
      document.documentElement.dir = settings.direction;
      
      // Apply color theme
      document.documentElement.setAttribute("data-color", settings.color);
    }
  }, [settings.theme, settings.direction, settings.color, isHydrated]);

  const setLayout = (layout: LayoutType) => {
    setSettings((prev) => ({ ...prev, layout }));
  };

  const setTheme = (theme: ThemeMode) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const setDirection = (direction: Direction) => {
    setSettings((prev) => ({ ...prev, direction }));
  };

  const setColor = (color: ColorTheme) => {
    setSettings((prev) => ({ ...prev, color }));
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  // Always render with the same structure - prevents hydration mismatch
  // The isHydrated flag tells children when localStorage values are available
  return (
    <LayoutSettingsContext.Provider
      value={{
        settings,
        setLayout,
        setTheme,
        setDirection,
        setColor,
        isSettingsOpen,
        openSettings,
        closeSettings,
        isHydrated,
      }}
    >
      {children}
    </LayoutSettingsContext.Provider>
  );
}

export function useLayoutSettings() {
  const context = useContext(LayoutSettingsContext);
  if (context === undefined) {
    throw new Error("useLayoutSettings must be used within a LayoutSettingsProvider");
  }
  return context;
}
