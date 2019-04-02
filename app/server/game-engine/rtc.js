'use strict'

// Libraries
const socketio = require('socket.io')
const chalk = require('chalk')

module.exports = function RTCEngine (server) {
  const io = socketio(server)

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' })
    socket.on('my other event', function (data) {
      console.log(data)
    })
  })

  console.log(chalk`{blue RTCEngine Loaded (✓)}`)
}
