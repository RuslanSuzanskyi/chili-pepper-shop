import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get<string[]>(`${import.meta.env.VITE_API_URL}/api/products/category`);
        setCategories(data);
      } catch (err) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
