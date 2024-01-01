// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.ProductID}`} >
            <div className="card h-100">
                <img src={product.ImageURLs[0]} className="card-img-top" alt={product.Name} />
                <div className="card-body">
                    <h5 className="card-title">{product.Name}</h5>
                    <p className="card-text">${product.Price}</p>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </Link>
        
    );
};

export default ProductCard;
