"use client";

import { Label } from "@radix-ui/react-label";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

interface IInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<IInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
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
  };

  return (
    <CardContent className="px-8 pb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label className="text-sm text-white/70">Correo electrónico</Label>
          <Input
            required
            type="email"
            placeholder="tu@ejemplo.com"
            className="mt-2 bg-white/6 text-white placeholder:text-white/40 border-white/10"
            {...register("email")}
          />
        </div>

        <div>
          <Label className="text-sm text-white/70">Contraseña</Label>
          <Input
            required
            type="password"
            placeholder="Contraseña"
            className="mt-2 bg-white/6 text-white placeholder:text-white/40 border-white/10"
            {...register("password")}
          />
        </div>

        <div className="flex items-center justify-between">
          <Link
            href="/forgot"
            className="text-sm text-white/60 hover:underline"
          >
            Registrate
          </Link>

          <Link
            href="/forgot"
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
