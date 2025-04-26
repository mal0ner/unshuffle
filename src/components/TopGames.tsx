import Suit from './icons/Suit';

type Game = {
  name: string;
  likes: number;
};

export default function TopGames({ games }: { games: Game[] }) {
  return (
    <section className="flex flex-col gap-4 items-center justify-center max-w-prose w-full">
      <h2 className="text-3xl font-header font-bold text-white">Top Games</h2>
      <ol className="flex flex-col gap-6 w-full">
        {games.map((game, index) => {
          return <TopGame key={index} game={game} />;
        })}
      </ol>
    </section>
  );
}

function TopGame({ game }: { game: Game }) {
  return (
    <li className="flex justify-between bg-card shadow-card items-center w-full px-4 py-2 cursor-pointer hover:translate-y-[-5px] hover:bg-card-shadow hover:shadow-card-hover transition-all duration-75">
      <h3 className="font-header font-bold">{game.name}</h3>
      <div className="flex gap-2 items-center">
        <p className="font-header font-bold">{game.likes}</p>
        <Suit suit="heart" className="fill-accent-red" size={20} />
      </div>
    </li>
  );
}
