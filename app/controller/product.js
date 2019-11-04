'use strict';

const { Controller } = require('egg');
const ProductModel = require('../model/product');
const productModel = new ProductModel();
class productController extends Controller {
  async index() {
    const { ctx } = this;
    const products = await productModel.list();
    ctx.body = { products };
  }

  async getOneById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const product = await productModel.getOneById(id);
    ctx.body = {
      product,
    };
  }

  async addOne() {
    const { ctx } = this;
    const { product } = ctx.request.body;
    await productModel.addOne(product);
    ctx.body = {
      product,
    };
  }
}

module.exports = productController;
