"use client";

import { Label } from "@radix-ui/react-label";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { User, Building2, Phone, Mail, Lock } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface IInputs {
  name: string;
  company: string;
  phone: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<IInputs>({
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const res = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(res.message)
          ? res.message.join(", ")
          : res.message || "Error al registrar usuario";
        setError(errorMessage);
        return;
      }

      console.log(res);
      reset();
      setError(null);
      setLoading(false);
      // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
    } catch (e) {
      setError("Error de conexión. Por favor, intenta nuevamente.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <CardContent className="px-8 pt-6 pb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Mensaje de error */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}
        {/* Nombre completo y Compañia */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Nombre completo */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-white/80 flex items-center gap-2">
              <User className="w-4 h-4 text-cyan-400" />
              Nombre completo
            </Label>
            <Input
              required
              type="text"
              placeholder="Juan Pérez"
              className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/40 
                       focus:border-cyan-400/60 focus:bg-white/8 
                       transition-all duration-200 rounded-xl"
              {...register("name")}
            />
          </div>

          {/* Compañía */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              Compañía
            </Label>
            <Input
              required
              type="text"
              placeholder="Mi Empresa SAC"
              className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/40 
                       focus:border-cyan-400/60 focus:bg-white/8 
                       transition-all duration-200 rounded-xl"
              {...register("company")}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Teléfono */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              Teléfono
            </Label>
            <Input
              required
              type="tel"
              placeholder="+51 987 654 321"
              className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/40 
                       focus:border-cyan-400/60 focus:bg-white/8 
                       transition-all duration-200 rounded-xl"
              {...register("phone")}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              Correo electrónico
            </Label>
            <Input
              required
              type="email"
              placeholder="tu@ejemplo.com"
              className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/40 
                       focus:border-cyan-400/60 focus:bg-white/8 
                       transition-all duration-200 rounded-xl"
              {...register("email")}
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-white/80 flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" />
            Contraseña
          </Label>
          <Input
            required
            type="password"
            placeholder="••••••••"
            className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/40 
                       focus:border-cyan-400/60 focus:bg-white/8 
                       transition-all duration-200 rounded-xl"
            {...register("password")}
          />
        </div>

        {/* Enlaces */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <Link
            href="/auth/login"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/auth/forgot-password"
            className="text-white/60 hover:text-white transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* Botón principal */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 mt-8 bg-linear-to-r from-cyan-500 to-indigo-600 
                     hover:from-cyan-400 hover:to-indigo-500 
                     text-white font-semibold text-base
                     shadow-xl shadow-cyan-500/20
                     transition-all duration-300 
                     hover:shadow-2xl hover:shadow-cyan-500/30
                     rounded-xl
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
      </form>
    </CardContent>
  );
};
