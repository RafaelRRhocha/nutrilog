import { PageTabs } from '@/components/PageTabs';
import { weeks } from '@/lib/data';
import { shoppingSections } from '@/lib/shopping';

export default function Home() {
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
