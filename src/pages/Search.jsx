import { useEffect } from "react";

import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { useCharacters } from "../hooks/useCharacters";

import { NoResults } from "../components/NoResults";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/Pagination";
import { CardList } from "../components/CardList";
import { Spinner } from "../components/Spinner";
import SearchBar from "../components/SearchBar";

export function Search() {
  const { characters, loading, clearCharacters } = useCharacters();
  const { selected, updateSelected } = useSelectedCharacter();

  const hasResults = characters?.results?.length > 0;
  const hasNoResults = characters?.results?.length === 0;

  useEffect(() => {
    document.title = "StarWars Explorer | Search";
    return () => clearCharacters();
  }, []);

  return (
    <>
      <section className="w-full px-6 grid gap-6 md:gap-8 auto-rows-max justify-items-center">
        <SearchBar />

        <div className="flex items-center min-h-[20rem]">
          {hasResults && !loading && <CardList characters={characters} />}
          {hasNoResults && !loading && <NoResults />}
          {loading && <Spinner />}
        </div>

        <Pagination />
      </section>

      <Footer />

      {selected && (
        <Details selected={selected} updateSelected={updateSelected} />
      )}
    </>
  );
}
