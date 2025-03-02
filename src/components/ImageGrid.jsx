import "./css/ImageGrid.css";

import { useEffect, useRef } from "react";
import project1 from "../assets/Project7.png";
import MovieSite from "../assets/Movie-site.png";
import Todo from "../assets/Todo.png";

const images = [project1, Todo, MovieSite];
const links = [
  {
    link: "",
    title: "Samsung Clones",
  },
  {
    link: "https://todo-seven-rouge.vercel.app/",
    title: "Todo List",
  },
  {
    link: "https://movie-site-mauve-one.vercel.app/",
    title: "Movie App",
  },
];

const ImageGrid = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div
          ref={(el) => (imageRefs.current[index] = el)}
          className={`rounded-xl flex items-center justify-center relative overflow-hidden p-4 opacity-0 transform transition duration-1000 ease-in-out `}
          key={index}
        >
          <img
            className={`rounded-2xl object-cover w-full h-full`}
            src={src}
            alt={`Project ${index + 1}`}
          />
          <div
            className={`absolute inset-0 bg-[rgba(152,56,65,0.4)] transition duration-300 ease-in-out flex items-center justify-center text-center font-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-[rgba(152,56,65,0.1)] ${
              index === 0 ? "" : "hover:cursor-pointer"
            }`}
            onClick={() => window.open(links[index]?.link)}
          >
            {index === 0 ? "Coming Soon" : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
