import { useParams } from "react-router-dom";
import { ProductProps } from "../shared/types/productTypes";
import useFetchProducts from "../shared/hooks/useFetchProducts";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();

  const { data: product, loading, error } = useFetchProducts<ProductProps>(
      `${import.meta.env.VITE_API_URL}/api/products/slug/${slug}`
    );
  
    if (loading) return <div></div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
    </div>
  );
}
