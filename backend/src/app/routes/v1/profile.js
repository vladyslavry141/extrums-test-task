'use strict';

const express = require('express');
const profileController = require('../../controllers/profile.js');
const auth = require('../../middlewares/auth.js');

const router = express.Router();

router.get('/', auth, profileController.get.bind(profileController));

module.exports = router;
