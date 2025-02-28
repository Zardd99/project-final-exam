import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../../components/MovieCard";
const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites p-8 w-full box-border">
        <div>
          <h2 className="mb-8 text-center text-[2.5rem] text-light">
            Your Favorite Movies
          </h2>
        </div>
        <div
          className={` ${
            favorites.length < 5
              ? "movies-flex flex gap-4 w-full mt-4 justify-start"
              : "movies-grid grid grid-cols-auto-fit-minmax gap-6 w-full p-4 mt-4 box-border"
          } animate-[fadeIn] duration-300`}
        >
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorite-empty text-center px-8 py-16 bg-[255,255,255,0.05] rounded-xl mx-auto my-8 max-w-[600px]">
      <h2 className="mb-4 text-[2rem] text-slate-600">
        No favorite movies yet
      </h2>
      <p className="text-[#999] text-xl leading-7">
        Start adding Movies fav...
      </p>
    </div>
  );
};

export default Favorites;
