// controllers/reviewsController.js

const reviewService = require('../services/reviewService');

const reviewsController = {
    getAllReviews: async (req, res) => {
        try {
            const reviews = await reviewService.getAllReviews();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getReviewById: async (req, res) => {
        try {
            const reviewId = req.params.id;
            const review = await reviewService.getReviewById(reviewId);
            if (review) {
                res.status(200).json(review);
            } else {
                res.status(404).json({ message: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createReview: async (req, res) => {
        try {
            const newReview = await reviewService.createReview(req.body);
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateReview: async (req, res) => {
        try {
            const reviewId = req.params.id;
            const updatedReview = await reviewService.updateReview(reviewId, req.body);
            if (updatedReview) {
                res.status(200).json(updatedReview);
            } else {
                res.status(404).json({ message: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteReview: async (req, res) => {
        try {
            const reviewId = req.params.id;
            await reviewService.deleteReview(reviewId);
            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = reviewsController;
