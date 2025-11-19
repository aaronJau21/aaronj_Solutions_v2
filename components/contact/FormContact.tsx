"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Send } from "lucide-react";

export const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/TU_ID_AQUI", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 7000);
      } else throw new Error();
    } catch {
      alert("Error al enviar. Contáctanos por WhatsApp: +51 987 654 321");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      data-aos="fade-up"
      className="p-8 sm:p-12 shadow-2xl bg-card/95 backdrop-blur border-0"
    >
      {isSuccess && (
        <div
          data-aos="fade-down"
          className="mb-8 p-6 bg-green-50 dark:bg-green-900/30 border border-green-300 rounded-xl flex items-center gap-4 text-green-700 dark:text-green-400"
        >
          <CheckCircle className="w-10 h-10" />
          <div>
            <strong>¡Solicitud enviada!</strong>
            <p>Te enviaremos tu cotización en menos de 24h</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Nombre y Empresa */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Juan Pérez"
              className="mt-2 h-12"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Label htmlFor="company">Empresa / Negocio *</Label>
            <Input
              id="company"
              name="company"
              required
              placeholder="Mi Empresa SAC"
              className="mt-2 h-12"
            />
          </div>
        </div>

        {/* Email y Teléfono */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="300">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="juan@empresa.com"
              className="mt-2 h-12"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+51 987 654 321"
              className="mt-2 h-12"
            />
          </div>
        </div>

        {/* Botón enviar */}
        <div data-aos="fade-up" data-aos-delay="600">
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                {" "}
                <Loader2 className="mr-3 h-6 w-6 animate-spin" /> Enviando
                solicitud...{" "}
              </>
            ) : (
              <>
                {" "}
                <Send className="mr-3 h-6 w-6" /> Solicitar cotización{" "}
              </>
            )}
          </Button>
        </div>
      </form>

      {/* WhatsApp rápido */}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="mt-10 text-center pt-8 border-t"
      >
        <p className="text-muted-foreground mb-4">
          ¿Quieres hablar ahora mismo?
        </p>
        <Button asChild variant="outline" size="lg">
          <a
            href="https://wa.me/51987654321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-green-600 text-2xl">WhatsApp</span> Chatear
            ahora
          </a>
        </Button>
      </div>
    </Card>
  );
};
