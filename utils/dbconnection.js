const mongoose = require('mongoose');

function connectDatabase(mongoDatabase) {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoDatabase, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}


module.exports = {
  connectDatabase
};
