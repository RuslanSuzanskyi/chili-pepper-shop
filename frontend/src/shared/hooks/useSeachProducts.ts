import { useState, useEffect } from "react";
import { ProductProps } from "../types/productTypes";

export default function useSearchProducts(query: string, filters: Record<string, string>) {
  const [data, setData] = useState<ProductProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({ query, ...filters }).toString();
      const url = `${import.meta.env.VITE_API_URL}/api/products/search?${params}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, filters]);

  return { data, loading, error };
}
