import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import TextContent from "./TextContent";
import ImageGrid from "./ImageGrid";

const FEATURE__DATA = [
  {
    subtitle: "Featured Project",
    title: "CHIN SAKDA",
    description:
      "Some projects I have built throughout my journey to becoming a professional Front-End Developer.",
  },
];

const Featured = () => {
  const { subtitle, title, description } = FEATURE__DATA[0];
  return (
    <>
      <section className="featured container" id="featured">
        <div className="container">
          <TextContent title={"Featured"} />
        </div>
        <div className="p-4"></div>
        <div className="featured__content container flex">
          <div className="">
            <h3 className="featured__subtitle text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light">
              {subtitle}
            </h3>
            <div className="p-2"></div>
            <h2 className="featured__title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4">
              {title}
            </h2>
            <p className="featured__description w-[60ch] text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="p-4"></div>
        <div className="featured__details container flex flex-col md:flex-row gap-4 md:gap-0 w-full justify-between">
          <div>
            <h4 className="text-lg md:text-xl">Tech Stack</h4>
            <ul className="flex flex-wrap gap-4 mt-2">
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <FaHtml5 className="text-orange-500" /> HTML
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <FaCss3Alt className="text-blue-500" /> CSS
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <FaJs className="text-yellow-500" /> JavaScript
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <TbBrandTailwind className="text-teal-500" /> TailwindCSS
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <FaReact className="text-cyan-500" /> ReactJS
              </li>
              <li className="flex items-center gap-2 text-base md:text-lg text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                <FaReact className="text-cyan-500" /> React Hooks
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl">Project Type</h4>
            <ul className="text-lg text-slate-400 mt-2">
              <li>Fullstack Jamstack</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl">Time Line</h4>
            <ul className="text-lg text-slate-400 mt-2">
              <li>December 2024 - Present</li>
            </ul>
          </div>
        </div>
        <div className="p-4"></div>
        <div>
          <ImageGrid />
        </div>
      </section>
    </>
  );
};

export default Featured;
