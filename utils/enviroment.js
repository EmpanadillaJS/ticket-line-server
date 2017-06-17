let mongoDatabase;

switch (process.env.NODE_ENV) {
  case 'production':
    mongoDatabase = 'mongodb://localhost/test';
    break;
  default:
    mongoDatabase = 'mongodb://localhost/test';
    break;
}

module.exports = {
  mongoDatabase
};
