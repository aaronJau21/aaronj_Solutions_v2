import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedBackground from "@/components/login/AnimatedBackground";
import { LoginForm } from "@/components/login/LoginForm";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-900">
      {/* Fondo animado usando tus 2 imágenes */}
      <AnimatedBackground />

      {/* Contenedor del login */}
      <div className="relative z-20 w-full max-w-md px-6">
        <Card className="bg-white/6 border border-white/10 backdrop-blur-lg shadow-[0_10px_40px_rgba(2,6,23,0.6)] rounded-2xl">
          <CardHeader className="px-8 pt-8">
            <CardTitle className="text-center text-2xl md:text-3xl text-white font-semibold tracking-tight">
              <div className="flex items-center justify-center">
                <Image
                  src={"/logo.webp"}
                  alt="Logo de AaronJ Solutions"
                  width={250}
                  height={250}
                />
              </div>
            </CardTitle>
            <p className="mt-2 text-center text-sm text-white/60">
              Accede a tu cuenta de forma segura
            </p>
          </CardHeader>

          <LoginForm />
        </Card>
        <p className="mt-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Tu Empresa
        </p>
      </div>
    </div>
  );
}
