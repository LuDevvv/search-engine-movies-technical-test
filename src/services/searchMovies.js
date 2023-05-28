export const searchMovies = async ({ query }) => {
  if (query === "") return null;

  try {
    const API_KEY = import.meta.env.VITE_OMDb_APIKEY;
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const { Search } = await res.json();

    return Search?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error("Error searching the movie");
  }
};
