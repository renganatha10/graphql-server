import express from 'express';
import http from 'http';
import apolloServer from './apollo-server';
const debug = require('debug')('api');

// eslint-disable-next-line
import models from './models';

const app = express();

apolloServer.applyMiddleware({ app });
const httpServer = http.createServer(app);

apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(5000, () => {
  debug(`🚀 Server ready at http://localhost:5000${apolloServer.graphqlPath}`);
  debug(`🚀 Subscriptions ready at ws://localhost:${5000}${apolloServer.subscriptionsPath}`);
});

process.on('unhandledRejection', async err => {
  debug('Unhandled rejection', err);
});

process.on('uncaughtException', async err => {
  debug('Uncaught exception', err);
});
