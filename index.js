
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const server = {
  port: process.env.OPENSHIFT_NODEJS_PORT || 4200,
  ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dispenser: !!process.env.TICKET_DISPENSER
};

app.use(bodyParser.json());

app.listen(server.port, function() {
  console.log('App listening on port ' + server.server_port);
});

if (server.dispenser) {
  require('./dispenser/index')(app);
} else {
  require('./ticket-roll/index')(app);
}
