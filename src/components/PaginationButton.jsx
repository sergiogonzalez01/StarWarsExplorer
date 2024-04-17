export function PaginationButton({
  icon = "",
  children,
  className = "",
  onClick = () => {},
} = {}) {
  return (
    <button
      onClick={onClick}
      className={`h-fit font-bold border-2 text-xl sm:text-2xl py-3 px-6 relative outline-none rounded-lg bg-black/70 group ${className}`}
    >
      {children}
      {icon && (
        <i
          className={`${icon} group-active:scale-125 md:group-hover:scale-125 transition-all`}
        ></i>
      )}
    </button>
  );
}
