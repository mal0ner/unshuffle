import React from 'react';

export default function SearchBar() {
  const items: string[] = [
    'Poker',
    'Blackjack',
    'Bridge',
    'Hearts',
    'Spades',
    'Euchre',
    'Canasta',
    'Rummy',
    'Gin Rummy',
    'Go Fish',
    'Crazy Eights',
    'Old Maid',
    'War',
    'Solitaire',
    'FreeCell',
    'Spider Solitaire',
    'Pinochle',
    'Cribbage',
    'Whist',
    'Uno',
    'Phase 10',
    'Snap',
    'Durak',
    'Skat',
    'Sheepshead',
    'Mao',
    'President',
    'Asshole',
    'Cheat',
    'Egyptian Rat Screw',
    'Slapjack',
    '500',
    'Bullshit',
    'Scopone',
    'Briscola',
    'Piquet',
    'Bezique',
    'Exploding Kittens',
    'Cards Against Humanity',
    'Dominion',
    'Magic: The Gathering',
    'Yu-Gi-Oh!',
    'Pokémon TCG',
    'Hearthstone',
    'Gwent',
    'Triple Triad',
    'Schnapsen',
    'Tarot (Tarock)',
    'Belote',
    "Liar's Poker",
    "Texas Hold'em",
    'Omaha',
    'Stud Poker',
    'Chinese Poker',
    '3 Card Monte',
    'Sevens',
    'Casino War',
    'Thirty-One',
    'Dutch Blitz',
    'Phase 10',
    'Skip-Bo',
    'Set',
    'Kaboom',
    'Mille Bornes',
    'Love Letter',
    'The Mind',
    'Saboteur',
    'Hanabi',
    'BANG!',
    'Red7',
    'Six Nimmt!',
    'No Thanks!',
    'High Card',
    'Clock Solitaire',
    'Golf (Card Game)',
    'Pyramid',
    'Russian Bank',
    'Double Solitaire',
    'Kings in the Corner',
  ];

  const [inpVal, setInpVal] = React.useState<string>('');
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  return (
    <div className="relative flex w-full gap-4 font-body h-[100px] z-50">
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="flex text-foreground flex-col w-full gap-2 items-center justify-center shadow-card overflow-hidden bg-card">
          <input
            id="search"
            placeholder="What do you want to play? _"
            value={inpVal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onInput={(e) => {
              setInpVal(e.currentTarget.value);
            }}
            className="p-4 w-full outline-none"
          />
          <div className="w-full top-full left-0">
            {inpVal &&
              isFocus &&
              items
                .filter((i) =>
                  i
                    .toLowerCase()
                    .trim()
                    .startsWith(inpVal.toLowerCase().trim()),
                )
                .map((i, idx) => (
                  <p
                    key={idx}
                    onMouseDown={() => {
                      setInpVal(i);
                      setIsFocus(false);
                    }}
                    className="px-4 py-2 cursor-pointer"
                  >
                    {i}
                  </p>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
