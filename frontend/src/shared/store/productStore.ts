import { create } from 'zustand';
import axios from 'axios';
import { ProductProps } from '../types';

interface ProductStore {
  products: ProductProps[];
  searchResults: ProductProps[];
  productDetails: ProductProps | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductBySlug: (slug: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  searchResults: [],
  productDetails: null,
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<ProductProps[]>(`${import.meta.env.VITE_API_URL}`);
      set({ products: response.data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch products', loading: false });
    }
  },

  fetchProductBySlug: async (slug: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<ProductProps>(`${import.meta.env.VITE_API_URL}/slug/${slug}`);
      set({ productDetails: response.data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch product details', loading: false });
    }
  },

  searchProducts: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<ProductProps[]>(`${import.meta.env.VITE_API_URL}/search?q=${query}`);
      set({ searchResults: response.data, loading: false });
    } catch (err) {
      set({ error: 'Failed to search products', loading: false });
    }
  },
}));

export default useProductStore;