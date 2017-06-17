
const express = require('express');
const dbconnection = require('./utils/dbconnection.js');
const enviromentVars = require('./utils/enviroment.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const app = express();

const server = {
  port: process.env.OPENSHIFT_NODEJS_PORT || 4200,
  ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dispenser: !!process.env.TICKET_DISPENSER
};

app.use(bodyParser.json());

app.listen(server_port, server_ip_address, function() {
  console.log('App listening on port ' + server_port);
});

// connect database before launch express
dbconnection.connectDatabase(enviromentVars.mongoDatabase)
  .then(() => {
    app.listen(server.port, server.ip_address, (error) => {
      if (error) {
        throw error;
      }
      console.log('App listening on port ' + server.port);
    });
  })
  .catch((error) => {
    throw error;
  });

if (server.dispenser) {
  require('./dispenser/index')(app);
} else {
  require('./ticket-roll/index')(app);
}
