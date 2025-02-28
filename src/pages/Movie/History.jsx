import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../../components/MovieCard";

const History = () => {
  const { histories } = useMovieContext();
  if (histories && histories.length > 0) {
    return (
      <div className="histories p-8 w-full box-border">
        <div>
          <h2 className="mb-8 text-center text-[2.5rem] text-light">
            Your Histories
          </h2>
        </div>
        <div
          className={` ${
            histories.length < 5
              ? "movies-flex flex gap-4 w-full mt-4 justify-start"
              : "movies-grid grid grid-cols-auto-fit-minmax gap-6 w-full p-4 mt-4 box-border"
          } animate-[fadeIn] duration-300`}
        >
          {histories.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isHistoryPage={true} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="history-empty text-center px-8 py-16 bg-[255,255,255,0.05] rounded-xl mx-auto my-8 max-w-[600px]">
      <h2 className="mb-4 text-[2rem] text-slate-600 ">History is empty</h2>
      <p className="text-light text xl leading-7">start watching movies</p>
    </div>
  );
};

export default History;
