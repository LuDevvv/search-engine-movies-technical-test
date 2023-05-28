export const FormFilters = ({ handleSort }) => {
  return (
    <form className="filters">
      <div>
        <input type="checkbox" name="sort-by-title" onChange={handleSort} />
        <label htmlFor="sort-by-title">Sort movies by title 🔤</label>
      </div>
      <div>
        <input type="checkbox" name="sort-by-year" onChange={handleSort} />
        <label htmlFor="sort-by-year">Sort movies by year 📅</label>
      </div>

      <div>
        <select id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </form>
  );
};
