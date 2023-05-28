import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Form } from "./Components/Form";
import { Movies } from "./Components/Movies";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { query, error, setQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="app">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <header>
          <h1 className="app-title">Search Movies App 🍿</h1>
          <Form
            query={query}
            error={error}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleSort={handleSort}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>
        {loading ? <Skeleton /> : <Movies movies={movies} />}
      </SkeletonTheme>
    </div>
  );
}
export default App;
