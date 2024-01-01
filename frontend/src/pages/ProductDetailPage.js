// pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import AddToCartForm from '../components/AddToCartForm';




const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const data = await productService.getProductById(id);
            setProduct(data);
        };
        fetchProduct();
    }, [id]);
    if (!product) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    return (
        <div>
            <h1>{product.Name}</h1>
            <img src={product.ImageURLs[0]} alt={product.Name} style={{ width: '400px' }}/>
            <p>${product.Price}</p>
            <p>{product.Description}</p>
            {/* Include additional product details */}
            <AddToCartForm productId={product.ProductID} />
        </div>
    );
};

export default ProductDetailPage;
