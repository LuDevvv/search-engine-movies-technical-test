export const FormSearch = ({ handleChange, handleSubmit, query, error }) => {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Avengers, The Matrix, Star Wars..."
          className="form-input"
          onChange={handleChange}
          value={query}
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent',
          }}
        />
        <button
          disabled={error ? true : false}
          type="submit"
          className="form-button"
        >
          Search
        </button>
      </form>
      <br />
    </>
  );
};
