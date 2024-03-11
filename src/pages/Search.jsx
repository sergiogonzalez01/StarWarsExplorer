import { useEffect, useState } from "react";
import { useWatchParams } from "../hooks/useWatchParams";
import { NoResults } from "../components/NoResults";
import { useSelectedCharacter } from "../hooks/useSelectedCharacter";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";
import { useCharacters } from "../hooks/useCharacters";
import { Pagination } from "../components/Pagination";
import { CardList } from "../components/CardList";

export function Search() {
  const {
    characters,
    updateCharacters,
    searchCharacters,
    loading,
    nextPage,
    previousPage,
    error,
  } = useCharacters();
  const { categoryParam, searchParam } = useWatchParams({ updateCharacters });
  const [search, setSearch] = useState(searchParam || "");
  const [category, setCategory] = useState(categoryParam || "people");
  const { selected, updateSelected } = useSelectedCharacter();

  const onUpdateData = (e) => {
    e.preventDefault();
    const value = search.trim();
    const cat = e.type === "submit" ? category : e.target.value;

    searchCharacters({ search: value, category: cat });
    if (e.type === "change") setCategory(e.target.value);
  };

  useEffect(() => {
    setSearch(searchParam);
  }, [searchParam]);

  useEffect(() => {
    document.title = "StarWars Explorer | Search";
  }, []);

  return (
    <>
      <section className="w-full px-6 grid gap-6 md:gap-8 auto-rows-max justify-items-center">
        <form
          className="flex flex-col gap-2 w-full max-w-80 min-[512px]:max-w-xl md:max-w-2xl md:2/3 min-[512px]:flex-row"
          onSubmit={onUpdateData}
        >
          <input
            type="text"
            className="inline h-12 sm:text-md md:text-xl text-gray-700 px-3 py-1.5 bg-white border-2 border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full col-span-2 md:col-auto"
            placeholder="Luke Skywalker..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="w-full min-[512px]:max-w-fit grid grid-cols-2 gap-2">
            <select
              name="select_categories"
              id="categories"
              className="bg-gray-50 text-slate-900 rounded-lg  p-2.5 cursor-pointer font-medium focus:outline outline-blue-500 outline-2"
              onChange={onUpdateData}
              value={category}
            >
              <option value="characters">Character</option>
              <option value="starships">Ship</option>
              <option value="vehicles">Vehicle</option>
              <option value="planets">Planet</option>
            </select>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
          </div>
        </form>

        {!error ? (
          <CardList characters={characters} loading={loading} />
        ) : (
          <NoResults />
        )}

        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          characters={characters}
          loading={loading}
        />
      </section>
      <Footer />

      {selected && (
        <Details
          selected={selected}
          updateSelected={updateSelected}
          category={category}
        />
      )}
    </>
  );
}
