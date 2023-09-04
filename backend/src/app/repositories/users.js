'use strict';

const users = [
  {
    id: 1,
    email: 'nopermission@mail.com',
    password: '$2b$10$N/U/wYGDsLQBNnHNxTOMtOAQ0AESXdpE5v85CSHx3ei5dKgnAJGAe',
    roles: [],
  },
  {
    id: 2,
    email: 'reader@mail.com',
    password: '$2b$10$bjt8ZaOHp.HBLJ1Wcoh9nOIU16zJzcDDw9HXG.1KZY2D9zi1p/BcO',
    roles: ['reader'],
  },
  {
    id: 3,
    email: 'writer@mail.com',
    password: '$2b$10$Ne6XppfTV1DI1wZmlFAjzuH.EEfCbDZEMAFdKbwFJS8GkuQqCfflK',
    roles: ['writer'],
  },
];

class UsersRepository {
  constructor() {}

  get(id) {
    return users.find((user) => user.id === id) ?? null;
  }

  getByEmail(email) {
    return users.find((user) => user.email === email) ?? null;
  }
}

module.exports = new UsersRepository();
