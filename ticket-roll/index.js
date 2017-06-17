module.exports = init;

function init (app) {
  console.log('init dispenser');

  require('./position/position')(app);
}