import { posts } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-28 bg-white py-24">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-8 lg:flex-row">
          <SectionHead
            align="left"
            eyebrow="Nutrition Insights"
            title="Advice you can use"
            highlight="tonight"
            copy="Practical, myth-free reading from our clinical team — published every week."
            className="max-w-xl"
          />
          <Reveal>
            <a
              href="#insights"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-500 hover:text-brand-600"
            >
              Browse the library
              <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-50 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_40px_70px_-50px_rgba(11,31,20,0.9)]">
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-brand-600">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[12px] text-ink-soft/70">
                    <span className="flex items-center gap-1.5">
                      <Icon.Calendar className="h-3.5 w-3.5" /> {p.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-200" />
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-3 text-[17px] leading-snug font-bold text-ink transition group-hover:text-brand-600">
                    {p.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-brand-600">
                    Read article
                    <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
