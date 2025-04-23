'use client';

import Suit from '@/components/icons/Suit';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center justify-items-center min-h-screen p-8">
      <nav className="flex flex-col gap-2">
        <h1 className="text-5xl font-header font-bold text-white">unshuffle</h1>
        <div className="flex gap-1 items-center justify-center">
          <Suit suit="club" size={50} />
          <Suit suit="spade" size={50} />
          <Suit suit="heart" size={50} className="fill-accent-red" />
          <Suit suit="diamond" size={50} />
        </div>
      </nav>
      <main className="flex flex-col gap-20 items-center justify-center w-full max-w-prose"></main>
    </div>
  );
}
