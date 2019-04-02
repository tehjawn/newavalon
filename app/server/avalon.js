'use strict'

// Dev Libraries
const chalk = require('chalk')

// Avalon App Dependencies
const routes = require('./api-routes')
const rtc = require('./game-engine/rtc')

class Avalon {
  start (app, server) {
    console.log(chalk`{yellow Avalon App Engine Starting...}`)
    this.setupAPI(app)
    this.setupRTC(server)
  }

  setupAPI (app) {
    routes(app)
  }

  setupRTC (server) {
    rtc(server)
  }
}

module.exports = Avalon
