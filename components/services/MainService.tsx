"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FiGlobe,
  FiSmartphone,
  FiShoppingCart,
  FiFigma,
  FiSearch,
  FiShield,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    icon: FiGlobe,
    title: "Desarrollo Web a Medida",
    description:
      "Sitios web modernos, rápidos y 100% adaptados con Next.js y Tailwind.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiSmartphone,
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas o multiplataforma para iOS y Android con la mejor experiencia.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce & Tiendas Online",
    description:
      "Tiendas online potentes con Shopify, WooCommerce o soluciones a medida.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FiFigma,
    title: "Diseño UI/UX",
    description:
      "Diseños intuitivos y atractivos que convierten visitantes en clientes.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FiSearch,
    title: "Optimización SEO",
    description:
      "Posicionamiento real en Google para atraer clientes cualificados.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: FiShield,
    title: "Mantenimiento & Soporte 24/7",
    description:
      "Seguridad, actualizaciones y soporte continuo. Tú solo crece.",
    color: "from-rose-500 to-pink-500",
  },
];

export const MainServices = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background/95">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Título */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Soluciones digitales completas diseñadas para llevar tu negocio al
            siguiente nivel.
          </p>
        </div>

        {/* Grid de tarjetas con AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = 100 + index * 150; // 100, 250, 400...

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Card className="group relative bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-10`}
                    />
                  </div>

                  <div className="relative p-8 lg:p-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <span>Saber más</span>
                      <FiArrowRight className="w-5 h-5" />
                    </div> */}
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-white/20 to-transparent rounded-full blur-3xl translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700 pointer-events-none" />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
