"use client";

import { Label } from "@radix-ui/react-label";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, AlertTitle } from "../ui/alert";
import { CheckCircle2Icon } from "lucide-react";

interface IInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
    }
  };

  return (
    <CardContent className="px-8 pb-8">
      {success && (
        <Alert variant="success" className="mb-5">
          <CheckCircle2Icon />
          <AlertTitle>Bienvenido de nuevo</AlertTitle>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive" className="mb-5">
          <AlertTitle>Error al iniciar sesión</AlertTitle>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <Label className="text-sm text-white/70">Correo electrónico</Label>
          <Input
            type="email"
            placeholder="tu@ejemplo.com"
            className="mt-2 bg-white/6 text-white placeholder:text-white/40 border-white/10"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label className="text-sm text-white/70">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            className="mt-2 bg-white/6 text-white placeholder:text-white/40 border-white/10"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.password && (
            <p className="text-xs text-red-400">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link
            href="/auth/register"
            className="text-sm text-white/60 hover:underline"
          >
            Registrate
          </Link>

          <Link
            href="/auth/forgot-password"
            className="text-sm text-white/60 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-linear-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-lg shadow-indigo-500/20"
        >
          {/* {loading ? "Ingresando..." : "Ingresar"} */}
          Ingresar
        </Button>
      </form>
    </CardContent>
  );
};
