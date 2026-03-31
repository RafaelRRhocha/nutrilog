import { PageTabs } from '@/components/PageTabs';
import { type Week } from '@/lib/data';
import { type ShoppingSection } from '@/lib/shopping';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

async function getWeeks(): Promise<Week[]> {
  const res = await fetch(`${BASE_URL}/api/weeks`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Falha ao carregar semanas');
  return res.json();
}

async function getShopping(): Promise<ShoppingSection[]> {
  const res = await fetch(`${BASE_URL}/api/shopping`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Falha ao carregar lista de compras');
  return res.json();
}

export default async function Home() {
  const [weeks, shoppingSections] = await Promise.all([
    getWeeks(),
    getShopping(),
  ]);

  return (
    <main className='min-h-screen bg-background px-6 py-10 lg:px-12'>
      <div className='mx-auto max-w-[1400px]'>
        <header className='mb-8'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-2xl'>
              🥗
            </div>
            <h1 className='text-3xl font-bold text-foreground'>NutriLog</h1>
          </div>
          <p className='text-muted-foreground ml-14'>
            Acompanhe seu plano alimentar semana a semana
          </p>
        </header>

        <PageTabs weeks={weeks} shoppingSections={shoppingSections} />
      </div>
    </main>
  );
}
