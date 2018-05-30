import models, { sequelize } from './../../models';

export const createChannel = async (_, { input }) => {
  const { name, members, userId } = input;

  try {
    const channels = await sequelize.transaction(t =>
      models.Channel.create({ name, user_id: userId }, { transaction: t }).then(channel => {
        const promises = members.map(member =>
          models.ChannelMember.create(
            { channel_id: channel.id, user_id: member },
            { transaction: t }
          )
        );

        return Promise.all(promises).then(ChannelMembers =>
          Promise.resolve({ name: channel.name, ChannelMembers })
        );
      })
    );

    return channels;
  } catch (err) {
    console.log(err, 'Error In Catch');
  }
};
