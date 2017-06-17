var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 4200;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function() {
  console.log('App listening on port ' + server_port);
});
