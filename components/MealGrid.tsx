"use client";

import { type Day, type Meal } from "@/lib/data";

const mealConfig: Record<string, { color: string; bg: string; border: string; icon: string }> = {
  Café:   { color: "text-amber-400",  bg: "bg-amber-500/10",   border: "border-amber-500/25",  icon: "☀️" },
  Lanche: { color: "text-sky-400",    bg: "bg-sky-500/10",     border: "border-sky-500/25",    icon: "🍎" },
  Almoço: { color: "text-emerald-400",bg: "bg-emerald-500/10", border: "border-emerald-500/25",icon: "🍽️" },
  "19h":  { color: "text-violet-400", bg: "bg-violet-500/10",  border: "border-violet-500/25", icon: "💪" },
  Jantar: { color: "text-indigo-400", bg: "bg-indigo-500/10",  border: "border-indigo-500/25", icon: "🌙" },
  Ceia:   { color: "text-rose-400",   bg: "bg-rose-500/10",    border: "border-rose-500/25",   icon: "🌟" },
};

const defaultConfig = { color: "text-zinc-400", bg: "bg-zinc-500/10", border: "border-zinc-500/25", icon: "🍴" };

function MealCard({ meal }: { meal: Meal }) {
  const cfg = mealConfig[meal.name] ?? defaultConfig;

  return (
    <div className={`rounded-xl border ${cfg.border} ${cfg.bg} p-4 flex flex-col gap-3`}>
      <div className={`flex items-center gap-2 ${cfg.color}`}>
        <span className="text-base leading-none">{cfg.icon}</span>
        <span className="text-sm font-bold tracking-wide uppercase">{meal.name}</span>
      </div>
      <ul className="flex flex-col gap-1.5">
        {meal.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
            <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${cfg.color.replace("text-", "bg-")}`} />
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

type MealGridProps = {
  day: Day;
};

export function MealGrid({ day }: MealGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
      {day.meals.map((meal, i) => (
        <MealCard key={i} meal={meal} />
      ))}
    </div>
  );
}
