export default function About() {
  return (
    <section id="about" className="relative border-t border-slate-800 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-20 top-20 w-[320px] h-[320px] bg-emerald-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute right-0 bottom-10 w-[320px] h-[320px] bg-emerald-300/20 blur-[140px] rounded-full"></div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">

        <h2 className="text-3xl font-bold text-emerald-400">About Me</h2>

        <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl">
          I’m a B.Tech Computer Science student passionate about building
          real-world technology solutions. My interests include Data
          Analytics, Data Science, and modern Web Development using React.
          I enjoy solving complex problems and building projects that
          demonstrate strong software engineering fundamentals.
        </p>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-emerald-400/20 blur-[90px] rounded-2xl"></div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-emerald-400">
                What I’m good at
              </h3>
              <p className="mt-2 text-slate-300 text-sm">
                Building responsive UI, React applications, clean component
                structure, and writing clear project documentation.
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="relative group">

            <div className="absolute inset-0 bg-emerald-400/20 blur-[90px] rounded-2xl"></div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-emerald-400">
                Currently Learning
              </h3>
              <p className="mt-2 text-slate-300 text-sm">
                Backend development, APIs, deployment workflows, and building
                scalable full-stack applications.
              </p>
            </div>

          </div>

          {/* Card 3 */}
          <div className="relative group">

            <div className="absolute inset-0 bg-emerald-400/20 blur-[90px] rounded-2xl"></div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-emerald-400">
                Career Goal
              </h3>
              <p className="mt-2 text-slate-300 text-sm">
                Become a strong full-stack developer and data analyst by
                building impactful projects and contributing to open source.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}