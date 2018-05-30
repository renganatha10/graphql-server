import { createChannel } from './mutation';
import { getAllChannelsForUser } from './query';

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
};
