import { useState, useMemo } from 'react';

export const useFilters = ({ movies }) => {
  const [sortByTitle, setSortByTitle] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);
  const [sortByOptions, setSortByOptions] = useState('');

  const handleSortByTitle = () => {
    if (movies.length === 0) return;
    setSortByTitle(!sortByTitle);
  };

  const handleSortByYear = () => {
    if (movies.length === 0) return;
    setSortByYear(!sortByYear);
  };

  const handleSortByOptions = (e) => {
    setSortByOptions(e.target.value);
  };

  // const sortedMoviesByOptions = useMemo(() => {
  //   if (sortByOptions === 'movie') {
  //     return movies.filter((movie) => movie.type === 'movie');
  //   }

  //   if (sortByOptions === 'series') {
  //     return movies.filter((movie) => movie.type === 'series');
  //   }

  //   if (sortByOptions === 'game') {
  //     return movies.filter((movie) => movie.type === 'game');
  //   }

  //   return movies;
  // }, [movies, sortByOptions]);

  const sortedMovies = useMemo(() => {
    // Ordenar por título y año
    if (sortByTitle && sortByYear) {
      return [...movies].sort((a, b) => {
        if (a.title === b.title) {
          // Si los títulos son iguales, ordenar por año
          return a.year - b.year;
        } else {
          // Si los títulos son diferentes, ordenar por título
          return a.title.localeCompare(b.title);
        }
      });
    }
    // Ordenar solo por título
    else if (sortByTitle) {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    }
    // Ordenar solo por año
    else if (sortByYear) {
      return [...movies].sort((a, b) => b.year - a.year);
    }

    return movies;
  }, [movies, sortByTitle, sortByYear]);

  return {
    sortedMovies,
    handleSortByTitle,
    handleSortByYear,
    handleSortByOptions,
  };
};
