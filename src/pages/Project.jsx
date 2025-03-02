import "./Project.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import SamsungClone from "../assets/Project7.png";
import Todo from "../assets/Todo.png";
import MovieSite from "../assets/Movie-site.png";

const Project = () => {
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  const projects = [
    {
      title: "Samsung Clone",
      description:
        "Clone Samsung Web Application using ReactJS <br /> <br /> ..On Going",
      image: SamsungClone,
      alt: "Samsung Clone App",
      link: null,
    },
    {
      title: "Todo",
      description: "Todo Web Application using ReactJS",
      image: Todo,
      alt: "Todo App",
      link: "https://todo-seven-rouge.vercel.app/",
    },
    {
      title: "Movie Site",
      description: "Movie Web Application using ReactJS",
      image: MovieSite,
      alt: "Movie Site App",
      link: "https://movie-site-mauve-one.vercel.app/",
    },
  ];

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

    textRefs.current.forEach((text) => {
      if (text) observer.observe(text);
    });

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      textRefs.current.forEach((text) => {
        if (text) observer.unobserve(text);
      });

      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <section className="project container mt-20" id="project">
        <div className="flex items-center justify-center sticky  z-[999] top-15 bg-red-800 h-15 w-full">
          <h1 className="text-light dark:text-dark">
            These are some of my projects hosting on{" "}
            <a
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-dark dark:text-light"
            >
              vercel.com/home
            </a>{" "}
            feel free to check it out
          </h1>
        </div>
        <div className="p-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div
                className="flex flex-col items-center justify-center opacity-0"
                ref={(el) => (textRefs.current[index] = el)}
              >
                <h4 className="text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase mb-4">
                  {project.title}
                </h4>
                <p
                  className="text-slate-500 text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-light tracking-tighter leading-[0.9rem] text-center"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
              <div className="p-4"></div>
              <div className="flex flex-col items-center justify-center">
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="object-cover opacity-0 rounded-2xl transform transition duration-1000 ease-in-out hover:cursor-pointer"
                  src={project.image}
                  alt={project.alt}
                  onClick={() => project.link && window.open(project.link)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="p-10"></div>
        <div className="w-full flex items-center justify-center ">
          <Footer />
        </div>
        <div className="p-10"></div>
      </section>
    </div>
  );
};

export default Project;
