import { programs } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";

export default function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-28 bg-white py-24">
      <div className="pointer-events-none absolute top-1/3 -left-24 -z-10 h-72 w-72 rounded-full bg-leaf-50 blur-3xl" />
      <div className="container-x">
        <SectionHead
          eyebrow="Our Programs"
          title="Nutrition care for every"
          highlight="body & goal"
          copy="Eight clinically designed programs, each led by a specialist dietitian and adjusted every single week based on your data."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => {
            const Ico = Icon[p.icon];
            return (
              <Reveal key={p.title} delay={(i % 4) * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-50 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_36px_70px_-45px_rgba(46,155,75,1)]">
                  <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-50/80 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-leaf-400 text-white shadow-[0_16px_30px_-16px_rgba(46,155,75,1)]">
                    <Ico className="h-6 w-6" />
                  </span>

                  <h3 className="relative mt-5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="relative mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{p.copy}</p>

                  <ul className="relative mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[13px] text-ink-soft">
                        <Icon.Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex items-center justify-between border-t border-dashed border-brand-100 pt-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-ink-soft/70 uppercase">
                        {p.duration}
                      </p>
                      <p className="text-sm font-extrabold text-brand-600">from {p.from}</p>
                    </div>
                    <a
                      href="#book"
                      aria-label={`Book ${p.title}`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-brand-100 text-brand-600 transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white"
                    >
                      <Icon.Arrow className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink px-8 py-8 text-white sm:flex-row sm:px-12">
            <div className="flex items-center gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-leaf-300">
                <Icon.Chat className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold">Not sure which program fits you?</h3>
                <p className="mt-1 text-sm text-white/70">
                  Take our 2-minute assessment or talk to a dietitian — completely free.
                </p>
              </div>
            </div>
            <a
              href="#book"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-leaf-400 px-7 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-leaf-300"
            >
              Talk to a Dietitian <Icon.Arrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
