import { MainHome } from "@/components/home/MainHome";
import { ShowServicesHome } from "@/components/home/ShowServicesHome";
import { Contactanos } from "@/components/shared/Contactanos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AaronJ Solutions",
  description:
    "AaronJ Solutions - Soluciones en tecnología para tu negocio de manera eficiente, rentable y a tu medida.",
  keywords: [
    "AaronJ Solutions",
    "Soluciones en tecnología",
    "Soluciones en desarrollo",
    "Soluciones en IA",
    "Soluciones en seguridad",
    "Soluciones en bases de datos",
    "Sistemas Webs"
  ],
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
