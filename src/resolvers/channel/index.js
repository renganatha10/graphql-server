import { createChannel } from './mutation';
import { getAllChannelsForUser } from './query';
import pubsub, { CHANNEL_ADDED_TOPIC } from './subscriptions';
import { withFilter } from 'graphql-subscriptions';

export default {
  Mutation: {
    createChannel
  },
  Channel: {
    members: (channel, _, { loaders }) =>
      channel.ChannelMembers.map(members => loaders.users.load(members.user_id)),
    createdUser: (channel, _, { loaders }) => loaders.users.load(channel.user_id)
  },

  Query: {
    getAllChannels: getAllChannelsForUser
  },
  Subscription: {
    channelCreated: {
      // create a channelAdded subscription resolver function.
      subscribe: withFilter(
        () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC),
        (payload, variables) => {
          payload.channelCreated.ChannelMembers.map(index =>
            console.log('userid', index.dataValues.user_id)
          );
          console.log('variables', variables.userId);
          return payload.channelCreated.ChannelMembers.map(
            index => index.dataValues.user_id
          ).includes(variables.userId);
        }
      )
    }
  }
};
