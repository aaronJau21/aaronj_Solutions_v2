"use client";

import React from "react";
import { FaBrain, FaCode, FaHtml5, FaMobile } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  aos: string;
  delay: number;
}

export const ShowServicesHome = () => {
  const services: Service[] = [
    {
      name: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y optimizados para SEO.",
      icon: <FaHtml5 className="w-10 h-10" />,
      color: "text-orange-500",
      aos: "fade-up",
      delay: 0,
    },
    {
      name: "Desarrollo Mobile",
      description: "Apps nativas y híbridas para iOS y Android.",
      icon: <FaMobile className="w-10 h-10" />,
      color: "text-blue-500",
      aos: "fade-up",
      delay: 150,
    },
    {
      name: "Desarrollo de Software",
      description: "Soluciones a medida para tu negocio.",
      icon: <FaCode className="w-10 h-10" />,
      color: "text-green-500",
      aos: "fade-up",
      delay: 300,
    },
    {
      name: "Inteligencia Artificial",
      description: "Automatización, chatbots y modelos predictivos.",
      icon: <FaBrain className="w-10 h-10" />,
      color: "text-purple-500",
      aos: "fade-up",
      delay: 450,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Título con AOS */}
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-once="true"
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel.
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards con AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              data-aos={service.aos}
              data-aos-delay={service.delay}
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Card
                className="h-full group hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80"
                role="article"
                aria-labelledby={`service-${service.name}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`
                      inline-flex p-4 rounded-2xl bg-primary/5 
                      group-hover:bg-primary/10 group-hover:scale-110 
                      transition-all duration-300 mb-4
                      ${service.color}
                    `}
                  >
                    {service.icon}
                  </div>
                  <CardTitle id={`service-${service.name}`} className="text-xl font-semibold">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Botón opcional "Explorar todos" */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-once="true"
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explorar todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};