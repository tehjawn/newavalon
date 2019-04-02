'use strict'

// === Dev Libraries === //
const chalk = require('chalk')
const path = require('path')

// === App Libraries === //
const app = require('express')()
const server = require('http').Server(app)
const Avalon = require('./server/avalon')

// === Server Setup Code === //

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'))
})

server.listen(3000, function () {
  console.log(chalk`{green Avalon Server Open on Port 3000:} {underline http://localhost:3000}`)
  cli.handleCommand('start')
})

function closeServer () {
  server.close(function () {
    console.log(chalk.bgRed('Server shut down. To fully exit out of nodemon use CTRL+C.'))
  })
  setTimeout(() => {
    process.exit()
  }, 500)
}

// === Start Avalon App === //

new Avalon().start(app, server)

// === Dev Command Line Interface === //

const cli = {
  prompt: function (question) {
    return new Promise((resolve, reject) => {
      const {
        stdin,
        stdout
      } = process
      stdin.resume()
      stdout.write(question)
      stdin.on('data', data => resolve(data.toString().trim()))
      stdin.on('error', err => reject(err))
    })
  },
  handleCommand: function (command) {
    switch (command) {
      case 'start':
        console.log('Command Line Interface Ready. Type anything in after $~.')
        break
      case 'exit':
        closeServer()
        break
      default:
        console.log(chalk`{hex('#DEADED') Warning: The following command does not exist: "${command}"}`)
    }
    cli.prompt('$~ ')
      .then((command) => {
        return cli.handleCommand(command)
      })
      .catch((error) => {
        console.log(error)
        process.exit()
      })
  }
}
