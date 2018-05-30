import { createMessage } from './mutation';
import { getAllMessageByUser, getAllMessageByChannel } from './query';

export default {
  Mutation: {
    createMessage,
  },
  Message: {
    channel: message => message.Channel,
    user: message => message.User,
  },
  Query: {
    getAllMessageByUser,
    getAllMessageByChannel,
  },
};
