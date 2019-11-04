'use strict';

const path = require('path');

module.exports = app => {
  const modelPaths = app.loader
    .getLoadUnits()
    .map(unit => path.join(unit.path, 'app/model'));
  app.loader.loadToContext(modelPaths, 'model');
};
