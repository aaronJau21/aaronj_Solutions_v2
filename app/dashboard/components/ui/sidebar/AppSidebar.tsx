"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSideStore } from "@/store";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface ISidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const AppSidebar = () => {
  const toggleSidebar = useSideStore((state) => state.toggleSidebar);

  const sidebarItems: ISidebarItem[] = [
    {
      label: "Inicio",
      href: "/dashboard",
      icon: <FaHome />,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Button className="rounded-full bg-primary py-1 px-3 cursor-pointer">
            <p className="text-white font-bold text-sm">A</p>
          </Button>

          <SidebarTrigger onClick={toggleSidebar} />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton>
                  <Link
                    href={item.href}
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
};
