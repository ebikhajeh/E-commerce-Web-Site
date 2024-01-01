// components/AddToCartForm.js
import React, { useState } from 'react';
import shoppingCartService from '../services/shoppingCartService';
import { useNavigate  } from 'react-router-dom';

const AddToCartForm = ({ productId }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // useHistory hook for navigation


    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData ? userData.userId : '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await shoppingCartService.addCartItem({ userId, productId, quantity });
            console.log('Product added to cart');
            navigate('/cart');
            // Optional: Show success message or redirect
        } catch (error) {
            console.error('Failed to add product to cart', error);
            // Optional: Show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <button type="submit">Add to Cart</button>
        </form>
    );
};

export default AddToCartForm;
