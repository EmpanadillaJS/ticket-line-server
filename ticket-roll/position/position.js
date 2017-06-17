module.exports = init;

const dbconnection = require('./../../utils/dbconnection.js');
const enviromentVars = require('./../../utils/enviroment.js');

function init(app) {

  var position = 0;

  // dbconnection.connectDatabase(enviromentVars.mongoDatabase)
  //   .then(() => {
  //     console.log('dadabase connected')
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  app.post('*/queuePosition/*',  (req, res) => {
    let startAt = position;
    let endAt = position;

    if(req.body.length){
      startAt = position++;
      endAt = position += req.body.length;
    }
    
    res.json({ 
      startAt,
      endAt
     })
     .end();
  });
}7