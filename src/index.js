import express from 'express';
import middlewares from './middlewares';
import graphql from './routes/graphql';
const debug = require('debug')('api');

// eslint-disable-next-line
import models from './models';

const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(middlewares);
app.use('/', graphql);

app.listen(5000, () => {
  debug('Go to http://localhost:5000/graphiql to run queries!');
});

process.on('unhandledRejection', async err => {
  debug('Unhandled rejection', err);
});

process.on('uncaughtException', async err => {
  debug('Uncaught exception', err);
});
