import { create } from 'zustand';
import axios from 'axios';
import { ProductProps } from '../types';

interface ProductStore {
  products: ProductProps[];
  productDetails: ProductProps | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductBySlug: (slug: string) => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
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
}));

export default useProductStore;