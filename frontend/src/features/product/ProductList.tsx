import { useEffect } from "react";
import useProductStore from "../../shared/store/productStore";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
      {products.map((product) => (
        <li key={product._id}>
            <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}