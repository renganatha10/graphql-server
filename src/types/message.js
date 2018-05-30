const Message = `
  type Message {
    id: ID!
    message: String
    channel: Channel
    user: User
  }

  input createMessageInput {
    message: String,
    userId: ID!
    channelId: ID!
  }

  extend type Query {
    getAllMessageByUser(userId: ID!): [Message]
    getAllMessageByChannel(channelId: ID!): [Message]
  }

  extend type Message {
    createMessage(input: createMessageInput): Message
  }
`;

export default Message;
