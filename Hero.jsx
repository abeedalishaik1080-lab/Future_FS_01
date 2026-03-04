export default function Hero() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Python",
    "Java",
    "C++",
    "DSA",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-4 py-24 overflow-hidden"
    >
      {/* Mint Glow Background */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-emerald-400/30 blur-[160px] rounded-full"></div>
      <div className="absolute top-32 -right-32 w-[350px] h-[350px] bg-teal-400/30 blur-[160px] rounded-full"></div>

      <div className="grid gap-14 md:grid-cols-2 md:items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-emerald-400 font-medium tracking-wide">
            Full Stack Developer • Data Analytics Enthusiast
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m <span className="text-emerald-400">Abhi</span>. <br />
            I build modern & scalable web apps.
          </h1>

          <p className="mt-6 text-slate-300 leading-relaxed">
            I’m a B.Tech CSE student passionate about building real-world
            technology solutions. My focus includes Data Analytics, Data
            Science, Java, Python, C++, Data Structures & Algorithms, and
            modern web development using React.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-black hover:bg-emerald-300 hover:scale-105 transition duration-300 shadow-lg shadow-emerald-400/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-emerald-400 px-6 py-3 font-semibold text-emerald-300 hover:bg-emerald-400/10 hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-slate-400">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* TECH STACK CARD */}
        <div className="relative flex justify-center">

          {/* Glow behind card */}
          <div className="absolute w-[280px] h-[280px] bg-emerald-400/30 blur-[140px] rounded-full"></div>

          <div className="relative rounded-3xl border border-emerald-400/40 bg-slate-900/70 backdrop-blur-xl p-8 shadow-xl hover:shadow-emerald-400/20 transition duration-500">

            <h2 className="text-xl font-semibold text-emerald-400">
              Tech Stack
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/40 bg-slate-950 px-4 py-1 text-sm text-slate-200 hover:bg-emerald-400 hover:text-black hover:shadow-md hover:shadow-emerald-400/40 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950/70 p-5 border border-slate-800">
              <p className="text-slate-300 text-sm leading-relaxed">
                Current goal: Build strong real-world projects, deploy them,
                contribute to open source, and grow as a full-stack developer.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}