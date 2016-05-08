var express        = require('express'),
	bodyParser     = require('body-parser'),
	helmet         = require('helmet'),
	methodOverride = require('method-override'),
	session        = require('express-session'),
	mongoose       = require('mongoose'),
	MongoStore     = require('connect-mongo/es5')(session);

var connection_string = '127.0.0.1:27017/e3';
	if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
	  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
	  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
	  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
	  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
	  process.env.OPENSHIFT_APP_NAME;
	}

	mongoose.connect("mongodb://"+connection_string);

	var db = mongoose.connection;
	db.on('error', function(){
		console.error.bind(console, 'Conection error to db:');
	});
	db.on('open', function() {
		console.log('Conected to mongodb');
	});

module.exports = function(app){
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));
	app.use(methodOverride('X-HTTP-Method-Override'));
	app.use(express.static('public'));
	app.use(helmet());
	app.use(session({
		secret:"221weqofyb9iuqxegoi",
		resave:false,
		saveUninitialized:false,
		unset:'destroy',
		store: new MongoStore({
			mongooseConnection: db,
			ttl: 3 * 60 * 60,
			touchAfter: 24 * 60 *60
		})
	}));

	app.use("/js",express.static('public/js'));
	app.use("/css",express.static('public/css'));
	app.use("/img",express.static('public/img'));
	app.use("/views",express.static('public/views'));
}