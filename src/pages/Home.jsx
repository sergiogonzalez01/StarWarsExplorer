import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 max-w-screen px-2">
      <h2 className="text-slate-200 text-lg sm:text-xl md:text-3xl  font-mono font-semibold italic text-center bg-black/50">
        ¡Here you can find all StarWars movie characters!
      </h2>

      <Link
        to="/search"
        className="inline-block px-6 py-2 md:py-3 border-4 text-gray-200 font-bold text-base sm:text-lg border-amber-500 rounded-xl bg-[#000000cc] group"
      >
        Try it
        <i className="fa-solid fa-arrow-right ml-2 animate-[arrowLeft_1.5s_ease-in-out_infinite]"></i>
      </Link>
    </div>
  );
}
