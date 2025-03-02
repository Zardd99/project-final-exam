import React from "react";
import img from "../assets/MyProfile.png";
import { Link } from "react-router-dom";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import CVDownload from "../components/CVDownload";

const HERO_DATA = [
  {
    id: 1,
    subtitle: "Project Showcase",
    title: "Full-Stack Developer",
    description: "Sakda Chin - Crafting responsive web experiences",
    button_project: "View Projects",
  },
];

const Home = () => {
  const { subtitle, title, description, button_project } = HERO_DATA[0];

  return (
    <div className="min-h-screen  mt-[72px]">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div className="relative group mx-auto lg:mx-0 flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 blur-3xl opacity-40 animate-border-flow" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl animate-border-glow">
              <img
                src={img}
                alt="Profile"
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-8 lg:mt-0">
            <p className="mb-4 text-lg font-semibold text-indigo-400 md:text-xl">
              {subtitle}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-indigo-800 via-indigo-500 to-blue-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              {description}
            </p>

            <div className="flex flex-col gap-6 sm:flex-row">
              <Link
                to="/main"
                className="flex items-center gap-2 rounded-lg  bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                {button_project}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <CVDownload
                className="rounded-lg border-2 border-indigo-500 px-8 py-4 font-semibold text-indigo-500 
                            transition-all duration-300 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="my-20">
          <Featured />
        </div>

        <Footer className="mt-20 border-t border-slate-700/50" />
      </section>
    </div>
  );
};

export default Home;
