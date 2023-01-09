const express = require('express');
const { getAllUsers, getUserById, deleteUserById, updateUserById, createUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.post('/users',createUser)
router.put('/users/:id',updateUserById)
router.delete('/users/:id',deleteUserById)

module.exports = router