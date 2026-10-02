"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

function Hero() {
  const { locale } = useLanguage();

  const scrollToProject = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b">
      {/* Blured background */}
      <div className="-z-10 hidden absolute dark:block min-h-80 w-3xl top-0 -translate-1/2 left-1/2 -translate-x-1/2 blur-3xl rounded-full bg-accent/20"></div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-10 max-w-3xl mx-auto p-4 py-10 min-h-100">
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-black">Cristian Serrón</h1>
          <p className="text-lg font-semibold">
            {locale === "en"
              ? "(JavaScript Full-Stack Developer)"
              : "(Desarrollador Full-Stack de JavaScript)"}
          </p>
          <p className="text-balance">
            {locale === "en"
              ? "I’m a frontend-focused full-stack developer who builds web applications with React and Next.js. Alongside frontend development, I have hands-on experience building backend functionality with Express and Next.js Server Actions, as well as working with relational and non-relational databases."
              : "Soy un desarrollador full-stack enfocado en frontend y creo aplicaciones web con React y Next.js. Además del desarrollo frontend, tengo experiencia práctica creando funcionalidades backend con Express y Server Actions de Next.js, y trabajando con bases de datos relacionales y no relacionales."}
          </p>
          <p className="text-sm">
            <span className="font-semibold">
              {locale === "en"
                ? "🌎 Languages I speak:"
                : "🌎 Idiomas que hablo:"}
            </span>{" "}
            {locale === "en"
              ? "Spanish (native) & English"
              : "Español (nativo) e inglés"}
          </p>
        </div>
        {/* Buttons-Links */}
        <div className="flex items-center justify-start gap-3">
          {/* Project */}
          <button
            className="px-6 py-3 bg-accent text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300"
            onClick={scrollToProject}
          >
            {locale === "en" ? "View Projects" : "Ver proyectos"}
          </button>
          {/* GitHub */}
          <Link href="https://github.com/Elix-lab" target="_blank">
            <FaGithub className="size-5" />
          </Link>
          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/cristian-ser/"
            target="_blank"
          >
            <FaLinkedin className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
