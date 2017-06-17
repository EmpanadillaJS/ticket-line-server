
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

console.log('Starting app');

const server = {
  port: process.env.PORT || 4200,
  ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dispenser: !!process.env.TICKET_DISPENSER
};

app.use(bodyParser.json());

app.get('/info', (req, res) => {
  res.json({
    "ticketDispenser": server.dispenser,
    "ticketRoll": !server.dispenser
  }).end();
})

app.listen(server.port, function() {
  console.log('App listening on port ' + server.server_port);
});

if (server.dispenser) {
  require('./dispenser/index')(app);
} else {
  require('./ticket-roll/index')(app);
}
