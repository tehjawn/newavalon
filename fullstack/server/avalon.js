'use strict';

// Dev Libraries
const chalk = require('chalk');

// Avalon App Dependencies
const routes = require('./routes');

class Avalon {
  constructor() {
    console.log(chalk`{black.bgYellow  Avalon Loaded }`);
  }

  start(app) {
    console.log(chalk`{yellow Avalon App Engine Starting...}`);
    this.api(app)
  }

  api(app) {
    routes(app)
  }
}

module.exports = Avalon