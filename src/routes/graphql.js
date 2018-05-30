import { Router } from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { groupBy } from 'lodash';
import Dataloader from 'dataloader';
import schema from './../schema';
import createLoaders from './../loaders';

const suggestions = [];

for (let index = 1; index < 51; index++) {
  const suggestion = {
    id: index,
    text: `Suggestion ${index}`,
    boardId: Math.floor(Math.random() * 15) + 1,
  };

  suggestions.push(suggestion);
}

const getAllSuggestion = ids => {
  const filteredSug = suggestions.filter(item => ids.includes(item.boardId));
  const gs = groupBy(filteredSug, 'boardId');
  return Promise.all(ids.map(item => gs[item] || []));
};

const graphQLRouter = Router();

graphQLRouter.use(
  '/graphql',
  graphqlExpress(() => ({
    schema,
    context: {
      loaders: createLoaders(),
      suggestionLoader: new Dataloader(ids => getAllSuggestion(ids)),
    },
  }))
);

graphQLRouter.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default graphQLRouter;
