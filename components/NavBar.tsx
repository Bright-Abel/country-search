import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { TbWorldSearch } from "react-icons/tb";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/country" className="navbar-link">
        <TbWorldSearch className="logo" />
        <h1>
          Country <span className="navbar-brand">Search</span>
        </h1>
      </Link>
      <ThemeToggle />
    </div>
  );
};
export default NavBar;
