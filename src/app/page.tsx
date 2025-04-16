'use client';

import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center justify-items-center min-h-screen p-8">
      <nav>
        <h1 className="text-3xl font-mono font-bold text-white">
          unshuffle.com &#x1F0A0;
        </h1>
      </nav>
      <main className="flex flex-col gap-20 items-center justify-center w-full max-w-prose">
        <SearchBar />

        <Link
          href={'holdem'}
          className="font-mono font-bold py-2 px-4 rounded bg-white hover:bg-slate-100"
        >
          Texas Hold'em
        </Link>
      </main>
    </div>
  );
}
