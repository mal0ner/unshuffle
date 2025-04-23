'use client';

import Clubs from '@/components/icons/Clubs';
import Diamonds from '@/components/icons/Diamonds';
import Hearts from '@/components/icons/Hearts';
import Spades from '@/components/icons/Spades';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center justify-items-center min-h-screen p-8">
      <nav className="flex flex-col gap-2">
        <h1 className="text-5xl font-header font-bold text-white">unshuffle</h1>
        <div className="flex gap-1 items-center justify-center">
          <Clubs size={50} />
          <Spades size={50} />
          <Hearts size={50} />
          <Diamonds size={50} />
        </div>
      </nav>
      <main className="flex flex-col gap-20 items-center justify-center w-full max-w-prose"></main>
    </div>
  );
}
