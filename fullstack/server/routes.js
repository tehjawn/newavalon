'use strict';

const routes = app => {
    app.get('/test', (req, res) => {
        res.send('Test')
    })

    app.get('/home', function (req, res) {
        res.send('Home')
    });
}

module.exports = routes