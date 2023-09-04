'use strict';

const jwt = require('jsonwebtoken');
const usersService = require('../services/users.js');

class ProfileController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  get(req, res) {
    res.status(200).json({ user: req.user });
  }
}

module.exports = new ProfileController(usersService);
