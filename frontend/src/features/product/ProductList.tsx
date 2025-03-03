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
    <ul className="flex flex-wrap">
      {products.map((product) => (
        <li key={product._id} className="w-full sm:w-[calc(50%-0.8rem)] md:w-[calc(33.333%-0.8rem)] lg:w-[calc(25%-0.8rem)]">
            <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}