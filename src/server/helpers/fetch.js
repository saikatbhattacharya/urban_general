const request = require('request');
const pick = require('lodash/pick');
const includes = require('lodash/includes');
const merge = require('lodash/merge');
const logger = require('./logger');

const getRequest = req => _.assign({}, req, {
  headers: {
    'X-REQUEST-ID': req.requestId,
  },
});

function fetch(options) {
  return new Promise((resolve, reject) => {
    const start = process.hrtime();
    const req = getRequest(options);
    request(req, (err, response, body) => {
      const message = `REQUEST ${req.method} ${req.url}`;
      let statusCode;
      if (err) {
        statusCode = err.code === 'ECONNREFUSED' ? 503 : 500;
        const error = { status: statusCode, error: err };
        reject(error);
      } else if (!includes([200, 201, 204], response.statusCode)) {
        // eslint-disable-next-line prefer-destructuring
        statusCode = response.statusCode;
        const failure = { status: statusCode };
        reject(failure);
      } else {
        // eslint-disable-next-line prefer-destructuring
        statusCode = response.statusCode;
        resolve(body);
      }
      // eslint-disable-next-line max-len
      logger.request(message, pick(options, logger.requestWhitelist), { res: { statusCode } }, start);
    });
  });
}

module.exports = req => ({
  get: (url, extraOptions) => {
    const options = merge({
      method: 'GET',
      json: true,
      url,
      requestId: req.requestId,
    }, extraOptions);
    return fetch(options);
  },
  post: (url, json, extraOptions) => {
    const options = merge({
      method: 'POST',
      json,
      url,
      requestId: req.requestId,
    }, extraOptions);
    return fetch(options);
  },
  put: (url, extraOptions) => {
    const options = merge({
      method: 'PUT',
      json: true,
      url,
      requestId: req.requestId,
    }, extraOptions);
    return fetch(options);
  },
  delete: (url, json, extraOptions) => {
    const options = merge({
      method: 'DELETE',
      json,
      url,
      requestId: req.requestId,
    }, extraOptions);
    return fetch(options);
  },
});
