'use client';

import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
  
export const Navbar = () => {
  return (
    <header className="w-full border-b border-[#1a1a1a] bg-[#0a0a0a] text-[#f0f0f0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight text-[#66ccff] hover:scale-105 transition-all duration-300"
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

        <ThemeToggle />
      </div>
    </header>
  );
};
  