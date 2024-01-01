// controllers/shoppingCartController.js

const shoppingCartService = require('../services/shoppingCartService');



const shoppingCartController = {
    getUserCart: async (req, res) => {
        try {
            const userId = req.user.userId;
            const cartItems = await shoppingCartService.getUserCartItems(userId);
            res.status(200).json(cartItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAllCartItems: async (req, res) => {
        try {
            const cartItems = await shoppingCartService.getAllCartItems();
            res.status(200).json(cartItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCartItemById: async (req, res) => {
        try {
            const cartItemId = req.params.id;
            const cartItem = await shoppingCartService.getCartItemById(cartItemId);
            if (cartItem) {
                res.status(200).json(cartItem);
            } else {
                res.status(404).json({ message: 'Cart item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addCartItem: async (req, res) => {
        try {
            const newCartItem = await shoppingCartService.addCartItem(req.body);
            res.status(201).json(newCartItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateCartItem: async (req, res) => {
        try {
            const cartItemId = req.params.id;
            const updatedCartItem = await shoppingCartService.updateCartItem(cartItemId, req.body);
            if (updatedCartItem) {
                res.status(200).json(updatedCartItem);
            } else {
                res.status(404).json({ message: 'Cart item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    removeCartItem: async (req, res) => {
        try {
            const cartItemId = req.params.id;
            await shoppingCartService.removeCartItem(cartItemId);
            res.status(200).json({ message: 'Cart item removed successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = shoppingCartController;
