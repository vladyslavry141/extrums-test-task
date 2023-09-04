'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./configs/express.js');
const router = require('./app/routes/router.js');
const historySaverService = require('./app/services/historySaver.js');

const port = config.port;
const app = express();

module.exports = app;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/', router);

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

historySaverService.init();

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server?.close(() => {
    console.debug('HTTP server closed');
  });
  historySaverService.finish();
});
