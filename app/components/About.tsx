"use client";

import { useLanguage } from "./LanguageProvider";

function About() {
  const { locale } = useLanguage();

  return (
    <section
      id="about"
      className="relative border-b overflow-hidden scroll-mt-14"
    >
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        <span className="text-base font-bold text-gray-500">
          {locale === "en" ? "ABOUT" : "SOBRE MÍ"}
        </span>
        <p>
          {locale === "en"
            ? "I enjoy turning ideas into real, functional applications and learning by building. My projects have taken me from focusing mainly on interfaces to understanding how the different parts of an application connect behind the scenes."
            : "Disfruto transformar ideas en aplicaciones reales y funcionales, y aprender mientras las construyo. Mis proyectos me llevaron de enfocarme principalmente en las interfaces a comprender cómo se conectan entre sí las distintas partes de una aplicación."}
          <br />
          {locale === "en"
            ? "I’m particularly interested in understanding how things work under the hood rather than simply making them work. I’m constantly improving my skills through hands-on projects, exploring new technologies, and looking for better ways to build reliable and intuitive software."
            : "Me interesa especialmente entender cómo funcionan las cosas por dentro, no solo hacer que funcionen. Mejoro constantemente mis habilidades mediante proyectos prácticos, explorando nuevas tecnologías y buscando mejores formas de crear software confiable e intuitivo."}
        </p>
      </div>
    </section>
  );
}

export default About;
