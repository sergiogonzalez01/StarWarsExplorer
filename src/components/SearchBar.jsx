import { useEffect, useState } from "react";
import { useWatchParams } from "../hooks/useWatchParams";
import { useCharacters } from "../hooks/useCharacters";

function setDefaultCat(category = "") {
  const validCats = ["characters", "starships", "vehicles", "planets"];
  return validCats.includes(category) ? category : "characters";
}

export default function SearchBar() {
  const { categoryParam, searchParam } = useWatchParams();
  const { searchCharacters } = useCharacters();
  const [search, setSearch] = useState(searchParam || "");
  const [category, setCategory] = useState(setDefaultCat(categoryParam));

  const onSubmit = (e) => {
    e.preventDefault();
    const value = search.trim();
    searchCharacters({ search: value, category });
  };

  const onSelect = (e) => {
    const value = search.trim();
    const cat = e.target.value;
    searchCharacters({ search: value, category: cat });
    setCategory(cat);
  };

  useEffect(() => setSearch(searchParam), [searchParam]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 w-full max-w-80 min-[512px]:max-w-xl md:max-w-2xl md:2/3 min-[512px]:flex-row"
    >
      <input
        type="text"
        name="searchInput"
        value={search}
        autoComplete="off"
        className="inline h-12 sm:text-md md:text-xl text-gray-700 px-3 py-1.5 bg-white border-2 border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full col-span-2 md:col-auto"
        placeholder="Luke Skywalker..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="w-full min-[512px]:max-w-fit grid grid-cols-2 gap-2">
        <select
          id="categories"
          name="searchSelect"
          value={category}
          onChange={onSelect}
          className="bg-gray-50 text-slate-900 rounded-lg  p-2.5 cursor-pointer font-medium focus:outline outline-blue-500 outline-2"
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
  );
}
