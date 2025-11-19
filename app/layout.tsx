import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import "aos/dist/aos.css";
import AOSProvider from "@/components/aos/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aaronjsolutions.com"),
  title: {
    default: "AaronJ Solutions - Soluciones Tecnológicas Innovadoras",
    template: "%s | AaronJ Solutions",
  },
  description:
    "AaronJ Solutions ofrece soluciones tecnológicas innovadoras para tu negocio. Desarrollo web, aplicaciones móviles, inteligencia artificial, seguridad informática y más. Transformamos ideas en soluciones digitales confiables y escalables.",
  keywords: [
    "AaronJ Solutions",
    "Soluciones tecnológicas",
    "Desarrollo web",
    "Desarrollo de software",
    "Aplicaciones móviles",
    "Inteligencia artificial",
    "Seguridad informática",
    "Bases de datos",
    "Sistemas web",
    "Consultoría tecnológica",
    "Transformación digital",
  ],
  authors: [{ name: "AaronJ Solutions", url: "https://www.aaronjsolutions.com" }],
  creator: "AaronJ Solutions",
  publisher: "AaronJ Solutions",
  applicationName: "AaronJ Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.aaronjsolutions.com",
    siteName: "AaronJ Solutions",
    title: "AaronJ Solutions - Soluciones Tecnológicas Innovadoras",
    description:
      "Transformamos ideas en soluciones digitales confiables y escalables. Desarrollo web, aplicaciones móviles, inteligencia artificial y más.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "AaronJ Solutions - Soluciones Tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AaronJ Solutions - Soluciones Tecnológicas Innovadoras",
    description:
      "Transformamos ideas en soluciones digitales confiables y escalables.",
    images: ["/logo.webp"],
    creator: "@aaronjsolutions",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.webp",
  },
  verification: {
    // Agregar cuando tengas los códigos de verificación
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
    // yahoo: "tu-codigo-yahoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>{children}</AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
