import { Link } from "react-router-dom";
import { SearchResultsProps } from "../../../types";

export default function SearchResults({ results, loading, error, setIsOpen, setQuery }: SearchResultsProps) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10">
      {loading && <div></div>}

      {!loading && error && <div className="p-2 text-red-500">{error}</div>}

      {!loading && results.length > 0 && (
        <ul className="max-h-60 overflow-y-auto">
          {results.map((product) => (
            <li key={product._id}>
              <Link
                to={`/${product.category.slug}/${product.slug}`}
                className="block p-2 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="p-2 text-gray-500">Нічого не знайдено</div>
      )}
    </div>
  );
}
