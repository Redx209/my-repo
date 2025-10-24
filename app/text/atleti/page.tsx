'use client';
import Image from 'next/image';
import Atleti from './athletes.json';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import WavesIcon from '@mui/icons-material/Waves';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SportsIcon from '@mui/icons-material/Sports';

function getSportIcon(sport: string) {
  switch (sport.toLowerCase()) {
    case 'skate':
    case 'skateboard':
      return <SkateboardingIcon style={{ fontSize: 40, color: 'White' }} />;
    case 'bmx':
    case 'bike':
      return <DirectionsBikeIcon style={{ fontSize: 40, color: 'White' }} />;
    case 'basket':
    case 'basketball':
      return <SportsBasketballIcon style={{ fontSize: 40, color: 'White' }} />;
    case 'calcio':
    case 'soccer':
      return <SportsSoccerIcon style={{ fontSize: 40, color: 'White' }} />;
    case 'surf':
      return <WavesIcon style={{ fontSize: 40, color: 'White' }} />;
    case 'snowboard':
      return <AcUnitIcon style={{ fontSize: 40, color: 'White' }} />;
    default:
      return <SportsIcon style={{ fontSize: 40, color: 'White' }} />;
  }
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <div className="relative w-full h-80 sm:h-[28rem] md:h-[32rem] lg:h-[40rem]">
        <Image
          src="/vans.svg"
          alt="Vans banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <main className="flex w-full max-w-6xl flex-col items-center justify-start pt-16 px-8 bg-white dark:bg-black sm:items-start">
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
                {getSportIcon(atleta.sport)}
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