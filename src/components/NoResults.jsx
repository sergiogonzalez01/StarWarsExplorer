export function NoResults() {
  return (
    <p className="text-slate-200 text-3xl sm:text-4xl font-bold text-center bg-black/75 rounded-md p-4">
      <i className="fa-solid fa-magnifying-glass text-7xl block mb-4 "></i>
      No results found
      <br />
      <span className="text-amber-400 text-lg sm:text-2xl">
        Try another search
      </span>
    </p>
  );
}
