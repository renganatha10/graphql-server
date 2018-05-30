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

    schema {
      query: Query
      mutation: Mutation
    }
`;

export default Base;
