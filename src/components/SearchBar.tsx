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

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inpVal, setInpVal] = React.useState<string>('');
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  // Create a filtered list of items
  const filteredItems = inpVal
    ? items.filter((item) =>
        item.toLowerCase().trim().startsWith(inpVal.toLowerCase().trim()),
      )
    : [];

  return (
    <div className="relative w-full font-body">
      <div className="flex text-foreground flex-col w-full gap-2 items-center justify-center shadow-card overflow-visible bg-card">
        <input
          ref={inputRef}
          id="search"
          placeholder="What do you want to play? _"
          value={inpVal}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            // Small delay to allow click events on dropdown items
            setTimeout(() => setIsFocus(false), 150);
          }}
          onInput={(e) => {
            setInpVal(e.currentTarget.value);
          }}
          className="p-4 w-full outline-none"
        />

        {inpVal && isFocus && filteredItems.length > 0 && (
          <div
            className="absolute left-0 right-0 bg-card max-h-48 overflow-y-auto shadow-card z-50"
            style={{ top: '100%' }}
          >
            {filteredItems.map((item, index) => (
              <p
                key={index}
                onMouseDown={() => {
                  setInpVal(item);
                  setIsFocus(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
