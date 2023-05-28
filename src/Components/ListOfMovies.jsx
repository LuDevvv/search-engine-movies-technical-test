export const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(({ id, title, poster, year, type }) => {
        return (
          <li key={id} className="movie">
            <h3 className="movie-title">{title}</h3>
            <img src={poster} alt={title} className="movie-image" />
            <p className="movie-year">Year: {year}</p>
            <p className="movie-type">Type: {type}</p>
          </li>
        );
      })}
    </ul>
  );
};
