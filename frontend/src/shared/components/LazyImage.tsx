import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { LazyImageProps } from "../types";

export default function LazyImage({ src, alt, className }: LazyImageProps) {{
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect="opacity"
      width="100%" 
      height="100%"
    />
  )
}}