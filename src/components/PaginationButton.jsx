export function PaginationButton({
  styles = null,
  onClick = null,
  children,
} = {}) {
  return (
    <button
      className={`h-fit font-bold border-2 text-xl sm:text-2xl py-3 px-6 relative outline-none rounded-lg ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
