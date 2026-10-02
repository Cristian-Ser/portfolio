"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

const projects = [
  {
    link: "https://cash-well.vercel.app/",
    img: {
      link: "/CashWell-landing.png",
      alt: "CashWell desktop landing page",
    },
    title: "CashWell",
    timePeriod: "2026",
    gitHub: "https://github.com/Elix-lab/finance-app/tree/main",
    description: {
      en: "A personal finance application designed to make tracking income and expenses simple, fast, and intuitive.\nThis project started as an opportunity to deepen my React and Next.js knowledge and gradually evolved into a full-stack application. Along the way, I implemented authentication, transaction management, optimistic updates, database integration, and deployment, gaining hands-on experience across both frontend and backend development.\nIn this project the backend was entirely developed with Next.js Server Actions.",
      es: "Una aplicación de finanzas personales diseñada para registrar ingresos y gastos de forma sencilla, rápida e intuitiva.\nEste proyecto comenzó como una oportunidad para profundizar mis conocimientos de React y Next.js, y gradualmente se convirtió en una aplicación full-stack. Implementé autenticación, gestión de transacciones, actualizaciones optimistas, integración con bases de datos y despliegue, adquiriendo experiencia práctica tanto en frontend como en backend.\nEn este proyecto, el backend se desarrolló por completo con Server Actions de Next.js.",
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Next.js Server Actions",
      "Auth.js",
      "Drizzle ORM",
      "SQL",
      "Supabase",
      "Vercel",
    ],
  },
  {
    link: "https://flashcards-app.vercel.app/",
    img: {
      link: "/FlashMind.png",
      alt: "FlashMind desktop dashboard",
    },
    title: "FlashMind",
    timePeriod: {
      en: "2026-in development",
      es: "2026-en desarrollo",
    },
    gitHub: "https://github.com/Elix-lab/flashcards-app",
    description: {
      en: "A flashcard application designed to make learning and reviewing new concepts simple, organized, and effective.\nThis project was built as an opportunity to strengthen my React fundamentals and learn how to build a complete application without relying on Next.js. I implemented client-side routing with React Router, built the backend with Node.js and Express, and integrated MongoDB with Mongoose for data persistence. Along the way, I worked with CRUD operations, API integration, and form handling, gaining hands-on experience building and connecting a frontend and backend from scratch.",
      es: "Una aplicación de tarjetas didácticas diseñada para aprender y repasar nuevos conceptos de forma sencilla, organizada y eficaz.\nCreé este proyecto para reforzar mis fundamentos de React y aprender a desarrollar una aplicación completa sin depender de Next.js. Implementé navegación del lado del cliente con React Router, desarrollé el backend con Node.js y Express, e integré MongoDB con Mongoose para persistir los datos. También trabajé con operaciones CRUD, integración de API y gestión de formularios, adquiriendo experiencia práctica al crear y conectar un frontend y un backend desde cero.",
    },
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Better Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Vercel",
    ],
  },
];

function Project() {
  const { locale } = useLanguage();

  return (
    <section
      id="project"
      className="relative border-b overflow-hidden scroll-mt-14"
    >
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        {/* Text */}
        <div>
          <span className="text-base font-bold text-gray-500">
            {locale === "en" ? "PROJECTS" : "PROYECTOS"}
          </span>
          <h2 className="text-2xl font-black">
            {locale === "en" ? "Featured projects" : "Proyectos destacados"}
          </h2>
        </div>

        {projects.map((project) => (
          <div key={project.title}>
            {/* Project image */}
            <Link href={project.link} target="_blank">
              <picture>
                <img
                  src={project.img.link}
                  alt={
                    locale === "en"
                      ? project.img.alt
                      : `Captura de pantalla de ${project.title}`
                  }
                  className="border rounded-lg hover:-translate-y-0.5 duration-300"
                />
              </picture>
            </Link>
            {/* Project description */}
            <div className="flex flex-col gap-2 py-4">
              {/* Title */}
              <h3 className="text-xl font-black">
                {project.title}{" "}
                <span className="text-sm">({project.timePeriod[locale]})</span>
              </h3>
              {/* Links */}
              <div className="flex gap-2 items-center">
                <Link
                  href={project.link}
                  target="_blank"
                  className="py-2 px-4 text-xs font-semibold bg-accent text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300"
                >
                  {locale === "en" ? "Go to project" : "Ver proyecto"}
                </Link>
                {/* GitHub link */}
                <Link
                  href={project.gitHub}
                  title={
                    locale === "en"
                      ? "Project repository"
                      : "Repositorio del proyecto"
                  }
                  target="_blank"
                >
                  <FaGithub className="size-5" />
                </Link>
              </div>
              {/* Description */}
              <p className="whitespace-pre-line">
                {project.description[locale]}
              </p>
              <span className="text-sm font-bold">
                {locale === "en" ? "Built with:" : "Desarrollado con:"}
              </span>
              <ul className="flex gap-2 flex-wrap">
                {project.technologies.map((tec) => (
                  <li
                    key={tec}
                    className="text-sm border p-2 rounded-lg bg-accent/10 hover:-translate-y-0.5 duration-300 cursor-default"
                    translate="no"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
