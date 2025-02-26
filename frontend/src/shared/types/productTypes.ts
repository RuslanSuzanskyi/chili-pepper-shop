export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  availability?: string;
  spiciness?: string;
  slug: string;
}