'use client';
import { useRouter } from 'next/navigation';
import { Button } from "@mui/material";
import Image from "next/image";
import ArticleIcon from '@mui/icons-material/Article';
export default function Home() {
  const router = useRouter();

  const handleAthletesClick = () => {
    router.push('/text/atleti');
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full flex justify-center py-6 z-10 relative">
      <a
      href="https://www.vans.com/it-it"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-red-800 px-6 py-3 text-white text-lg font-semibold transition-colors hover:bg-red-900 dark:bg-red-650 dark:hover:bg-red-800"
      >
      Vans
      </a>
      </div>
      <div className="relative w-full h-80 sm:h-[28rem] md:h-[32rem] lg:h-[40rem]">
        <Image
          src="/vans.svg"
          alt="Vans banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-20 px-6 bg-white dark:bg-black sm:items-center">
        <div className="flex items-center gap-7 text-center sm:items-start sm:text-left mb-10">
          <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-red-900 dark:text-red-700">
          Welcome to the Vans store.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for the perfect pairs of shoes or wanna learn how to have a lit outfit? Head over to the closest{" "}
            <a
              href="https://www.vans.com/it-it/trova-un-negozio"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Vans store
            </a>{" "}
            or make{" "}
            <a
              href="https://www.vans.com/it-it/customs"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Some shoes
            </a>{" "}
            all by yourself.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://www.vans.com/it-it/c/tendenze-5515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
            />
            See the shop
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.vans.com/it-it/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/globe.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
            />
            See the news
          </a>
          <button
            onClick={handleAthletesClick}
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          >
            <Image
              className="dark:invert"
              src="/running.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
            />
            See our athletes
          </button>
        </div>
      </main>
    </div>
  );
}