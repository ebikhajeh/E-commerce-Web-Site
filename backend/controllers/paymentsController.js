// controllers/paymentsController.js

const paymentService = require('../services/paymentService');

const paymentsController = {
    getAllPayments: async (req, res) => {
        try {
            const payments = await paymentService.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getPaymentById: async (req, res) => {
        try {
            const paymentId = req.params.id;
            const payment = await paymentService.getPaymentById(paymentId);
            if (payment) {
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createPayment: async (req, res) => {
        try {
            const newPayment = await paymentService.createPayment(req.body);
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updatePayment: async (req, res) => {
        try {
            const paymentId = req.params.id;
            const updatedPayment = await paymentService.updatePayment(paymentId, req.body);
            if (updatedPayment) {
                res.status(200).json(updatedPayment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deletePayment: async (req, res) => {
        try {
            const paymentId = req.params.id;
            await paymentService.deletePayment(paymentId);
            res.status(200).json({ message: 'Payment deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = paymentsController;
