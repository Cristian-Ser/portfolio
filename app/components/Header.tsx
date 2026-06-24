"use client";

function Header() {
  const handleScroll = (id: string) => {
    return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="z-100 sticky top-0 bg-white/80 backdrop-blur-3xl border-b">
      <div className="grid grid-col-3 max-w-3xl mx-auto p-4 items-center">
        {/* logo */}
        <button
          className="col-start-1 text-left font-black cursor-pointer"
          onClick={scrollTop}
        >
          CS
        </button>
        {/* Nav */}
        <nav>
          <ul className="col-start-2 gap-2 flex justify-center">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("skills")}
              >
                Skills
              </button>
            </li>
            {/* Project */}
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("project")}
              >
                Project
              </button>
            </li>
            {/* About */}
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("about")}
              >
                About
              </button>
            </li>
          </ul>
        </nav>
        {/* get in touch */}
        <button className="col-start-3 justify-self-end py-2 px-3 bg-black text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300 text-sm font-semibold" onClick={() => handleScroll('contact')}>
          Get in touch
        </button>
      </div>
    </header>
  );
}

export default Header;
