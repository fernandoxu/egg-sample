'use strict';

module.exports = opts => {
  return async (ctx, next) => {
    const { userId } = ctx.request.body;
    const isValidUser = await ctx.service.user.isUserLoggedIn(userId);
    if (!isValidUser) throw new Error('invalid user form auth middleware');
    await next();
  };
};
