import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className="relative">
      <nav className="navbar bg-dark w-full p-4 md:px-8 md:py-4 flex justify-between items-center fixed top-0 left-0 z-[999]">
        <div className="navbar-brand text-xl md:text-2xl font-bold">
          <Link to="/main" className="text-dark dark:text-light">
            Movie App
          </Link>
        </div>
        <div className="navbar-links flex gap-4 md:gap-8 items-center justify-center">
          <Link
            to="/main"
            className="nav-link text-dark dark:text-light text-base p-2 md:py-2 md:px-4 hover:bg-slate-500"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="nav-link text-dark dark:text-light text-base p-2 md:py-2 md:px-4 hover:bg-slate-500"
          >
            Favorites
          </Link>
          <Link
            to="/history"
            className="nav-link text-dark dark:text-light text-base p-2 md:py-2 md:px-4 hover:bg-slate-500"
          >
            History
          </Link>
          <hr className=" border h-5" />
          <button className="list-none" onClick={toggleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
