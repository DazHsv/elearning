var express = require('express'),
	app = express(),
	setup = require('./config/settings'),
	routing = require('./app/router');

setup(app);
//routing(app);

app.get('*', function(req,res){
	if( (req.session != null) && (req.session.user != null)){
		res.sendFile('./app.html',{root:'public'});
	}else {
		res.sendFile('./home.html',{root:'public'})
	}
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port,server_ip_address);