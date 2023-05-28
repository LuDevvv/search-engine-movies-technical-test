import { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { FormSearch } from './Components/FormSearch';
import { FormFilters } from './Components/FormFilters';
import { Movies } from './Components/Movies';
import './App.css';

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
      <header>
        <h1 className="app-title">Search Movies App 🍿</h1>
        <FormSearch
          query={query}
          error={error}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <FormFilters handleSort={handleSort} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      {loading ? <p>Loading...</p> : <Movies movies={movies} />}
    </div>
  );
}
export default App;
