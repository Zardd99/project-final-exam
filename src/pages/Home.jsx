import React from "react";

import { Link } from "react-router-dom";

const HERO_DATA = [
  {
    id: 1,
    subtitle: "Project ShowCase",
    title: "Welcome to the home page!",
    description: "I'm Sakda .. A web developer || responsive design",
    button_project: "Go To My Projects",
    button_contact: "Go Contact Me",
  },
];

const Home = () => {
  const { id, subtitle, title, description, button_project, button_contact } =
    HERO_DATA[0];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section
        className={`home container px-0 py-4 sm:py-8 sm:px-0 w-full box-border mt-20 flex flex-col items-center justify-center
       gap-7 h-[calc(100vh-72px)] `}
        key={id}
      >
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold ">
          {subtitle}
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-indigo-500 ">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {description}
        </p>
        <div className=" flex gap-4 items-center justify-center mt-10">
          <div className=" flex gap-4 items-center justify-center">
            <div className="flex gap-4 items-center justify-center group">
              <p className=" text-xs sm:text-sm md:text-base lg:text-lg">
                Click Here to See my Movie Site Project
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-hover:transform-[translateX(5px)] duration-300 ease-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <button className="group inline-block py-[10px] px-[10px] md:py-[15px] md:px-[30px] bg-button border-[2px] border-button border-solid shadow-button text-xs sm:text-sm md:text-base  font-black text-dark pointer mr-[15px] transition-[0.3s] text-nowrap hover:bg-transparent hover:shadow-none hover:text-button">
              <Link
                to="/main"
                className="!text-dark group-hover:!text-light transition-none"
              >
                {button_project}
              </Link>
            </button>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="flex gap-4 items-center justify-center group">
              <p text-xs sm:text-sm md:text-base lg:text-lg>
                Click here to contact me
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-hover:transform-[translateX(5px)] duration-300 ease-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <button className="group inline-block py-[10px] px-[18px] sm:py-[12.5px] sm:px-[22.5px] md:py-[15px] md:px-[30px] bg-light border-[2px] border-light border-solid shadow-light text-xs sm:text-sm md:text-base font-black  pointer mr-[15px] transition-[0.3s] text-nowrap hover:bg-transparent hover:shadow-none ">
              <Link
                to="/contact"
                className=" !text-dark group-hover:!text-light transition-none"
              >
                {button_contact}
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
