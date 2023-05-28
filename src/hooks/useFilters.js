import { useEffect, useState, useMemo } from 'react';

export const useFilters = ({ movies }) => {
  const [sortByTitle, setSortByTitle] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);

  //   console.log({
  //     sortByTitle,
  //     sortByYear,
  //   });
  const handleSortByTitle = () => {
    setSortByTitle(!sortByTitle);
  };

  const handleSortByYear = () => {
    setSortByYear(!sortByYear);
  };

  const sortedMovies = useMemo(() => {
    if (sortByYear) {
      return [...movies].sort((a, b) => b.year - a.year);
    }
    if (sortByTitle) {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    }

    if ((sortByTitle && sortByYear) || (sortByYear && sortByTitle)) {
      return [...movies]
        .sort((a, b) => a.title.localeCompare(b.title))
        .sort((a, b) => a.year - b.year);
    }

    return movies;
  }, [movies, sortByTitle, sortByYear]);

  return { movies: sortedMovies, handleSortByTitle, handleSortByYear };
};
