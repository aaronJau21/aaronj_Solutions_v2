'use client';

import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
// import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
  

interface Ilink {
    label: string;
    href: string;
}

export const Navbar = () => {
  // const { resolvedTheme } = useTheme();
  
  // Usar resolvedTheme para manejar el tema del sistema
  // Si resolvedTheme es undefined (durante SSR), usar logo.webp por defecto
  // const logoSrc = resolvedTheme === 'dark' ? '/logo.webp' : '/logoLigth.jpeg';

  const links: Ilink[] = [
    {
      label: "Inicio",
      href: "/",
    },
    {
        label: "Servicios",
        href: "/services",
    }
  ];

  return (
    <header className="w-full border-b border-white/50 bg-background text-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight text-[#66ccff] hover:scale-105 transition-all duration-300"
        >
          <Image
            src="/logo.webp"
            alt="Logo de Aaron Js Solutions"
            width={130}
            height={130}
          />
        </Link>

        {/* Navbar Links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors",
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

        <ThemeToggle />
      </div>
    </header>
  );
};
  