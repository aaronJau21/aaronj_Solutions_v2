"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroImage() {
    return (
      <div className="hero-float relative w-full h-full overflow-hidden rounded-2xl">
        {/* Contenedor principal con entrada blur + flotación */}
        <div
          className="relative w-full h-full"
          style={{
            // 1. Entrada: blur + slide (1s)
            // 2. Luego: flotación infinita (12s)
            animation: `
              blurInRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards,
              floatHorizontal 12s ease-in-out infinite 1s
            `,
          }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/home/hero-3d.png"
              alt="Equipo de desarrollo trabajando"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          </div>
        </div>
  
        {/* Sombras */}
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10 animate-pulse" />
        <div className="absolute -inset-2 bg-accent/5 rounded-2xl blur-xl -z-10" />
      </div>
    );
  }

export const MainHome = () => {
  return (
    <main className="relative flex flex-col lg:flex-row w-full min-h-[85vh] items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Texto con entrada blur + slide */}
      <div className="flex-1 space-y-6 lg:space-y-8 max-w-2xl">
        <div className="space-y-4 animate-blur-in-left">
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight tracking-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Transformamos ideas
            </span>
            <br />
            <span className="text-foreground">en soluciones digitales</span>
            <br />
            <span className="text-primary">confiables y escalables.</span>
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-primary via-accent to-transparent rounded-full" />
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-blur-in-left animation-delay-200">
          Somos un equipo de expertos en tecnología que se dedica a crear
          soluciones digitales para empresas de todos los tamaños.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-blur-in-left animation-delay-300">
          <Button
            size="lg"
            className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Conoce nuestros servicios
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 border-2 hover:bg-accent/10 transition-all duration-300"
          >
            Ver portafolio
          </Button>
        </div>

        {/* Indicadores (opcional: animar también) */}
        <div className="flex flex-wrap gap-6 pt-8 border-t border-border/50 animate-blur-in-left animation-delay-400">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">+15</span>
            <span className="text-sm text-muted-foreground">Proyectos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">100%</span>
            <span className="text-sm text-muted-foreground">Satisfacción</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">24/7</span>
            <span className="text-sm text-muted-foreground">Soporte</span>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] lg:flex-1 relative">
        <HeroImage />
      </div>
    </main>
  );
};