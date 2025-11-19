import { MainHome } from "@/components/home/MainHome";
import { ShowServicesHome } from "@/components/home/ShowServicesHome";
import { Contactanos } from "@/components/shared/Contactanos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Transformamos ideas en soluciones digitales confiables y escalables. Somos expertos en desarrollo web, aplicaciones móviles, inteligencia artificial y seguridad informática. Más de 15 proyectos exitosos con 100% de satisfacción.",
  keywords: [
    "AaronJ Solutions",
    "Soluciones tecnológicas",
    "Desarrollo web",
    "Aplicaciones móviles",
    "Inteligencia artificial",
    "Seguridad informática",
    "Bases de datos",
    "Sistemas web",
    "Transformación digital",
    "Consultoría tecnológica",
  ],
  openGraph: {
    title: "AaronJ Solutions - Transformamos ideas en soluciones digitales",
    description:
      "Somos un equipo de expertos en tecnología que se dedica a crear soluciones digitales para empresas de todos los tamaños.",
    url: "https://www.aaronjsolutions.com",
    images: [
      {
        url: "/home/hero-3d.png",
        width: 1200,
        height: 630,
        alt: "Equipo de desarrollo trabajando en soluciones tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AaronJ Solutions - Transformamos ideas en soluciones digitales",
    description:
      "Somos un equipo de expertos en tecnología que se dedica a crear soluciones digitales para empresas de todos los tamaños.",
    images: ["/home/hero-3d.png"],
  },
  alternates: {
    canonical: "https://www.aaronjsolutions.com",
  },
};

export default function Home() {
  return (
    <>
      <MainHome />
      <ShowServicesHome />
      <Contactanos />
    </>
  );
}
