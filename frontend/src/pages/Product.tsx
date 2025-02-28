import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../shared/store/productStore';

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const { productDetails, loading, error, fetchProductBySlug } = useProductStore();

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug);
    }
  }, [slug, fetchProductBySlug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productDetails) return <div>Product not found</div>;

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <p>{productDetails.description}</p>
      <p>${productDetails.price}</p>
      <img src={productDetails.image} alt={productDetails.name} style={{ width: '200px' }} />
    </div>
  );
}