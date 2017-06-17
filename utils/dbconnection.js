const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('../models/Events');
const db = {
	Event : mongoose.model('Event')
};

const connectDatabase = mongoDatabaseUri => 
  new Promise((resolve, reject) => 
    mongoose.connect(mongoDatabaseUri, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(db);
    })
  );


module.exports = {
  connectDatabase
};
