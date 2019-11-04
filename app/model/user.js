'use strict';

const users = [
  {
    username: 'xls',
    password: '123456',
    id: 1,
  },
  {
    username: '名字2',
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

  async isUserIdValid(userId) {
    const user = await this.getOneById(userId);
    return !!user;
  }
}

module.exports = UserModel;
