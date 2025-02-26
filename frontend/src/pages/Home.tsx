import { Link } from 'react-router-dom';
import useFetchProducts from '../shared/hooks/useFetchProducts';
import { ProductProps } from '../shared/types/productTypes';

export default function Home () {
  const { data: products, loading, error } = useFetchProducts<ProductProps[]>(
    `${import.meta.env.VITE_API_URL}/api/products`
  );

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products?.map(product => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.slug}`}>View Details</Link>
          </li>
        )) ?? []}
      </ul>
    </div>
  );
};
