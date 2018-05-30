const User = `
  type User {
    id: ID!
    name: String
    gender: Gender
    email: String
    description: String
    profilePhoto: String
    website: String
  }

  enum Gender {
    MALE
    FEMALE
  }

  input createUserInput {
    name: String
    email: String!
    gender: String
    description: String
    website: String
    profilePhoto: String
  }

  extend type Query {
    currentUser(id: ID): User
    getAllUsers: [User]
  }

  extend type Mutation {
    createUser(input: createUserInput): User
  }
`;

export default User;
