// pages/WishlistPage.js
import React, { useEffect, useState } from 'react';
import WishlistItem from '../components/WishlistItem';
import wishlistService from '../services/wishListService';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const items = await wishlistService.getUserWishListItems();
                setWishlistItems(items);
            } catch (error) {
                console.error('Error fetching wishlist items', error);
                // Handle error
            }
        };
        fetchWishlistItems();
    }, []);

    return (
        <div>
            <h1>My Wishlist</h1>
            {wishlistItems.length ? (
                wishlistItems.map(item => <WishlistItem key={item.WishID} item={item} />)
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
            };

export default WishlistPage;
