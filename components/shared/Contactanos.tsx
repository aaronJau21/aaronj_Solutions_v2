"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  MessageCircle
} from "lucide-react";

export const Contactanos = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título con AOS */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Listo para empezar tu <span className="text-primary">proyecto</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Cuéntanos tu idea y te ayudamos a hacerla realidad en tiempo récord.
          </p>
        </div>

        {/* Botones principales */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Link href="/contacto">
              Ir a página de contacto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <a 
              href="https://wa.me/51987654321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Chatear por WhatsApp
            </a>
          </Button>
        </div>

        {/* Info rápida */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-primary/10 rounded-2xl mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Llámanos</h3>
            <p className="text-muted-foreground">+51 942 631 794</p>
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="500"
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-primary/10 rounded-2xl mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Escríbenos</h3>
            <p className="text-muted-foreground">hola@tudominio.com</p>
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="600"
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-primary/10 rounded-2xl mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Perú</h3>
            <p className="text-muted-foreground">Trabajamos 100% remoto</p>
          </div>
        </div>

        {/* Línea decorativa */}
        <div className="mt-16">
          <div className="h-1 w-32 bg-linear-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};