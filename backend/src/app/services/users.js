'use strict';

const userRepository = require('../repositories/users.js');

class UsersService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getByEmail(email) {
    return this.userRepository.getByEmail(email);
  }
}

module.exports = new UsersService(userRepository);
