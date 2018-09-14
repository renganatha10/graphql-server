import { createChannel } from './mutation';
import { getAllChannelsForUser } from './query';
import pubsub, { CHANNEL_ADDED_TOPIC } from './subscriptions';

export default {
  Mutation: {
    createChannel,
  },
  Channel: {
    members: (channel, _, { loaders }) =>
      channel.ChannelMembers.map(members => loaders.users.load(members.user_id)),
    createdUser: (channel, _, { loaders }) => loaders.users.load(channel.user_id),
  },

  Query: {
    getAllChannels: getAllChannelsForUser,
  },
  Subscription: {
    channelCreated: {
      // create a channelAdded subscription resolver function.
      subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC), // subscribe to changes in a topic
    },
  },
};
