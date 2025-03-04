import { useRef } from "react";
import SearchBar from "./SearchBar";
import useSearch from "../../../hooks/useSearch";
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import SearchResults from "./SeachResults";

export default function Search() {
  const {
    query,
    results,
    loading,
    error,
    isOpen,
    handleInputChange,
    setIsOpen,
    setQuery,
  } = useSearch();

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setQuery("");
  });

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <SearchBar query={query} onInputChange={handleInputChange} />
      {isOpen && (
        <SearchResults
          results={results}
          loading={loading}
          error={error}
          setIsOpen={setIsOpen}
          setQuery={setQuery}
        />
      )}
    </div>
  );
}
