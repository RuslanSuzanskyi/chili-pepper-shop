import { Link } from "react-router-dom";
import LazyImage from "../../shared/components/LazyImage";
import { ProductCardProps } from "../../shared/types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="h-full max-w-full transition-border duration-300 p-[0.8rem]">
      <div className="flex flex-col gap-2">
        <div className="max-w-4xl">
          <Link to={`${product.category.slug}/${product.slug}`}>
            <LazyImage src={product.image} alt={product.name} aria-hidden="true" />
          </Link>
        </div>
        <Link to={`${product.category.slug}/${product.slug}`}>
          <span className="block truncate">{product.name}</span>
        </Link>
        <Link to={`${product.category.slug}/${product.slug}`}>
          <span className="block truncate">Price: ${product.price}</span>
        </Link>
      </div> 
    </article>
  );
}