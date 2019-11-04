'use strict';

const users = [
  {
    userName: '名字1',
    password: '123456',
    id: 1,
  },
  {
    userName: '名字2',
    password: '123456',
    id: 2,
  },
];

class UserModel {
  async list() {
    return users;
  }

  async getOneById(id) {
    const user = users.find(p => +id === p.id);
    return user;
  }

  async addOne(user) {
    if (user) {
      users.push(user);
    }
  }

  async login(username, password) {
    const user = users.find(
      p => username === p.username && password === p.password
    );
    return user;
  }
}

module.exports = UserModel;
