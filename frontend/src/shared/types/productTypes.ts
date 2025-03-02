export interface CategoryProps {
  _id: string;
  name: string;
  slug: string;
};

export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryProps;
  image: string;
  availability?: string;
  spiciness?: string;
  slug: string;
};

export interface ProductCardProps {
  product: ProductProps;
};

export interface ProductListProps {
  products: ProductProps[];
};

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};