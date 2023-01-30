const express = require('express');
const router = express.Router();
const passport = require('passport');
const uploadImage = require('../common/multer/upload');
const { getAllFood, getFoodById, createFood, updateFoodById, deleteFoodById } = require('../controllers/food.controller');

router.get('/food', passport.authenticate('bearer', { session: false }), getAllFood)
router.get('/food/:id', passport.authenticate('bearer', { session: false }), getFoodById)
router.post('/food', [passport.authenticate('bearer', { session: false }), uploadImage.single('photo')], createFood)
router.put('/food/:id', [passport.authenticate('bearer', { session: false }), uploadImage.single('photo')], updateFoodById)
router.delete('/food/:id', passport.authenticate('bearer', { session: false }), deleteFoodById)

module.exports = router