const express = require('express');
const morgan = require('morgan');
const dbconnection = require('./utils/dbconnection.js');
const enviromentVars = require('./utils/enviroment.js');

const app = express();

const server = {
  port: process.env.OPENSHIFT_NODEJS_PORT || 4200,
  ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dispenser: !!process.env.TICKET_DISPENSER
};

// Uses morgan logger
app.use(morgan('combined'));


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
