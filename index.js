var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 4200;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server_dispenser = !!process.env.TICKET_DISPENSER;

app.listen(server_port, server_ip_address, function() {
  console.log('App listening on port ' + server_port);
});

if (server_dispenser) {
  require('dispenser/index')(app);
} else {
  require('ticket-roll/index')(app);
}

