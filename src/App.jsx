import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { useFilters } from './hooks/useFilters';
import { FormSearch } from './Components/FormSearch';
import { FormFilters } from './Components/FormFilters';
import { Movies } from './Components/Movies';
import './App.css';

function App() {
  const { query, error, setQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query });
  const {
    sortedMovies,
    handleSortByTitle,
    handleSortByYear,
    handleSortByOptions,
  } = useFilters({
    movies,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <div className="app">
      <header className="header-app">
        <h1 className="app-title">Search Movie App 🍿</h1>
        <br />
        <FormSearch
          query={query}
          error={error}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <FormFilters
          handleSortByTitle={handleSortByTitle}
          handleSortByYear={handleSortByYear}
          handleSortByOptions={handleSortByOptions}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      {loading ? <p>Loading...</p> : <Movies movies={sortedMovies} />}
    </div>
  );
}
export default App;
