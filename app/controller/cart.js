'use strict';

const { Controller } = require('egg');
class CartController extends Controller {
  async addProductToCart() {
    const { userId, productId, amount } = this.ctx.request.body;
    const isUserInBlackList = await this.ctx.service.user.isUserInBlackList(
      userId
    );

    // if (isUserInBlackList) throw new Error('user is banned!');
    const cart = await this.service.cart.addProductToCart(
      userId,
      productId,
      amount
    );
    this.ctx.body = {
      cart,
    };
  }

  async removeProductFromCart() {}

  async removeAllFromCart() {}
}

module.exports = CartController;
