import { steps } from "@/lib/data";
import { Button, Icon, Reveal, SectionHead } from "@/lib/ui";

const IMG_MAIN =
  "https://images.pexels.com/photos/15319047/pexels-photo-15319047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000";
const IMG_SUB =
  "https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600";

const pillars = [
  {
    icon: "Flask" as const,
    title: "Diagnose before we prescribe",
    copy: "Every plan starts with blood work, body composition and a full lifestyle audit.",
  },
  {
    icon: "Users" as const,
    title: "One dietitian, start to finish",
    copy: "You keep the same specialist through your journey — no rotating call centre.",
  },
  {
    icon: "Apple" as const,
    title: "Built on your kitchen",
    copy: "Plans use regional, seasonal, home-cooked food your family already eats.",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="relative scroll-mt-28 overflow-hidden bg-cream py-24">
        <div className="pointer-events-none absolute -right-32 -bottom-24 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          {/* visuals */}
          <Reveal className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] rounded-br-[7rem] shadow-[0_40px_80px_-45px_rgba(11,31,20,0.6)]">
                <img
                  src={IMG_MAIN}
                  alt="Dietitian at The Nutrition Club clinic"
                  loading="lazy"
                  className="h-[26rem] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-12 -left-2 hidden w-56 overflow-hidden rounded-[1.75rem] border-[6px] border-cream shadow-xl sm:block">
                <img src={IMG_SUB} alt="Balanced meal bowls" loading="lazy" className="h-44 w-full object-cover" />
              </div>

              <div className="absolute -top-6 -right-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-30px_rgba(11,31,20,0.7)] sm:-right-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon.Award className="h-6 w-6" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-2xl font-extrabold text-ink">14+</p>
                  <p className="text-[12px] text-ink-soft">Years in clinical practice</p>
                </div>
              </div>

              <div className="absolute right-4 -bottom-8 rounded-2xl bg-ink px-5 py-4 text-white shadow-xl">
                <p className="text-[11px] tracking-widest text-leaf-300 uppercase">Members coached</p>
                <p className="font-display text-2xl font-extrabold">12,480+</p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <SectionHead
              align="left"
              eyebrow="Why The Nutrition Club"
              title="Real food, real science,"
              highlight="real people"
              copy="We started in 2011 with a simple frustration: most diet advice ignores biology, budget and biryani. So we built a practice that respects all three."
            />

            <div className="mt-9 space-y-5">
              {pillars.map((p, i) => {
                const Ico = Icon[p.icon];
                return (
                  <Reveal key={p.title} delay={i * 90}>
                    <div className="flex gap-4 rounded-2xl border border-transparent bg-white/70 p-4 transition hover:border-brand-100 hover:bg-white">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                        <Ico className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-ink">{p.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{p.copy}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="#book">
                  Start Your Assessment <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center gap-3 text-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-600 shadow-sm">
                    <Icon.Shield className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-ink">
                    100% money-back
                    <span className="block text-[12.5px] font-normal text-ink-soft">if you see no progress in 90 days</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container-x">
          <SectionHead
            eyebrow="How It Works"
            title="Your first 30 days,"
            highlight="mapped out"
            copy="A clear, clinical path from first hello to habits that hold — no guesswork at any stage."
          />

          <div className="relative mt-16">
            <div className="absolute top-14 right-0 left-0 hidden h-px bg-gradient-to-r from-brand-100 via-brand-300 to-brand-100 lg:block" />
            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.no} delay={i * 110}>
                  <div className="group relative text-center lg:text-left">
                    <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center lg:mx-0">
                      <span className="absolute inset-0 rounded-full bg-brand-50 transition group-hover:scale-105 group-hover:bg-brand-100" />
                      <span className="absolute inset-3 rounded-full border-2 border-dashed border-brand-200" />
                      <span className="font-display relative text-2xl font-extrabold text-brand-600">
                        {s.no}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{s.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
