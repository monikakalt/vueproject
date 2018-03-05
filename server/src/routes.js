const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register, //check if email is valid middleware
     AuthenticationController.register)
}
