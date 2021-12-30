'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('crypto')
      .service('myService')
      .getWelcomeMessage();
  },
};
