const bcrypt = require('bcryptjs');

const Users = [
  {
    name: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234567', 10),
    isAdmin: true,
  },
  {
    name: 'pipo',
    email: 'pipo@xyz.com',
    password: bcrypt.hashSync('1234567', 10),
  },
  {
    name: 'user',
    email: 'user@user.com',
    password: bcrypt.hashSync('1234567', 10),
  },
];

module.exports = Users;
