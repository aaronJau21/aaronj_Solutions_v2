'use client';

import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { useTheme } from "next-themes";
  

interface Ilink {
    label: string;
    href: string;
}

export const Navbar = () => {
  const { resolvedTheme } = useTheme();
  
  // Usar resolvedTheme para manejar el tema del sistema
  // Si resolvedTheme es undefined (durante SSR), usar logo.webp por defecto
  const logoSrc = resolvedTheme === 'dark' ? '/logo.webp' : '/logoLigth.jpeg';

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
    <header className="w-full border-b border-border bg-background text-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight text-[#66ccff] hover:scale-105 transition-all duration-300"
        >
          <Image
            src={logoSrc}
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
                <NavigationMenuLink
                  key={link.href}
                  className="hover:font-semibold"
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />
      </div>
    </header>
  );
};
  