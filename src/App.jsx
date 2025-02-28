import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieNav from "./components/MovieNav";
import Main from "./pages/Movie/Main";

import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Project = lazy(() => import("./pages/Project"));
const Favorites = lazy(() => import("./pages/Movie/Favorites"));
const History = lazy(() => import("./pages/Movie/History"));

const App = () => {
  const location = useLocation();
  const isMainPage =
    location.pathname.startsWith("/main") ||
    location.pathname.startsWith("/favorites") ||
    location.pathname.startsWith("/history");

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <Suspense>
                <Project />
              </Suspense>
            }
          />
        </Routes>

        {isMainPage && (
          <MovieProvider>
            <MovieNav />
            <main>
              <Routes>
                <Route
                  path="/main"
                  element={
                    <ErrorBoundary>
                      <Main />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <ErrorBoundary>
                      <Suspense fallback={<div>Loading Favorites...</div>}>
                        <Favorites />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <ErrorBoundary>
                      <Suspense fallback={<div>Loading History...</div>}>
                        <History />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
              </Routes>
            </main>
          </MovieProvider>
        )}
      </main>
    </>
  );
};

export default App;
