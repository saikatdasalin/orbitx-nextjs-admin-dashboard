"use client";

import { useLayoutSettings } from "@/context/LayoutSettingsContext";
import {
  QuantumLayout,
  QubitLayout,
  ElectronLayout,
  NeutronLayout,
  BoronLayout,
  CarbonLayout,
} from "./layouts";
import SettingsDrawer from "../settings/SettingsDrawer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { settings, isHydrated } = useLayoutSettings();

  // During SSR, always use quantum layout to match initial render
  // After hydration, use the stored layout preference
  const layout = isHydrated ? settings.layout : "quantum";

  const renderLayout = () => {
    switch (layout) {
      case "quantum":
        return <QuantumLayout>{children}</QuantumLayout>;
      case "qubit":
        return <QubitLayout>{children}</QubitLayout>;
      case "electron":
        return <ElectronLayout>{children}</ElectronLayout>;
      case "neutron":
        return <NeutronLayout>{children}</NeutronLayout>;
      case "boron":
        return <BoronLayout>{children}</BoronLayout>;
      case "carbon":
        return <CarbonLayout>{children}</CarbonLayout>;
      default:
        return <QuantumLayout>{children}</QuantumLayout>;
    }
  };

  return (
    <>
      {renderLayout()}
      {isHydrated && <SettingsDrawer />}
    </>
  );
}
