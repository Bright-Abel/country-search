import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { TbWorldSearch } from "react-icons/tb";
const NavBar = () => {
  return (
    <div className="w-full h-16 flex justify-between sticky top-0 z-50 shadow-xl dark:shadow-none px-2 md:px-4 items-center lg:px-8 bg-light-800 dark:bg-dark-400">
      <Link
        href="/country"
        className="flex items-center gap-1 text-2xl font-semibold cursor-pointer"
      >
        <TbWorldSearch />
        <h1 className="">
          Country
          <span className="text-brand-100 dark:text-brand-200">Search</span>
        </h1>
      </Link>
      <ThemeToggle />
    </div>
  );
};
export default NavBar;
