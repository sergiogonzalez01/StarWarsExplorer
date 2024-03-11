import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  useEffect(() => {
    document.title = "StarWars Explorer | Home";
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 px-2 mb-[15dvh]">
      <h2 className="text-slate-100 text-lg sm:text-xl md:text-2xl  font-mono font-semibold italic text-center bg-black/75 p-2 rounded-md w-[90%] max-w-[750px] border-2 border-slate-600">
        ¡Here you can find all characters, vehicles, starships or planets from
        StarWars movies!
      </h2>

      <Link
        to="/search/characters"
        className="inline-block px-6 py-3 border-4 text-gray-200 font-bold text-base sm:text-lg border-amber-500 rounded-xl bg-[#000000cc] group"
      >
        Try it
        <i className="fa-solid fa-arrow-right ml-2 animate-[arrowLeft_1.5s_ease-in-out_infinite]"></i>
      </Link>
    </div>
  );
}
