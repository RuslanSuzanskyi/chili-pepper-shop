import { Link } from "react-router-dom";
import LazyImage from "../../shared/components/LazyImage";
import { ProductCardProps } from "../../shared/types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <div className="w-80 h-80">
        <Link to={`${product.category.slug}/${product.slug}`}>
          <LazyImage src={product.image} alt={product.name} aria-hidden="true" />
        </Link>
      </div>
      <div>
        <Link to={`${product.category.slug}/${product.slug}`}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </Link>
      </div>
    </article>
  );
}