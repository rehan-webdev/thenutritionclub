import { useEffect, useState } from "react";
import { clinic, navLinks } from "@/lib/data";
import { Icon } from "@/lib/ui";
import { cn } from "@/utils/cn";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-leaf-400 shadow-[0_10px_24px_-10px_rgba(46,155,75,0.9)]">
        <Icon.Leaf className="h-6 w-6 text-white" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[17px] font-extrabold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          The Nutrition Club
        </span>
        <span
          className={cn(
            "block text-[10.5px] font-semibold tracking-[0.18em] uppercase",
            light ? "text-leaf-200" : "text-brand-500",
          )}
        >
          Dietitian Clinic
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = navLinks.map((l) => l.href.slice(1));
      let current = "#home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = `#${id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* top strip */}
      <div className="hidden bg-ink text-white lg:block">
        <div className="container-x flex h-11 items-center justify-between text-[12.5px]">
          <div className="flex items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <Icon.Pin className="h-4 w-4 text-leaf-400" /> {clinic.address}
            </span>
            <span className="flex items-center gap-2">
              <Icon.Clock className="h-4 w-4 text-leaf-400" /> {clinic.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/80 transition hover:text-leaf-300">
              <Icon.Phone className="h-4 w-4 text-leaf-400" /> {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 text-white/80 transition hover:text-leaf-300">
              <Icon.Mail className="h-4 w-4 text-leaf-400" /> {clinic.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-brand-100/70 bg-white/90 py-2 shadow-[0_10px_30px_-24px_rgba(11,31,20,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-white py-3",
        )}
      >
        <nav className="container-x flex items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                    active === l.href
                      ? "bg-brand-50 text-brand-600"
                      : "text-ink-soft hover:bg-brand-50/70 hover:text-brand-600",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinic.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-3 rounded-full border border-brand-100 py-1.5 pr-5 pl-1.5 md:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Icon.Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold tracking-widest text-ink-soft/70 uppercase">
                  Helpline
                </span>
                <span className="block text-[13px] font-bold text-ink">{clinic.phone}</span>
              </span>
            </a>
            <a
              href="#book"
              className="hidden rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(46,155,75,0.95)] transition hover:-translate-y-0.5 hover:bg-brand-600 sm:inline-flex"
            >
              Book Consultation
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-100 text-ink xl:hidden"
            >
              <Icon.Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-300 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-400",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700"
            >
              <Icon.Close className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-8 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {l.label}
                  <Icon.Arrow className="h-4 w-4 text-brand-400" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-4 text-sm font-semibold text-white"
          >
            Book a Consultation
          </a>

          <div className="mt-auto space-y-3 rounded-3xl bg-cream p-5 text-sm text-ink-soft">
            <p className="flex items-center gap-3">
              <Icon.Phone className="h-4 w-4 text-brand-500" /> {clinic.phone}
            </p>
            <p className="flex items-center gap-3">
              <Icon.Mail className="h-4 w-4 text-brand-500" /> {clinic.email}
            </p>
            <p className="flex items-start gap-3">
              <Icon.Pin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {clinic.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
