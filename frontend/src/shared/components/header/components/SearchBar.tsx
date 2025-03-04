interface SearchBarProps {
  query: string;
  onInputChange: (value: string) => void;
}

export default function SearchBar({ query, onInputChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Пошук товарів..."
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
