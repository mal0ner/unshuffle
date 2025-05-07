'use client';

import Suit from '@/components/icons/Suit';
import SearchBar from '@/components/SearchBar';
import TopGames from '@/components/TopGames';
import React from 'react';

const topGames = [
  { name: 'Poker', likes: 239 },
  { name: 'Superbad', likes: 192 },
  { name: 'Atom Break', likes: 69 },
  { name: 'Card Fury', likes: 45 },
  { name: 'Dairy Farmer', likes: 19 },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center justify-items-center min-h-screen p-8">
      <nav className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl hover:text-accent-red font-header font-bold text-white">unshuffle</h1>
        <div className="flex gap-1 items-center justify-center">
          <Suit suit="club" size={50} />
          <Suit suit="spade" size={50} />
          <Suit suit="heart" size={50} className="fill-accent-red" />
          <Suit suit="diamond" size={50} />
        </div>
      </nav>
      <main className="flex flex-col gap-20 items-center justify-center w-full max-w-prose">
        <SearchBar />
        <section className="flex flex-col gap-4 justify-center items-center max-w-prose">
          <h2 className="text-3xl font-header font-bold text-white">
            Rules and Scores
          </h2>
          <p className="font-body">
            Unshuffle has rulesets and score cards for all your favourite card
            games!
          </p>
        </section>
        <TopGames games={topGames} />
      </main>
    </div>
  );
}
