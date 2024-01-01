// components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import productService from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await productService.getAllProducts();
            setProducts(fetchedProducts);
        };

        fetchProducts();
       
    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <ProductCard key={product.ProductID} product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
