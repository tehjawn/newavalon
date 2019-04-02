'use strict'

const chalk = require('chalk')

const routes = app => {
  app.get('/test', (req, res) => {
    res.send('Test')
  })

  app.get('/home', function (req, res) {
    res.send('Home')
  })

  console.log(chalk`{blue API Loaded (✓)}`)
}

module.exports = routes
