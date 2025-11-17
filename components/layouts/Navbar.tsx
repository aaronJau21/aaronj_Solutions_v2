'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
  
export const Navbar = () => {
  return (
    <header className="w-full border-b border-[#1a1a1a] bg-[#0a0a0a] text-[#f0f0f0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight text-[#66ccff]"
        >
          <Image
            src="/logo.webp"
            alt="Logo de Aaron Js Solutions"
            width={150}
            height={150}
          />
        </Link>

        {/* Navbar Links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:font-semibold">
                <Link href={"/"}>Incio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="text-[#f0f0f0] hover:bg-[#1a1a1a]"
        >
          <Moon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
  