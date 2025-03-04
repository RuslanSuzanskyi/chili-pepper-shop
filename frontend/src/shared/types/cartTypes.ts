import { ProductProps } from "./productTypes";

export interface CartItem extends ProductProps {
  quantity: number; 
};

export interface CartStore {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};