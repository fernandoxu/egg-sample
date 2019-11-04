'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index); // controller/product.jx的index方法
  router.get('/product/getOneById', controller.product.getOneById);
  router.post('/product/addOne', controller.product.addOne);
  router.post(
    '/cart/addProductToCart',
    app.middleware.auth(),
    controller.cart.addProductToCart
  );
  router.post('/user/login', controller.user.login);
};
