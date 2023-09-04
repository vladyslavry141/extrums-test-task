'use strict';

const express = require('express');
const counterController = require('../../controllers/counter.js');
const historyController = require('../../controllers/history.js');

const auth = require('../../middlewares/auth.js');

const {
  hasReadPermission,
  hasWritePermission,
} = require('../../middlewares/permission.js');

const router = express.Router();

router.get(
  '/',
  [auth, hasReadPermission],
  counterController.get.bind(counterController)
);

router.get(
  '/history',
  [auth, hasReadPermission],
  historyController.get.bind(counterController)
);

router.post(
  '/increment',
  [auth, hasWritePermission],
  counterController.increment.bind(counterController)
);

router.post(
  '/decrement',
  [auth, hasWritePermission],
  counterController.decrement.bind(counterController)
);

module.exports = router;
