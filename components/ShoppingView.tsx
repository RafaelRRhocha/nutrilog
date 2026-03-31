"use client";

import { useState } from "react";
import { type ShoppingSection, type ShoppingCategory } from "@/lib/shopping";

const sectionColors: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  "compra-grande": {
    bg: "bg-amber-500/5",
    border: "border-amber-500/20",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    dot: "bg-amber-400",
  },
  proteinas: {
    bg: "bg-sky-500/5",
    border: "border-sky-500/20",
    badge: "bg-sky-500/15 text-sky-300 border-sky-500/25",
    dot: "bg-sky-400",
  },
  "semana-a": {
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    dot: "bg-emerald-400",
  },
  "semana-b": {
    bg: "bg-violet-500/5",
    border: "border-violet-500/20",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    dot: "bg-violet-400",
  },
  "semana-c": {
    bg: "bg-rose-500/5",
    border: "border-rose-500/20",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
    dot: "bg-rose-400",
  },
  "semana-d": {
    bg: "bg-indigo-500/5",
    border: "border-indigo-500/20",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
    dot: "bg-indigo-400",
  },
};

const defaultColors = {
  bg: "bg-zinc-500/5",
  border: "border-zinc-500/20",
  badge: "bg-zinc-500/15 text-zinc-300 border-zinc-500/25",
  dot: "bg-zinc-400",
};

function CategoryCard({ category, dot }: { category: ShoppingCategory; dot: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{category.emoji}</span>
          <span className="text-sm font-semibold text-foreground/90">{category.name}</span>
        </div>
        {category.note && (
          <span className="pl-7 text-xs text-muted-foreground italic">{category.note}</span>
        )}
      </div>
      <ul className="flex flex-col gap-2">
        {category.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm min-w-0">
            <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${dot}`} />
            <span className="flex-1 min-w-0 text-foreground/75">{item.name}</span>
            <span className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums">
              {item.quantity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionCard({ section }: { section: ShoppingSection }) {
  const colors = sectionColors[section.id] ?? defaultColors;
  const isWeekly = section.id.startsWith("semana-");

  return (
    <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 flex flex-col gap-5`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.emoji}</span>
          <div>
            <h3 className="font-bold text-foreground text-base">{section.title}</h3>
            {section.subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{section.subtitle}</p>
            )}
          </div>
        </div>
        {isWeekly && (
          <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${colors.badge}`}>
            Semanal
          </span>
        )}
        {!isWeekly && (
          <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${colors.badge}`}>
            {section.id === "compra-grande" ? "Mensal" : "Freezer"}
          </span>
        )}
      </div>

      {section.note && (
        <div className="rounded-lg bg-background/40 border border-border/50 px-3 py-2 text-xs text-muted-foreground">
          💡 {section.note}
        </div>
      )}

      <div className={`grid gap-5 ${
        section.categories.length >= 4
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : section.categories.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2"
      }`}>
        {section.categories.map((cat, i) => (
          <CategoryCard key={i} category={cat} dot={colors.dot} />
        ))}
      </div>
    </div>
  );
}

type ShoppingViewProps = {
  sections: ShoppingSection[];
};

export function ShoppingView({ sections }: ShoppingViewProps) {
  const fixedSections = sections.filter((s) => !s.id.startsWith("semana-"));
  const weeklySections = sections.filter((s) => s.id.startsWith("semana-"));
  const [activeWeek, setActiveWeek] = useState(weeklySections[0]?.id ?? "");

  const activeSection = weeklySections.find((s) => s.id === activeWeek);

  return (
    <div className="flex flex-col gap-5">
      {fixedSections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}

      {weeklySections.length > 0 && (
        <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
          <div className="px-6 pt-5 pb-4 border-b border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛒</span>
              <div>
                <h3 className="font-bold text-foreground text-base">Compras Semanais</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Perecíveis — separados por semana</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {weeklySections.map((s) => {
                const colors = sectionColors[s.id] ?? defaultColors;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveWeek(s.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      activeWeek === s.id
                        ? `${colors.badge} border`
                        : "bg-secondary/60 text-foreground/60 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          {activeSection && (
            <div className="p-6">
              {activeSection.note && (
                <div className="mb-4 rounded-lg bg-background/40 border border-border/50 px-3 py-2 text-xs text-muted-foreground">
                  💡 {activeSection.note}
                </div>
              )}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {activeSection.categories.map((cat, i) => (
                  <CategoryCard
                    key={i}
                    category={cat}
                    dot={(sectionColors[activeSection.id] ?? defaultColors).dot}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
