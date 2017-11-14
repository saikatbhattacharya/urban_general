const express = require('express');
const path = require('path');
const requestId = require('request-id/express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const logger = require('./helpers/logger');
const routes = require('./routes');

const NODE_ENV = process.env.NODE_ENV || 'UNKNOWN';
const PORT = process.env.PORT || 5000;

const app = express();

const publicPath = path.resolve(__dirname, 'dist/public/');

app.use(requestId({ paramName: 'requestId' }));
app.use(logger.winston);
app.use(logger.express);

app.use(cookieParser());
app.use(bodyParser.json({ limit: '256kb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '256kb',
}));

app.use('/public', express.static(publicPath, { redirect: false }));

routes.bind(app);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/index.pug'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.info(`==> 🌎 App Listening on ${PORT} please open your browser and navigate to http://localhost:${PORT}/`);
  console.info(`==> 🌎 Running ${NODE_ENV} server`);
});
