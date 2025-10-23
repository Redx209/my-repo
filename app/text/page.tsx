import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-center">
        {/* Bottone centrato */}
        <div className="flex w-full justify-center mb-10">
          <a
            href="https://www.vans.com/it-it"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-6 py-3 text-white text-lg font-semibold transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Vans
          </a>
        </div>
        <Image
          src="/vans.svg"
          alt="Next.js logo"
          width={1500}
          height={20}
          priority
        />
        <div className="flex items-center gap-7 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
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
            or make {" "}
            <a
              href="https://www.vans.com/it-it/customs"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Some shoes
            </a>{" "}
            al by yourself.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://www.vans.com/it-it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            See the shop
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://eu.sourcebmx.com/it-it/blogs/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/globe.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            See the news
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.vans.com/it-it/alwayspushing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/running.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            See our athletes
          </a>
        </div>
      </main>
    </div>
  );
}