'use strict';

const express = require('express');
const authRouter = require('./auth.js');
const counterRouter = require('./counter.js');
const profileRouter = require('./profile.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/counter', counterRouter);
router.use('/profile', profileRouter);

module.exports = router;
