import { Card } from "./Card";
import { Spinner } from "./Spinner";

export function CardList({ characters, loading }) {
  return (
    <div className="w-full flex justify-center min-h-[20rem]">
      {characters && !loading ? (
        <div className="flex flex-wrap justify-center w-fit md:max-w-[1184px] gap-4">
          {characters.results?.map((character) => {
            const id = parseInt(character.url.split("/").reverse()[1]);
            return <Card id={parseInt(id)} key={id} name={character.name} />;
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
