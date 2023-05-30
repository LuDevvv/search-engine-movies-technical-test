export const FormFilters = ({
  handleSortByTitle,
  handleSortByYear,
  handleSortByOptions,
}) => {
  return (
    <form className="filters">
      <section className="checkboxes-filter">
        <div>
          <label htmlFor="sort-by-title">
            <input
              type="checkbox"
              name="sort-by-title"
              onChange={handleSortByTitle}
            />
            Sort movies by title 🔤
          </label>
        </div>

        <div>
          <label htmlFor="sort-by-year">
            <input
              type="checkbox"
              name="sort-by-year"
              onChange={handleSortByYear}
            />
            Sort movies by year 📅
          </label>
        </div>
      </section>

      <section className="options-filter">
        Sort movies by type 🎬:
        <select onChange={handleSortByOptions}>
          <option value="">Seleccione 🔽</option>
          <option value="series">Series 🎬</option>
          <option value="movie">Movie 🍿</option>
          <option value="game">Game 🕹️</option>
        </select>
      </section>
    </form>
  );
};
