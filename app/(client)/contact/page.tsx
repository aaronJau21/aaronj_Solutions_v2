import { FormContact } from "@/components/contact/FormContact";
import { TitleContact } from "@/components/contact/TitleContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para transformar tu negocio con soluciones tecnológicas innovadoras. Estamos disponibles 24/7 para ayudarte. Solicita una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.",
  keywords: [
    "AaronJ Solutions contacto",
    "Consultoría tecnológica",
    "Soporte técnico",
    "Solicitar presupuesto",
    "Contacto desarrollo web",
    "Consultoría IT",
  ],
  openGraph: {
    title: "Contacto | AaronJ Solutions",
    description:
      "Contáctanos para transformar tu negocio con soluciones tecnológicas innovadoras. Consulta gratuita disponible.",
    url: "https://www.aaronjsolutions.com/contact",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Contacta con AaronJ Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | AaronJ Solutions",
    description:
      "Contáctanos para transformar tu negocio con soluciones tecnológicas innovadoras.",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://www.aaronjsolutions.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/30 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <TitleContact />

        {/* Formulario */}
        <FormContact />
      </div>
    </div>
  );
}
