module.exports = init;

function init (app) {
  console.log('init dispenser');

  require('./queue/number/index')(app);
}