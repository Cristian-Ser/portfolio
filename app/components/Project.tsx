import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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
    <section id="project" className="relative border-b overflow-hidden scroll-mt-14">
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        {/* Text */}
        <div>
          <span className="text-base font-bold text-gray-500">PROJECT</span>
          <h2 className="text-2xl font-black">Featured project</h2>
        </div>
        <div>
          {/* Project image */}
          <Link href="https://cash-well.vercel.app/" target="_blank">
            <picture>
              <img
                src="/CashWell-landing-desktop.png"
                alt="CashWell desktop landing page"
                className="border rounded-lg hover:-translate-y-0.5 duration-300"
              />
            </picture>
          </Link>
          {/* Project description */}
          <div className="flex flex-col gap-2 py-4">
            {/* Title */}
            <h3 className="text-xl font-black">CashWell</h3>

            <div className="flex gap-2 items-center">
              <Link
                href="https://cash-well.vercel.app/"
                target="_blank"
                className="py-2 px-4 text-xs font-semibold bg-accent text-white rounded-lg cursor-pointer hover:-translate-y-0.5 duration-300"
              >
                Go to project
              </Link>
              {/* GitHub link */}
              <Link href="https://github.com/Elix-lab/finance-app/tree/main" title="Project repository" target="_blank">
                <FaGithub className="size-5" />
              </Link>
            </div>
            {/* Description */}
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
            </p>
            <span className="text-sm font-bold">Built with:</span>
            <ul className="flex gap-2 flex-wrap">
              {projectTec.map((tec) => (
                <li
                  key={tec}
                  className="text-sm border p-2 rounded-lg bg-accent/10 hover:-translate-y-0.5 duration-300 cursor-default"
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
