'use strict';

const products = [
  {
    name: 's1',
    price: 10,
    id: 1,
  },
  {
    name: 's2',
    price: 20,
    id: 2,
  },
  {
    name: 's3',
    price: 30,
    id: 3,
  },
];

class ProductModel {
  async list() {
    return products;
  }

  async getOneById(id) {
    const product = products.find(p => +id === p.id);
    return product;
  }

  async addOne(product) {
    if (product) {
      products.push(product);
    }
  }
}

module.exports = ProductModel;
