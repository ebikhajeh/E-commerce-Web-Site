// controllers/orderDetailsController.js

const orderDetailsService = require('../services/orderDetailsService');

const orderDetailsController = {
    getAllOrderDetails: async (req, res) => {
        try {
            const orderDetails = await orderDetailsService.getAllOrderDetails();
            res.status(200).json(orderDetails);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getOrderDetailById: async (req, res) => {
        try {
            const orderDetailId = req.params.id;
            const orderDetail = await orderDetailsService.getOrderDetailById(orderDetailId);
            if (orderDetail) {
                res.status(200).json(orderDetail);
            } else {
                res.status(404).json({ message: 'Order detail not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createOrderDetail: async (req, res) => {
        try {
            const newOrderDetail = await orderDetailsService.createOrderDetail(req.body);
            res.status(201).json(newOrderDetail);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateOrderDetail: async (req, res) => {
        try {
            const orderDetailId = req.params.id;
            const updatedOrderDetail = await orderDetailsService.updateOrderDetail(orderDetailId, req.body);
            if (updatedOrderDetail) {
                res.status(200).json(updatedOrderDetail);
            } else {
                res.status(404).json({ message: 'Order detail not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteOrderDetail: async (req, res) => {
        try {
            const orderDetailId = req.params.id;
            await orderDetailsService.deleteOrderDetail(orderDetailId);
            res.status(200).json({ message: 'Order detail deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = orderDetailsController;
