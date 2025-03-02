import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({
  movie,
  isHistoryPage = false,
  isPopular = false,
  index,
}) => {
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    isHistory,
    addToHistories,
    removeFromHistories,
  } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const history = isHistory(movie.id);

  function handleClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else addToFavorites(movie);
  }

  function handleHistoryClick(e) {
    e.preventDefault();
    if (history) {
      return;
    } else addToHistories(movie);
  }

  function handleRemoveHistories(e) {
    e.preventDefault();
    removeFromHistories(movie.id);
  }

  return (
    <>
      <div className="movie-card group relative rounded-lg overflow-hidden bg-dark transition-[transform] duration-200 h-full flex flex-col hover:transform-[transitionY(-5px)] text-[0.9rem] md:text-base max-w-[500px]">
        {isPopular && (
          <div className="popular-index absolute top-2 left-2 bg-dark rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-[999]">
            {index}
          </div>
        )}
        <div
          className="movie-poster relative aspect-[2/3] w-full active:opacity-80"
          onClick={handleHistoryClick}
        >
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay absolute top-0 left-0 right-0 bottom-0 bg-gradient opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 group-hover:opacity-100">
            {isHistoryPage && (
              <button
                className="History absolute top-4 left-4 text-light text-xl md:text-2xl p-2 bg-dark rounded-[50%] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-[background-color] duration-200 hover:bg-dark active:text-red-400"
                onClick={handleRemoveHistories}
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="movie-info p-3 md:p-4 flex-1 flex justify-between g-2 ">
          <div
            className="flex flex-col
          gap-2 overflow-hidden"
          >
            <h3 className="text-base m-0">{movie.title}</h3>
            <p className="...">{movie.release_date?.split("-")[0]}</p>
          </div>
          <div>
            <button
              className={`favorite-btn ${
                favorite ? "active" : ""
              }text-light text-xl md:text-2xl p-2 bg-dark rounded-[50%] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-[background-color] duration-200 hover:bg-dark active:text-red-400`}
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 ${favorite ? "fill-light" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
