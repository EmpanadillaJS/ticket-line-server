const express = require('express');

const app = express();

const morgan = require('morgan');

const server = {
  port: process.env.OPENSHIFT_NODEJS_PORT || 4200,
  ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dispenser: !!process.env.TICKET_DISPENSER
};

// Uses morgan logger
app.use(morgan('combined'));

app.listen(server.port, server.ip_address, (error) => {
  if (error) {
    throw error;
  }
  console.log('App listening on port ' + server.port);
});

if (server.dispenser) {
  require('./dispenser/index')(app);
} else {
  require('./ticket-roll/index')(app);
}
