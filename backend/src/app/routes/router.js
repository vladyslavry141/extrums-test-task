'use strict';

const express = require('express');
const v1 = require('./v1/router.js');
const router = express.Router();

router.use('/api/v1', v1);

module.exports = router;
