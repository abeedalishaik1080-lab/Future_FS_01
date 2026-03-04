import { useState } from "react";

export default function Contact() {

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwvngnrb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("✅ Message sent successfully!");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch {
      setStatus("⚠️ Network error.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-slate-800 py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute left-10 top-20 w-[350px] h-[350px] bg-emerald-400/20 blur-[160px] rounded-full"></div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">

        <h2 className="text-3xl font-bold text-emerald-400">
          Contact Me
        </h2>

        <p className="mt-3 text-slate-300">
          Want to collaborate or hire me? Send a message.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {/* Contact Details */}
          <div className="relative">

            <div className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-2xl"></div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6">

              <h3 className="text-xl font-semibold text-emerald-400">
                Details
              </h3>

              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>Email: abeedalishaik1080@gmail.com</p>
                <p>GitHub: github.com/yourusername</p>
                <p>LinkedIn: https://www.linkedin.com/in/shaik-abeedali-248260322</p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative"
          >

            <div className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-2xl"></div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-6">

              <label className="text-sm text-slate-300">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-emerald-400"
              />

              <label className="mt-4 block text-sm text-slate-300">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-emerald-400"
              />

              <label className="mt-4 block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-emerald-400"
              />

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-sm text-slate-300">{status}</p>
              )}

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}