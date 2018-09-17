const Channel = `
  type Channel {
    id: ID!
    name: String
    members: [User]
    lastMessage: String
    createdUser: User
  }

  input createChannelInput {
    name: String,
    members: [ID!]
    userId: ID!
  }

  extend type Query {
    getAllChannels(userId: ID!): [Channel]
  }

  extend type Mutation {
    createChannel(input: createChannelInput): Channel
  }

  extend type Subscription {
    channelCreated(userId: ID!) : Channel
  }
`;

export default Channel;
