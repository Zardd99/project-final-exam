import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NAVBAR_DATA = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isNavbarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavbarOpen]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="relative">
      <nav className="navbar bg-dark duration-300 ease-in w-full p-4 md:px-8 md:py-4 flex justify-between items-center fixed top-0 left-0 z-[9999]">
        <div className="navbar-brand text-xl md:text-2xl font-bold">
          <Link to="/" className="text-dark dark:text-light">
            Portfolio
          </Link>
        </div>

        <div className="navbar w-fit h-fit hidden sm:flex">
          <div className="navbar-links flex gap-4 md:gap-8 items-center justify-center font-semibold">
            {NAVBAR_DATA.map((data) => (
              <Link
                key={data.id}
                to={data.path}
                className="nav-link text-base p-2 md:py-2 md:px-4 text-dark dark:text-light hover:bg-slate-400"
              >
                {data.title}
              </Link>
            ))}
            <hr className="h-5" />
            <button className="list-none ml-4" onClick={toggleDarkMode}>
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
        </div>

        <button
          className="flex sm:hidden text-dark dark:text-light"
          onClick={toggleNavbar}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div
          className={`${
            isNavbarOpen
              ? "translate-x-0 overflow-y-hidden"
              : "-translate-x-full"
          } fixed inset-0 bg-dark z-50 transition-transform duration-300 ease-in-out sm:hidden `}
        >
          <div className="p-4 flex flex-col h-full ">
            <button className="mb-4 text-light" onClick={toggleNavbar}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col gap-4 mt-8 ">
              {NAVBAR_DATA.map((data) => (
                <Link
                  key={data.id}
                  to={data.path}
                  className="text-light text-lg font-semibold hover:bg-slate-800 p-2 rounded"
                  onClick={toggleNavbar}
                >
                  {data.title}
                </Link>
              ))}
            </div>

            <div className="mt-auto mb-4">
              <button
                className="flex items-center gap-2 text-light"
                onClick={toggleDarkMode}
              >
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
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>

        {isNavbarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden "
            onClick={toggleNavbar}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
