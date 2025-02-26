// import { useState } from "react";
// import useSearchProducts from "../hooks/useSeachProducts";

// export default function SeachInput() {
//   const [query, setQuery] = useState("");
//   const { data: products, loading, error } = useSearchProducts(query, {});

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}

//       {products?.length ? (
//         <ul>
//           {products.map((product) => (
//             <li key={product._id}>
//               {product.name} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products found</p>
//       )}
//     </div>
//   );
// }
