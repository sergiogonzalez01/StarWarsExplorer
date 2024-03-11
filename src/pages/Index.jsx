import { Link, Outlet } from "react-router-dom";

export function Index() {
  return (
    <div className="grid gap-10 sm:gap-14 relative top-[30vh]">
      <Link to="/home" className="flex justify-self-center w-fit h-fit">
        <img
          src="/logo.svg"
          className="h-fit w-[15rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem]"
          alt="starwars-logo"
        />
      </Link>

      <Outlet />
    </div>
  );
}
