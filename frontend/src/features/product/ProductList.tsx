// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import { ProductProps } from '../../shared/types/productTypes';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ProductProps[] = await response.json();
                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        {product.image && <img src={product.image} alt={product.name} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

