
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

console.log('Starting app');

const server = {
  port: parseInt(process.env.PORT || 4200),
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
  console.log('App listening on port ' + server.port);
});

if (server.dispenser) {
  require('./dispenser/index')(app);
} else {
  require('./ticket-roll/index')(app);
}
