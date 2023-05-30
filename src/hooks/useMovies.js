import { useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/searchMovies';

export const useMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevQuery = useRef(query);

  const getMovies = useMemo(() => {
    return async () => {
      if (query === prevQuery.current) return;

      try {
        setLoading(true);
        setError(null);
        prevQuery.current = query;
        const newMovies = await searchMovies({ query });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
  }, [query]);

  return { movies, getMovies, loading };
};
