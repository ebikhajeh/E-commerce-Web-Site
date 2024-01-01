// controllers/addressesController.js

const addressService = require('../services/addressService');

const addressesController = {
    getAllAddresses: async (req, res) => {
        try {
            const addresses = await addressService.getAllAddresses();
            res.status(200).json(addresses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAddressById: async (req, res) => {
        try {
            const addressId = req.params.id;
            const address = await addressService.getAddressById(addressId);
            if (address) {
                res.status(200).json(address);
            } else {
                res.status(404).json({ message: 'Address not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createAddress: async (req, res) => {
        try {
            const newAddress = await addressService.createAddress(req.body);
            res.status(201).json(newAddress);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateAddress: async (req, res) => {
        try {
            const addressId = req.params.id;
            const updatedAddress = await addressService.updateAddress(addressId, req.body);
            if (updatedAddress) {
                res.status(200).json(updatedAddress);
            } else {
                res.status(404).json({ message: 'Address not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteAddress: async (req, res) => {
        try {
            const addressId = req.params.id;
            await addressService.deleteAddress(addressId);
            res.status(200).json({ message: 'Address deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = addressesController;
