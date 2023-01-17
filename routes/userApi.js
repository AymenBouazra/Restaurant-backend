const express = require('express');
const passport = require('passport');
const { getAllUsers, getUserById, deleteUserById, updateUserById, createUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/users', passport.authenticate('bearer', { session: false }), getAllUsers)
router.get('/users/:id', passport.authenticate('bearer', { session: false }), getUserById)
router.post('/users', passport.authenticate('bearer', { session: false }), createUser)
router.put('/users/:id', passport.authenticate('bearer', { session: false }), updateUserById)
router.delete('/users/:id', passport.authenticate('bearer', { session: false }), deleteUserById)

module.exports = router