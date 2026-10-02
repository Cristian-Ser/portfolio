"use client";

import { useLanguage } from "./LanguageProvider";

function Header() {
  const { locale, toggleLocale } = useLanguage();

  const handleScroll = (id: string) => {
    return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="z-100 sticky top-0 bg-background/80 backdrop-blur-3xl border-b">
      <div className="grid grid-cols-3 max-w-3xl mx-auto p-4 items-center">
        {/* logo */}
        <button
          className="col-start-1 text-left font-black cursor-pointer"
          onClick={scrollTop}
        >
          CS
        </button>
        {/* Nav */}
        <nav className="hidden sm:block">
          <ul className="col-start-2 gap-2 flex justify-center items-center text-sm font-semibold text-gray-400 *:hover:text-gray-600 dark:*:hover:text-white/80 *:hover:duration-300">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("skills")}
              >
                {locale === "en" ? "Skills" : "Habilidades"}
              </button>
            </li>
            {/* Project */}
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("project")}
              >
                {locale === "en" ? "Project" : "Proyectos"}
              </button>
            </li>
            {/* About */}
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("about")}
              >
                {locale === "en" ? "About" : "Sobre mí"}
              </button>
            </li>
          </ul>
        </nav>
        <div className="col-start-3 justify-self-end flex items-center gap-2">
          <button
            className="py-2 px-3 border rounded-lg cursor-pointer text-sm font-semibold hover:-translate-y-0.5 duration-300"
            onClick={toggleLocale}
            aria-label={
              locale === "en" ? "Cambiar a español" : "Switch to English"
            }
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            className="py-2 px-3 bg-accent text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300 text-sm font-semibold"
            onClick={() => handleScroll("contact")}
          >
            {locale === "en" ? "Get in touch" : "Contactarme"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
