const sample = require('./sample');

exports.bind = (app) => {
  app.use('/api/sample', sample);
};
