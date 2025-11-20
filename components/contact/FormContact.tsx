"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle2Icon, Send } from "lucide-react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useState } from "react";

interface IInputs {
  name: string;
  company: string;
  email: string;
  phone: string;
}

export const FormContact = () => {
  const [success, setsuccess] = useState<boolean>(false);
  const [disabled, setdisabled] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = async (request) => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!data.ok) {
        throw new Error("Failed to submit form");
      }

      setsuccess(true);
      setdisabled(true);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setdisabled(false);
    }
  };

  return (
    <Card
      data-aos="fade-up"
      className="p-8 sm:p-12 shadow-2xl bg-card/95 backdrop-blur border-0"
    >
      {success && (
        <Alert className="bg-green-500/10 border-green-500">
          <CheckCircle2Icon color="green" />
          <AlertTitle>¡Solicitud enviada!</AlertTitle>
          <AlertDescription>
            Te enviaremos tu cotización en menos de 24h
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Nombre y Empresa */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              placeholder="Juan Pérez"
              className={`mt-2 h-12 ${errors.name ? "border-destructive" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "El nombre completo es obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Label htmlFor="company">Empresa / Negocio *</Label>
            <Input
              id="company"
              placeholder="Mi Empresa SAC"
              className={`mt-2 h-12 ${
                errors.company ? "border-destructive" : ""
              }`}
              aria-invalid={errors.company ? "true" : "false"}
              {...register("company", {
                required: "El nombre de la empresa es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre de la empresa debe tener al menos 2 caracteres",
                },
              })}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-destructive">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Email y Teléfono */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="300">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              placeholder="juan@empresa.com"
              className={`mt-2 h-12 ${
                errors.email ? "border-destructive" : ""
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingresa un correo electrónico válido",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+51 987 654 321"
              className={`mt-2 h-12 ${
                errors.phone ? "border-destructive" : ""
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", {
                required: "El teléfono es obligatorio",
                minLength: {
                  value: 9,
                  message: "El teléfono debe tener al menos 9 dígitos",
                },
                pattern: {
                  value: /^[\d\s\+\-\(\)]+$/,
                  message: "Ingresa un número de teléfono válido",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Botón enviar */}
        <div data-aos="fade-up" data-aos-delay="600">
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            disabled={disabled}
          >
            <Send className="mr-3 h-6 w-6" /> Solicitar cotización{" "}
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
