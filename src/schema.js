import { makeExecutableSchema } from 'graphql-tools';
const debug = require('debug')('api:resolvers');
const logExecutions = require('graphql-log')({
  logger: debug,
});
import typeDefs from './typeDefs';
import resolvers from './resolvers';

logExecutions(resolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e, 'Logger') },
});
