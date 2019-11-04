'use strict';

const { Service } = require('egg');

class Cart extends Service {
  async addProductToCart(userId, productId, amount) {
    const user = await this.ctx.model.user.getOneById(userId);
    if (!user) {
      throw new Error('no such user');
    }
    const product = await this.ctx.model.product.getOneById(productId);
    if (!product) {
      throw new Error('no such product');
    }
    const cart = await this.ctx.model.cart.addProductToCart(
      userId,
      productId,
      amount
    );
    return cart;
  }
}

module.exports = Cart;
