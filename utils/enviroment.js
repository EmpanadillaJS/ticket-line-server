let mongoDatabase;

switch (process.env.NODE_ENV) {
  case 'production':
    mongoDatabase = process.env.MONGO_DATABASE;
    break;
  default:
    mongoDatabase = 'mongodb://localhost/test';
    break;
}

module.exports = {
  mongoDatabase
};
