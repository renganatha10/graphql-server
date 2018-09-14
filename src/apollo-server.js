const debug = require('debug')('api:resolvers');
import { ApolloServer } from 'apollo-server-express';
import { groupBy } from 'lodash';
import Dataloader from 'dataloader';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import createLoaders from './loaders';

const logExecutions = require('graphql-log')({
  logger: debug,
});

logExecutions(resolvers);

const suggestions = [];

for (let index = 1; index < 51; index++) {
  const suggestion = {
    id: index,
    text: `Suggestion ${index}`,
    boardId: Math.floor(Math.random() * 15) + 1,
  };

  suggestions.push(suggestion);
}

// Dummy Function to Understand DataLoaders in graphql
const getAllSuggestion = ids => {
  const filteredSug = suggestions.filter(item => ids.includes(item.boardId));
  const gs = groupBy(filteredSug, 'boardId');
  return Promise.all(ids.map(item => gs[item] || []));
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    loaders: createLoaders(),
    suggestionLoader: new Dataloader(ids => getAllSuggestion(ids)),
  },
});

export default server;
