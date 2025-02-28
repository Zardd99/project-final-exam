import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const storedHistories = localStorage.getItem("histories");

    if (storedHistories) {
      setHistories(JSON.parse(storedHistories));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("histories", JSON.stringify(histories));
  }, [histories]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToHistories = (movie) => {
    if (!histories.includes(movie)) {
      setHistories((prev) => [movie, ...prev]);
    }
  };
  const removeFromHistories = (movieId) => {
    setHistories((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isHistory = (movieId) => {
    return histories.some((m) => m.id === movieId);
  };

  const addToFavorites = (movie) => {
    if (!favorites.includes(movie)) setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((m) => m.id === movieId);
  };

  const value = {
    histories,
    addToHistories,
    removeFromHistories,
    isHistory,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
