"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSideStore } from "@/store";

export const Navbar = () => {
  const toggleSidebar = useSideStore((state) => state.toggleSidebar);
  const showSidebar = useSideStore((state) => state.showSidebar);

  return (
    <div className="">
      {!showSidebar && <SidebarTrigger onClick={toggleSidebar} />}
      Navbar
    </div>
  );
};
