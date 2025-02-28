import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../shared/store/productStore';
import LazyImage from '../shared/components/LazyImage';

export default function Home() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <LazyImage src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`${product.category.slug}/${product.slug}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}