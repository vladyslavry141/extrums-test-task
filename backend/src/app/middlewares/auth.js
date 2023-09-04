'use strict';

const jwt = require('jsonwebtoken');
const configs = require('../../configs/jwt.js');

module.exports = (req, res, next) => {
  const token = req.cookies['accessToken'];

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized, token does not exists',
    });
  }

  try {
    const { id, email, roles } = jwt.verify(token, configs.secretKey);
    req.user = { id, email, roles };

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Cannot verify JWT. ' + error.message });
  }
};
