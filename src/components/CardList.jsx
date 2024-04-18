import { Card } from "./Card";

export function CardList({ characters }) {
  return (
    <div className="flex flex-wrap justify-center w-fit md:max-w-[1184px] gap-4">
      {characters.results?.map((character) => {
        const id = parseInt(character.url.split("/").reverse()[1]);
        return <Card id={parseInt(id)} key={id} name={character.name} />;
      })}
    </div>
  );
}
