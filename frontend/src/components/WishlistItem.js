// components/WishlistItem.js
import React from 'react';
import wishlistService from '../services/wishListService';

const WishlistItem = ({ item }) => {
    const handleRemove = async () => {
        try {
            await wishlistService.removeWishItem(item.WishID);
            // Optionally update state or UI to reflect the removal
        } catch (error) {
            console.error('Error removing item from wishlist', error);
            // Handle error
        }
    };

    return (
        <div className='containar'>
            <div className='row col-lg-4'></div>
            <div className='row col-lg-4 offset-lg-4'>
                <table className="table">
                    <tbody>
                        <tr className="wishlist-item">
                            <td>
                                <img src={item.ImageURL} alt={item.title} style={{ width: '100px' }} />
                            </td>
                            <td>{item.Name}</td>
                            <td>{item.WishID}</td>
                            <td>{item.Description}</td>
                            <td>${item.Price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleRemove(item.WishID)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishlistItem;
