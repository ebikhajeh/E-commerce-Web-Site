// controllers/shippingDetailsController.js

const shippingDetailsService = require('../services/shippingDetailsService');

const shippingDetailsController = {
    getAllShippingDetails: async (req, res) => {
        try {
            const shippingDetails = await shippingDetailsService.getAllShippingDetails();
            res.status(200).json(shippingDetails);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getShippingDetailById: async (req, res) => {
        try {
            const shippingId = req.params.id;
            const shippingDetail = await shippingDetailsService.getShippingDetailById(shippingId);
            if (shippingDetail) {
                res.status(200).json(shippingDetail);
            } else {
                res.status(404).json({ message: 'Shipping detail not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createShippingDetail: async (req, res) => {
        try {
            const newShippingDetail = await shippingDetailsService.createShippingDetail(req.body);
            res.status(201).json(newShippingDetail);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateShippingDetail: async (req, res) => {
        try {
            const shippingId = req.params.id;
            const updatedShippingDetail = await shippingDetailsService.updateShippingDetail(shippingId, req.body);
            if (updatedShippingDetail) {
                res.status(200).json(updatedShippingDetail);
            } else {
                res.status(404).json({ message: 'Shipping detail not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteShippingDetail: async (req, res) => {
        try {
            const shippingId = req.params.id;
            await shippingDetailsService.deleteShippingDetail(shippingId);
            res.status(200).json({ message: 'Shipping detail deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = shippingDetailsController;
