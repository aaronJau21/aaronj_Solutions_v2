"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface Ilink {
  label: string;
  href: string;
}

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: Ilink[] = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Servicios",
      href: "/services",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ];

  return (
    <header className="w-full border-b border-white/50 bg-background text-foreground shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight text-[#66ccff] hover:scale-105 transition-all duration-300 shrink-0"
        >
          <Image
            src="/logo.webp"
            alt="Logo de Aaron Js Solutions"
            width={130}
            height={130}
            className="h-auto w-auto max-w-[100px] sm:max-w-[110px] md:max-w-[130px]"
            priority
          />
        </Link>

        {/* Desktop Navbar Links */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 lg:px-4 py-2 text-sm lg:text-base transition-colors",
                    "text-foreground/70 hover:text-foreground",

                    /* Línea futurista dinámica basada en el color primary */
                    "after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2",
                    "after:h-[2px] after:w-0 after:bg-primary after:rounded-full",
                    "after:transition-all after:duration-300 hover:after:w-full",

                    /* Estado activo más visible */
                    "data-[active=true]:text-foreground",
                    "data-[active=true]:after:w-full data-[active=true]:after:bg-primary",

                    /* Focus ring usando tu sistema de ring */
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                  "text-foreground/70 hover:text-foreground hover:bg-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
