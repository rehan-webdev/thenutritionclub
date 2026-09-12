import { useEffect, useState, type FormEvent } from "react";
import { clinic, navLinks, programs } from "@/lib/data";
import { Icon, Reveal } from "@/lib/ui";
import { cn } from "@/utils/cn";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-brand-600 via-brand-500 to-leaf-500 px-8 py-12 sm:px-14">
        <div className="pointer-events-none absolute -top-24 -right-10 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-leaf-300/25 blur-2xl" />
        <svg className="pointer-events-none absolute top-6 right-10 h-24 w-24 text-white/15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        </svg>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Get one honest nutrition tip <br className="hidden sm:block" /> in your inbox each week.
            </h2>
            <p className="mt-3 max-w-lg text-[14.5px] text-white/80">
              Recipes, myth-busting and clinic updates from our dietitians. No spam, no
              supplement sales — unsubscribe in one click.
            </p>
          </div>

          <form onSubmit={submit} className="w-full">
            <div className="flex flex-col gap-3 rounded-3xl bg-white/12 p-3 backdrop-blur sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-2xl bg-white px-5 py-4 text-[14px] text-ink outline-none placeholder:text-ink-soft/50"
              />
              <button
                type="submit"
                className="shrink-0 rounded-2xl bg-ink px-7 py-4 text-sm font-bold text-white transition hover:bg-ink/85"
              >
                {sent ? "Subscribed ✓" : "Subscribe"}
              </button>
            </div>
            <p className="mt-3 pl-1 text-[12px] text-white/70">
              Joined by 24,000+ readers · Every Tuesday morning
            </p>
          </form>
        </div>
      </div>
    </Reveal>
  );
}

const socials = ["Instagram", "YouTube", "LinkedIn", "X"];

export default function Footer() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-cream pb-0">
        <div className="container-x pb-24">
          <Newsletter />
        </div>
      </div>

      <footer className="relative overflow-hidden bg-ink pt-20 pb-8 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-leaf-400">
                  <Icon.Leaf className="h-6 w-6 text-white" />
                </span>
                <span className="leading-tight">
                  <span className="font-display block text-[17px] font-extrabold">The Nutrition Club</span>
                  <span className="block text-[10.5px] font-semibold tracking-[0.18em] text-leaf-300 uppercase">
                    Dietitian Clinic
                  </span>
                </span>
              </div>
              <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-white/60">
                A clinical nutrition practice in Mumbai helping people manage weight,
                metabolic disease and gut health with evidence-based, culturally familiar food.
              </p>

              <div className="mt-6 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#home"
                    aria-label={s}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/8 text-[11px] font-bold text-white/70 transition hover:bg-brand-500 hover:text-white"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Explore</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-white/60">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition hover:text-leaf-300">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#book" className="transition hover:text-leaf-300">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Programs</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-white/60">
                {programs.slice(0, 6).map((p) => (
                  <li key={p.title}>
                    <a href="#programs" className="transition hover:text-leaf-300">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-[13.5px] text-white/60">
                <li className="flex gap-3">
                  <Icon.Pin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {clinic.address}
                </li>
                <li className="flex gap-3">
                  <Icon.Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {clinic.phone}
                </li>
                <li className="flex gap-3">
                  <Icon.Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {clinic.email}
                </li>
                <li className="flex gap-3">
                  <Icon.Clock className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" /> {clinic.hours}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[12.5px] text-white/45 sm:flex-row">
            <p>© {new Date().getFullYear()} The Nutrition Club. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#home" className="transition hover:text-leaf-300">Privacy Policy</a>
              <a href="#home" className="transition hover:text-leaf-300">Terms of Service</a>
              <a href="#home" className="transition hover:text-leaf-300">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* floating actions */}
      <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
        <a
          href="#book"
          className="group grid h-13 w-13 place-items-center rounded-full bg-brand-500 text-white shadow-[0_18px_36px_-14px_rgba(46,155,75,1)] transition hover:scale-105 hover:bg-brand-600"
          aria-label="Book appointment"
        >
          <Icon.Calendar className="h-5 w-5" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition-all duration-300 hover:bg-brand-600",
            top ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
          )}
        >
          <Icon.Arrow className="h-4 w-4 -rotate-90" />
        </button>
      </div>
    </>
  );
}
