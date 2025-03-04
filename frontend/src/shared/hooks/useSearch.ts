import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { ProductProps } from "../../shared/types";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSearchResults = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get<ProductProps[]>(
        `${import.meta.env.VITE_API_URL}/search?q=${searchQuery}`
      );
      setResults(data);
      setIsOpen(data.length > 0);
    } catch (err) {
      setError("Помилка пошуку");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce(fetchSearchResults, 300),
    []
  );

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      debouncedSearch(value);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return {
    query,
    results,
    loading,
    error,
    isOpen,
    handleInputChange,
    setIsOpen,
    setQuery,
  };
}
