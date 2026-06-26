"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const scrollToProject = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b">
      {/* Blured background */}
      <div className="-z-10 absolute min-h-80 w-3xl top-0 -translate-1/2 left-1/2 -translate-x-1/2 blur-3xl rounded-full  bg-accent/20"></div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-10 max-w-3xl mx-auto p-4 py-10 min-h-100">
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-black">Cristian Serrón</h1>
          <p className="text-xl font-bold">(Next.js/React)</p>
          <p className="text-balance">
            I build web applications with React and Next.js, focusing on user
            experience while expanding my knowledge of backend development and
            modern web technologies.
          </p>
        </div>
        {/* Buttons-Links */}
        <div className="flex items-center justify-start gap-3">
          {/* Project */}
          <button
            className="px-6 py-3 bg-accent text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300"
            onClick={scrollToProject}
          >
            View Project
          </button>
          {/* GitHub */}
          <Link href="https://github.com/Elix-lab" target="_blank">
            <FaGithub className="size-5" />
          </Link>
          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/cristian-serr%C3%B3n/"
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
