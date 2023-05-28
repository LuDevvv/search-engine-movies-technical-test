import { ListOfMovies } from "./ListOfMovies";
import { NoMoviesResults } from "./NoResults";

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length >= 0;
  return (
    <main className="movies-results">
      {hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />}
    </main>
  );
};
