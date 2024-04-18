import { usePage } from "../hooks/usePage";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
  const { page, hasPrev, hasNext, nextPage, previousPage } = usePage();

  const classActive =
    "border-amber-500 text-amber-500 active:shadow-[0px_0px_10px] md:hover:shadow-[0px_0px_10px] shadow-amber-500";
  const classDesactive =
    "pointer-events-none text-slate-300 border-transparent";

  return (
    <div className="flex flex-row justify-center gap-4 w-fit select-none">
      <PaginationButton
        icon="fa-solid fa-angle-left"
        onClick={previousPage}
        className={hasPrev ? classActive : classDesactive}
      />

      <PaginationButton className="bg-blue-600 text-white min-w-fit pointer-events-none border-transparent">
        {page}
      </PaginationButton>

      <PaginationButton
        icon="fa-solid fa-angle-right"
        onClick={nextPage}
        className={hasNext ? classActive : classDesactive}
      />
    </div>
  );
}
