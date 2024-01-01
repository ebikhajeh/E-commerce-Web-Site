// controllers/wishListController.js

const wishListService = require('../services/wishListService');

const wishListController = {
    getAllWishItems: async (req, res) => {
        try {
            const wishItems = await wishListService.getAllWishItems();
            res.status(200).json(wishItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUserWishList: async (req, res) => {
        try {
            const userId = req.user.userId;
            const cartItems = await wishListService.getUserWishList(userId);
            res.status(200).json(cartItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getWishItemById: async (req, res) => {
        try {
            const wishItemId = req.params.id;
            const wishItem = await wishListService.getWishItemById(wishItemId);
            if (wishItem) {
                res.status(200).json(wishItem);
            } else {
                res.status(404).json({ message: 'Wish item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addWishItem: async (req, res) => {
        try {
            const newWishItem = await wishListService.addWishItem(req.body);
            res.status(201).json(newWishItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateWishItem: async (req, res) => {
        try {
            const wishItemId = req.params.id;
            const updatedWishItem = await wishListService.updateWishItem(wishItemId, req.body);
            if (updatedWishItem) {
                res.status(200).json(updatedWishItem);
            } else {
                res.status(404).json({ message: 'Wish item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    removeWishItem: async (req, res) => {
        try {
            const wishItemId = req.params.id;
            await wishListService.removeWishItem(wishItemId);
            res.status(200).json({ message: 'Wish item removed successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = wishListController;
