'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ajv = require('../lib/ajv.js');
const configs = require('../../configs/jwt.js');
const usersService = require('../services/users.js');

const LOGIN_BODY_SCHEMA_ID = '#user/login';
const loginBodySchema = {
  $id: LOGIN_BODY_SCHEMA_ID,
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 5 },
  },
  required: ['email', 'password'],
};

ajv.addSchema(loginBodySchema);

class AuthController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  signin(req, res) {
    const validateBodyFn = ajv.getSchema(LOGIN_BODY_SCHEMA_ID);

    const isBodyValid = validateBodyFn(req.body);

    const errorMessage = { message: 'Invalid email or password.' };
    if (!isBodyValid) {
      return res.status(400).json(errorMessage);
    }

    const { email, password } = req.body;

    const user = this.usersService.getByEmail(email);

    if (!user) {
      return res.status(400).json(errorMessage);
    }

    bcrypt.compare(password, user.password).then((isPasswordEqual) => {
      if (!isPasswordEqual) {
        return res.status(400).json(errorMessage);
      }

      const payload = { id: user.id, email: user.email, roles: user.roles };
      const token = jwt.sign(payload, configs.secretKey, { expiresIn: '1d' });

      return res
        .cookie('accessToken', token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: 'Lax',
        })
        .status(200)
        .json({ message: 'Logged in successfully', user: payload });
    });
  }

  signout(req, res) {
    return res
      .clearCookie('accessToken', { httpOnly: true, sameSite: 'Lax' })
      .status(200)
      .json({ message: 'Logged out successfully' });
  }
}

module.exports = new AuthController(usersService);
