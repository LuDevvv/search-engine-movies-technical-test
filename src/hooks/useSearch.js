import { useState, useRef, useEffect } from "react";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query.trim() === "") {
      setError("You can't search a movie without a name");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("You can't search a movie with numbers");
      return;
    }

    if (query.length <= 2) {
      setError("You can't search a movie with less than 3 characters");
      return;
    }

    setError(null);
  }, [query]);

  return { query, error, setQuery };
};
