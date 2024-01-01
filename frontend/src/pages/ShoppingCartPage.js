// pages/ShoppingCartPage.js
import React, { useEffect, useState } from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import shoppingCartService from '../services/shoppingCartService';

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await shoppingCartService.getUserCartItems();
            setCartItems(items);
        };

        fetchCartItems();
    }, []);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <ShoppingCartItem key={item.CartID} item={item} />
                ))
            )}
        </div>
    );
};

export default ShoppingCartPage;
