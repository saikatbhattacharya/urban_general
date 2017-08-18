require('babel-core/register');

module.exports = (nightwatch => (nightwatch))(require('./nightwatch.json'));
