'use strict';

const { Controller } = require('egg');
class CartController extends Controller {
  async addProductToCart() {
    const { userId, productId, amount } = this.ctx.request.body;

    const cart = await this.service.cart.addProductToCart(
      userId,
      productId,
      amount
    );
    this.ctx.body = {
      cart,
    };
  }
}

module.exports = CartController;
