'use strict';

const hasRoles = (possibleRoles) => (req, res, next) => {
  const userRoles = req.user?.roles ?? [];

  if (!userRoles.some((role) => possibleRoles.includes(role))) {
    return res.status(403).json({ message: 'Insufficient permission' });
  }

  next();
};

exports.hasReadPermission = hasRoles(['reader', 'writer']);
exports.hasWritePermission = hasRoles(['writer']);
