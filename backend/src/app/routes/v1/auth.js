'use strict';

const express = require('express');
const auth = require('../../middlewares/auth.js');
const authController = require('../../controllers/auth.js');

const router = express.Router();

router.post('/signin', authController.signin.bind(authController));
router.post('/signout', auth, authController.signout.bind(authController));

module.exports = router;
