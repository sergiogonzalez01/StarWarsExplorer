import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "StarWars Explorer | Not Found";
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4 m-auto items-center justify-center px-6">
      <img
        src="/404.png"
        alt="Page not found image"
        title="Page not found image"
        className="w-32 h-32 sm:w-40 sm:h-40"
        draggable="false"
      />
      <div className="w-full p-4 bg-black/80 rounded-md border-2 border-amber-400 max-w-max">
        <p className="text-slate-200 text-2xl sm:text-4xl font-mono font-semibold italic text-center">
          <span className="block text-3xl sm:text-5xl mb-2 font-bold text-amber-400">
            ¡404!
          </span>
          Page not found...
        </p>
      </div>
      <button
        onClick={() => navigate("/search/characters", { replace: true })}
        className="w-fit text-amber-400 font-bold text-xl sm:text-2xl md:text-3xl py-3 px-6 bg-black/75"
      >
        <i className="fa-solid fa-arrow-left mr-2 animate-[arrowRight_1s_ease-in_infinite]"></i>
        BACK
      </button>
    </div>
  );
}
