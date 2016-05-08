var home      = require('./routes/Home'),
	videos    = require('./routes/Video'),
	users     = require('./routes/User'),
	courses   = require('./routes/Course');

module.exports = function(app){
	app.use('/',home);
	app.use('/videos',videos);
	app.use('/users',users);
	app.use('/courses',courses);
}