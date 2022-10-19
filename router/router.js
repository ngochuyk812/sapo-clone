module.exports = function(app) {
    var	userHandlers = require('../controllers/userController.js');


	app.route('/auth/register')
		.post(userHandlers.register);

    app.route('/auth/v1')
		.get( (req, res) => {
            res.json({sayHi: 'hello from server, nice to meet you!'})
          });
	app.route('/auth/sign_in')
		.post(userHandlers.sign_in);
    
};