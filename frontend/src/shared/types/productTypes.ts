export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  availability?: string;
  spiciness?: string;
  slug: string;
}