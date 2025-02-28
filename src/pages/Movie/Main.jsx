import MovieCard from "../../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../../services/api";
import { Link } from "react-router-dom";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <>
      <div className="home px-0 py-4 sm:py-8 sm:px-0 w-full box-border mt-20">
        <form
          onSubmit={handleSearch}
          className="search-form max-w-[600px] mb-4 sm:mt-0 sm:mb-auto mx-8 flex gap-4 px-4 py-0 box-border"
        >
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input flex-1 rounded-sm text-base focus:outline-0 focus:bg-transparent focus:text-button py-[10px] px-[10px] md:py-[15px] md:px-[30px] bg-button border-[2px] border-button border-solid shadow-button sm:text-sm md:text-base  font-black text-dark pointer mr-[15px] transition-[0.3s] text-nowrap hover:bg-transparent hover:shadow-none hover:text-button"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
          <button
            type="submit"
            autoFocus
            className="inline-block py-[10px] px-[18px] sm:py-[12.5px] sm:px-[22.5px] md:py-[15px] md:px-[30px] bg-light border-[2px] border-light border-solid shadow-light text-xs sm:text-sm md:text-base font-black  pointer mr-[15px] transition-[0.3s] text-nowrap hover:bg-transparent hover:shadow-none  !text-dark hover:!text-light transition-none"
          >
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div
            className={` ${
              movies.length < 5
                ? "movies-flex flex gap-4 w-full mt-4 justify-start"
                : "movies-grid grid grid-cols-auto-fit-minmax gap-6 w-full p-4 mt-4 box-border"
            } animate-[fadeIn] duration-300`}
          >
            {movies.map(
              (movie) =>
                movie.title.toLowerCase().startsWith(searchQuery) && (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    isHistoryPage={false}
                  />
                )
            )}
          </div>
        )}
      </div>
      <div className="sticky flex items-center justify-center rounded-2xl bottom-10 right-10 bg-light text-dark w-10 h-10 ">
        <Link to="/">
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Main;
