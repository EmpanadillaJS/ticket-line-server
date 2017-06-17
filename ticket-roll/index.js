const dbconnection = require('./../utils/dbconnection.js');
const enviromentVars = require('./../utils/enviroment.js');

function init (app) {

  console.log('init dispatcher');
  dbconnection.connectDatabase(enviromentVars.mongoDatabase)
    .then((db) => {
      app.db = db;
      console.log('DATABASE connected');
    }).catch(error => { throw error });
  
  require('./position/position')(app);
}

module.exports = init;