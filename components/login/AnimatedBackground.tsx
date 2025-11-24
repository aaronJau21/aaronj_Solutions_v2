"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pulseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // pre-carga simple (por si)
    const imgs = [
      "/login/login.webp",
      "/login/login2.webp"
    ].map(src => {
      const i = new Image();
      i.src = src;
      return i;
    });

    const ctx = gsap.context(() => {
      // movimiento suave y continuo del overlay
      gsap.to(overlayRef.current, {
        x: 60,
        y: -40,
        rotation: 0.4,
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(overlayRef.current, {
        opacity: 0.78,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // brillo/pulse
      gsap.to(pulseRef.current, {
        x: -160,
        y: -80,
        duration: 22,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      ctx.revert();
      // cleanup imgs (no-op)
    };
  }, []);

  return (
    // usar fixed para asegurarnos que esté debajo pero visible; z-0 para fondo
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
      {/* Imagen base como background-image (cover) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/login/login.webp')" }}
      />

      {/* Overlay movible (usa background-image) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-cover bg-center mix-blend-screen blur-[1px]"
        style={{ backgroundImage: "url('/login/login2.webp')", opacity: 0.8 }}
      />

      {/* Capa de brillo/pulse para profundidad (radial gradient) */}
      <div
        ref={pulseRef}
        className="absolute w-[700px] h-[700px] rounded-full opacity-30 filter blur-[120px]"
        style={{
          top: "-8%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(80,210,255,0.9), rgba(120,70,255,0))",
        }}
      />

      {/* filtro oscuro sutil para contraste del contenido */}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
