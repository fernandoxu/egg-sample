'use strict';

const carts = [
  // {
  //   id: 1,
  //   userId: 1,
  //   products: [
  //     {
  //       productId: 1,
  //       amount: 2,
  //     },
  //   ],
  // },
];

class CartModel {
  async list() {
    return carts;
  }

  async getOneById(id) {
    const product = carts.find(p => +id === p.id);
    return product;
  }

  async getOneByUserId(userId) {
    const found = carts.find(c => c.userId === Number(userId));
    if (found) return found;
    const newCart = {
      userId,
      products: [],
    };
    carts.push(newCart);
    return newCart;
  }

  async addProductToCart(userId, productId, amount) {
    const cart = await this.getOneByUserId(userId);
    const found = cart.products.find(p => p.productId === productId);
    if (found) {
      found.amount += amount;
    } else {
      cart.products.push({
        productId,
        amount,
      });
    }
    return cart;
  }

  async removeProductToCart(userId, productId) {
    const cart = await this.getOneByUserId(userId);
    const index = cart.products.findIndex(p => p.productId === productId);
    if (index > -1) {
      cart.products.splice(index, 1);
    }
  }

  async addOne(product) {
    if (product) {
      carts.push(product);
    }
  }
}

module.exports = CartModel;
