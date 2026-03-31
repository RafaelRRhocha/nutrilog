"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { WeekAccordion } from "@/components/WeekAccordion";
import { ShoppingView } from "@/components/ShoppingView";
import { type Week } from "@/lib/data";
import { type ShoppingSection } from "@/lib/shopping";

type Tab = "semanas" | "compras";

type PageTabsProps = {
  weeks: Week[];
  shoppingSections: ShoppingSection[];
};

export function PageTabs({ weeks, shoppingSections }: PageTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("semanas");

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "semanas", label: "Plano Alimentar", emoji: "🗓️" },
    { id: "compras", label: "Lista de Compras", emoji: "🛒" },
  ];

  return (
    <div>
      <div className="flex gap-2 mb-8 border-b border-border pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>{tab.emoji}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "semanas" && (
        <Accordion type="multiple" className="flex flex-col gap-3">
          {weeks.map((week) => (
            <WeekAccordion key={week.id} week={week} />
          ))}
        </Accordion>
      )}

      {activeTab === "compras" && (
        <ShoppingView sections={shoppingSections} />
      )}
    </div>
  );
}
