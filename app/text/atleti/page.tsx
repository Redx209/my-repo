'use client';
import Image from 'next/image';
import Atleti from './athletes.json';
import SportsIcon from '@mui/icons-material/Sports';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-32 px-8 bg-white dark:bg-black sm:items-start">
    <div className="relative w-full h-80 sm:h-[28rem] md:h-[32rem] lg:h-[40rem]">
            <Image
              src="/vans.svg"
              alt="Vans banner"
              fill
              priority
              className="object-cover"
            />
          </div>

        <h1 className="text-4xl font-bold text-black dark:text-white mb-10">
          Elenco Atleti
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {Atleti.map((atleta) => (
            <div
              key={atleta.id}
              className="group flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer border border-zinc-200 dark:border-zinc-700 rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-red-800">
                <SportsIcon style={{ fontSize: 40, color: 'White' }} />
                {atleta.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">{atleta.sport}</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-2">ID: {atleta.id}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}