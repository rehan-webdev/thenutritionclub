import { useState } from "react";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

type Meal = { time: string; name: string; items: string; kcal: number };
type Plan = { key: string; label: string; note: string; meals: Meal[] };

const PLANS: Plan[] = [
  {
    key: "loss",
    label: "Fat loss",
    note: "High-protein, high-fibre · ~1,500 kcal",
    meals: [
      { time: "7:30 AM", name: "Breakfast", items: "2-egg omelette + wholegrain toast, yoghurt, green tea", kcal: 340 },
      { time: "11:00 AM", name: "Mid-morning", items: "Guava + 6 soaked almonds", kcal: 150 },
      { time: "1:30 PM", name: "Lunch", items: "2 chapati, chana daal, cucumber-carrot salad, raita", kcal: 480 },
      { time: "5:00 PM", name: "Snack", items: "Roasted chickpeas + doodh patti (no sugar)", kcal: 180 },
      { time: "8:00 PM", name: "Dinner", items: "Grilled chicken tikka, sautéed vegetables, clear soup", kcal: 380 },
    ],
  },
  {
    key: "pcos",
    label: "PCOS",
    note: "Low-GI, anti-inflammatory · ~1,650 kcal",
    meals: [
      { time: "8:00 AM", name: "Breakfast", items: "Vegetable oats upma + flaxseed, cinnamon water", kcal: 360 },
      { time: "11:00 AM", name: "Mid-morning", items: "Handful of walnuts + 1 orange", kcal: 190 },
      { time: "1:30 PM", name: "Lunch", items: "Millet khichdi, saag, raita, salad", kcal: 520 },
      { time: "5:00 PM", name: "Snack", items: "Sprout salad + spearmint tea", kcal: 170 },
      { time: "8:00 PM", name: "Dinner", items: "Grilled fish or tofu, stir-fried broccoli, 1 chapati", kcal: 410 },
    ],
  },
  {
    key: "diabetes",
    label: "Diabetes",
    note: "Carb-timed, high fibre · ~1,700 kcal",
    meals: [
      { time: "7:30 AM", name: "Breakfast", items: "2-egg omelette, low-fat yoghurt, lemon water", kcal: 380 },
      { time: "11:00 AM", name: "Mid-morning", items: "Apple with peanut butter (1 tsp)", kcal: 180 },
      { time: "1:30 PM", name: "Lunch", items: "2 multigrain chapati, daal, mixed sabzi, raita", kcal: 540 },
      { time: "5:00 PM", name: "Snack", items: "Boiled corn + unsweetened tea", kcal: 190 },
      { time: "7:30 PM", name: "Dinner", items: "Vegetable barley, grilled chicken/soy chunks, salad", kcal: 420 },
    ],
  },
  {
    key: "sport",
    label: "Athlete",
    note: "Performance fuelling · ~2,600 kcal",
    meals: [
      { time: "6:00 AM", name: "Pre-workout", items: "Banana + black coffee + 5 dates", kcal: 320 },
      { time: "9:00 AM", name: "Breakfast", items: "4-egg omelette, 3 toast, avocado, milk", kcal: 720 },
      { time: "1:00 PM", name: "Lunch", items: "Rice, chicken karahi / chana daal, salad, raita", kcal: 780 },
      { time: "5:00 PM", name: "Snack", items: "Greek yoghurt bowl with granola + berries", kcal: 380 },
      { time: "8:30 PM", name: "Dinner", items: "Chicken pulao, grilled paneer, roasted vegetables", kcal: 400 },
    ],
  },
];

export default function MealPlan() {
  const [active, setActive] = useState("loss");
  const plan = PLANS.find((p) => p.key === active)!;
  const total = plan.meals.reduce((a, m) => a + m.kcal, 0);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="Sample Plans"
          title="A real day on"
          highlight="your plan"
          copy="Familiar Pakistani food, portioned with intent. Every member's plan is rebuilt around their labs, schedule and taste."
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.25rem] border border-brand-100 bg-cream">
            <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-brand-100 bg-white p-3">
              {PLANS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2.5 text-[13px] font-bold transition",
                    active === p.key
                      ? "bg-brand-500 text-white shadow-[0_12px_24px_-14px_rgba(46,155,75,1)]"
                      : "bg-brand-50/70 text-ink-soft hover:bg-brand-100",
                  )}
                >
                  {p.label}
                </button>
              ))}
              <span className="ml-auto hidden items-center gap-2 self-center pr-3 text-[12.5px] font-semibold text-ink-soft sm:flex">
                <Icon.Activity className="h-4 w-4 text-brand-500" />
                {plan.note}
              </span>
            </div>

            <ul className="divide-y divide-brand-100">
              {plan.meals.map((m, idx) => (
                <li
                  key={m.name + idx}
                  className="group flex flex-wrap items-center gap-4 px-6 py-5 transition hover:bg-white sm:px-8"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon.Apple className="h-5 w-5" />
                  </span>
                  <div className="min-w-[7rem]">
                    <p className="text-[13.5px] font-extrabold text-ink">{m.name}</p>
                    <p className="text-[12px] text-ink-soft/70">{m.time}</p>
                  </div>
                  <p className="flex-1 text-[13.5px] text-ink-soft">{m.items}</p>
                  <span className="rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-brand-600 shadow-sm">
                    {m.kcal} kcal
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 bg-ink px-6 py-5 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <Icon.Leaf className="h-5 w-5 text-leaf-300" />
                <p className="text-[13.5px] text-white/75">
                  Daily total <b className="text-white">{total.toLocaleString()} kcal</b> · adjusted weekly by your dietitian
                </p>
              </div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3 text-[13px] font-bold text-ink transition hover:bg-leaf-300"
              >
                Get my custom plan <Icon.Arrow className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
