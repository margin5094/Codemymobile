const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/signin', userController.postUser);

module.exports = router;
