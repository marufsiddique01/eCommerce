const express = require('express');
const cors = require('cors');
const { protect } = require('../middlewares/authMiddleware');

const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/usersController');

const router = express.Router();

//post email and password

router.post('/login', authController);

//get user profile or private route

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//registration

router.route('/').post(registerUser);

module.exports = router;
