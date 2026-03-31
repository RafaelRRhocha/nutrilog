'use client';

import { useState } from 'react';
import { type Week } from '@/lib/data';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MealGrid } from './MealGrid';

type WeekAccordionProps = {
  week: Week;
};

export function WeekAccordion({ week }: WeekAccordionProps) {
  const [activeDay, setActiveDay] = useState(week.days[0].name);

  const selectedDay =
    week.days.find((d) => d.name === activeDay) ?? week.days[0];

  return (
    <AccordionItem value={week.id} className='border-0'>
      <div className='rounded-2xl border border-border bg-card/40 overflow-hidden'>
        <AccordionTrigger className='px-6 py-5 hover:no-underline group'>
          <div className='flex items-center gap-4'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10'>
              <span className='text-lg'>📅</span>
            </div>
            <div>
              <p className='text-base font-bold text-foreground group-hover:text-primary transition-colors'>
                {week.name}
              </p>
              <p className='text-xs text-muted-foreground mt-0.5'>
                {week.days.length} dias &middot;{' '}
                {week.days.reduce((acc, d) => acc + d.meals.length, 0)}{' '}
                refeições
              </p>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className='px-5 pb-5'>
          <div className='flex gap-2 mb-5 border-b border-border pb-4 flex-wrap'>
            {week.days.map((day) => (
              <button
                key={day.name}
                onClick={() => setActiveDay(day.name)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  activeDay === day.name
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-secondary/60 text-foreground/60 hover:bg-secondary hover:text-foreground'
                }`}
              >
                <span className='hidden sm:inline'>{day.name}</span>
                <span className='sm:hidden'>{day.shortName}</span>
              </button>
            ))}
          </div>

          <MealGrid day={selectedDay} />
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}
