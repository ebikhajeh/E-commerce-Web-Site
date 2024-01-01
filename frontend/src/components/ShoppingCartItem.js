// components/ShoppingCartItem.js
import React from 'react';

const ShoppingCartItem = ({ item }) => {
    return (
        <div className="shopping-cart-item">
            <h3>{item.ProductID}</h3>
            <p>Quantity: {item.Quantity}</p>
            <p>Price: ${item.Price}</p>
            {/* Add more details or actions like remove item */}
        </div>
    );
};

export default ShoppingCartItem;
