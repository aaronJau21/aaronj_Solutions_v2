"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const TitleContact = () => {
  return (
    <div data-aos="fade-down" className="text-center mb-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="w-5 h-5" /> Volver
      </Link>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Solicita tu <span className="text-primary">cotización</span>
      </h1>
      <p className="text-lg text-muted-foreground">
        Llena el formulario y te enviamos una propuesta personalizada
      </p>
    </div>
  );
};
