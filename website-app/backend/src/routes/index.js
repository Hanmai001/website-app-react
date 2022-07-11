const homeController = require('./home')

function route(app){
    app.use('/', homeController)
}

module.exports = route