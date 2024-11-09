import bcrypt from 'bcryptjs';
//pass 123456
const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Admin aarav',
    email: 'aarav@admin.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123', 10),
  },
];

export default users;
