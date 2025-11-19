import { MainServices } from "@/components/services/MainService";
import { Contactanos } from "@/components/shared/Contactanos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre nuestros servicios tecnológicos: desarrollo web personalizado, aplicaciones móviles nativas e híbridas, soluciones de inteligencia artificial, seguridad informática, bases de datos optimizadas y sistemas web escalables. Soluciones a medida para tu negocio.",
  keywords: [
    "AaronJ Solutions",
    "Servicios tecnológicos",
    "Desarrollo web personalizado",
    "Aplicaciones móviles",
    "Desarrollo de apps",
    "Inteligencia artificial",
    "Machine Learning",
    "Seguridad informática",
    "Ciberseguridad",
    "Bases de datos",
    "Sistemas web",
    "Consultoría tecnológica",
  ],
  openGraph: {
    title: "Servicios Tecnológicos | AaronJ Solutions",
    description:
      "Desarrollo web, aplicaciones móviles, inteligencia artificial, seguridad informática y más. Soluciones tecnológicas a medida para tu negocio.",
    url: "https://www.aaronjsolutions.com/services",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Servicios tecnológicos de AaronJ Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Tecnológicos | AaronJ Solutions",
    description:
      "Desarrollo web, aplicaciones móviles, inteligencia artificial y más. Soluciones a medida para tu negocio.",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://www.aaronjsolutions.com/services",
  },
};

export default function Page() {
  return (
    <>
      <MainServices />
      <Contactanos />
    </>
  );
}
