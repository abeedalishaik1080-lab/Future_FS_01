import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-slate-800 py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute left-0 top-20 w-[320px] h-[320px] bg-emerald-400/20 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 bottom-10 w-[320px] h-[320px] bg-emerald-300/20 blur-[150px] rounded-full"></div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">

        <h2 className="text-3xl font-bold text-emerald-400">Projects</h2>

        <p className="mt-3 text-slate-300">
          Here are some projects I’ve built to practice development and problem solving.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {projects.map((p) => (
            <div key={p.title} className="relative group">

              {/* Glow behind card */}
              <div className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-2xl"></div>

              <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6 hover:scale-105 transition duration-300">

                <h3 className="text-xl font-semibold text-emerald-400">
                  {p.title}
                </h3>

                <p className="mt-2 text-slate-300 text-sm">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-400/40 bg-slate-950 px-3 py-1 text-xs text-slate-200 hover:bg-emerald-400 hover:text-black transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-300 transition"
                  >
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10 transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}