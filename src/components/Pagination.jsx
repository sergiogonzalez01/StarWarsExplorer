import { usePage } from "../hooks/usePage";
import { PaginationButton } from "./PaginationButton";

const activeStyle =
  "bg-black/70 border-amber-400 hover:border-amber-300 text-amber-400 hover:text-amber-300 bg-[#000000aa] group";
const disabledStyle =
  "bg-black/70 pointer-events-none text-slate-300 border-transparent";

export function Pagination({ nextPage, previousPage, characters, loading }) {
  const { page } = usePage();

  return (
    <div className="flex flex-row justify-center gap-4 w-fit select-none">
      <PaginationButton
        styles={characters?.previous && !loading ? activeStyle : disabledStyle}
        onClick={() => previousPage()}
      >
        <i className="fa-solid fa-angle-left group-hover:scale-125 transition-all"></i>
      </PaginationButton>

      <PaginationButton styles="bg-blue-600 text-white min-w-fit pointer-events-none border-transparent">
        {page}
      </PaginationButton>

      <PaginationButton
        styles={characters?.next && !loading ? activeStyle : disabledStyle}
        onClick={() => nextPage()}
      >
        <i className="fa-solid fa-angle-right group-hover:scale-125 transition-all"></i>
      </PaginationButton>
    </div>
  );
}
