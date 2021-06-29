const express = require('express');
const cors = require('cors');

const { authController } = require('../controllers/usersController');

const router = express.Router();

//post email and password

router.post('/login', authController);

module.exports = router;
