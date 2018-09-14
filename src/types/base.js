const Base = `
    type Query {
      dummy: Boolean
      myBoards: [Board]
    }

    type Suggestion {
      id: Int
      text: String
    }

    type Board {
      id: Int!
      name: String!
      suggestions: [Suggestion]
    }

    type Mutation {
      dummy: Boolean
    }

    type Subscription {
      dummy: String
    }

    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
    }
`;

export default Base;
