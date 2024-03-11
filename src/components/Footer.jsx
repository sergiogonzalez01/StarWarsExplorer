import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-6 min-[400px]:py-6 sm:py-8 flex justify-center text-slate-200 font-medium text-base sm:text-lg relative  ">
      <p className="bg-black/75 rounded-md p-2 text-center">
        <Link to="/home" className="hover:underline mr-1">
          StarWars Explorer™
        </Link>
        © 2023. <br className="block min-[400px]:hidden" />
        All Rights Reserved
      </p>
    </footer>
  );
}
