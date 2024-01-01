// controllers/ordersController.js

const orderService = require('../services/orderService');

const ordersController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const orderId = req.params.id;
            const order = await orderService.getOrderById(orderId);
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createOrder: async (req, res) => {
        try {
            const newOrder = await orderService.createOrder(req.body);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const updatedOrder = await orderService.updateOrder(orderId, req.body);
            if (updatedOrder) {
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            await orderService.deleteOrder(orderId);
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = ordersController;
