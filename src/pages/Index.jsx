import { Link, Outlet } from "react-router-dom";

export function Index() {
  return (
    <div className="grid gap-6 md:gap-8 mt-[15dvh]">
      <Link to="/home" className="flex justify-self-center w-fit h-fit">
        <img
          src="/logo.svg"
          alt="StarWars Explorer logo"
          title="StarWars Explorer logo"
          className="h-28 sm:h-32 md:h-36 lg:h-40"
        />
      </Link>

      <Outlet />
    </div>
  );
}
