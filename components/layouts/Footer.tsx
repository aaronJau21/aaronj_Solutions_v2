"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-white/50">
      {/* Animación de entrada desde abajo */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-anchor-placement="bottom-bottom"
        className="px-4 py-8 sm:py-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © Agencia AaronJ Solutions {new Date().getFullYear()}. Todos los derechos reservados.
          </div>

          {/* Redes sociales con hover bonito */}
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground hidden sm:block">
              Síguenos en:
            </p>
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/aaro.njsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aaronj-solutions-109351397/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea decorativa superior (opcional pero elegante) */}
        {/* <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" /> */}
      </div>
    </footer>
  );
};