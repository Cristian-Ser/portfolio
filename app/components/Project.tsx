import Link from "next/link";

function Project() {
  const projectTec = [
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
  ];
  return (
    <section id="skills" className="relative border-b overflow-hidden">
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        {/* Text */}
        <div>
          <span className="text-base font-bold text-gray-500">PROJECT</span>
          <h2 className="text-2xl font-black">Featured project</h2>
        </div>
        <div>
          {/* Project image */}
          <Link href='https://cash-well.vercel.app/' target="_blank">
            <picture>
              <img
                src="/CashWell-landing-desktop.png"
                alt="CashWell desktop landing page"
                className="border rounded-lg hover:-translate-y-0.5 duration-300"
              />
            </picture>
          </Link>
          {/* Project description */}
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-xl font-black">CashWell</h3>
            <p>
              A personal finance application designed to make tracking income
              and expenses simple, fast, and intuitive.
              <br />
              This project started as an opportunity to deepen my React and
              Next.js knowledge and gradually evolved into a full-stack
              application. Along the way, I implemented authentication,
              transaction management, optimistic updates, database integration,
              and deployment, gaining hands-on experience across both frontend
              and backend development.
              <br />
              Built with 'React', 'Next.js', 'TypeScript', 'TanStack Query','
              Next.js Server Actions', 'Auth.js', 'Drizzle ORM', 'SQL',
              'Supabase', and 'Vercel'.
            </p>
            <span className="text-sm font-bold">Built with:</span>
            <ul className="flex gap-2 flex-wrap">
              {projectTec.map((tec) => (
                <li
                  key={tec}
                  className="text-sm border p-2 rounded-lg bg-gray-50 hover:-translate-y-0.5 duration-300 cursor-default"
                >
                  {tec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
