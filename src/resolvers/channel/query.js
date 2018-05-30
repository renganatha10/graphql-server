// import servicesAPI from './../../services';
// import payloadCreator from './../../utils/payload-creator';
import models from './../../models';

export const getAllChannelsForUser = async (_, { userId }) => {
  const channels = await models.Channel.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: models.ChannelMember,
      },
    ],
  });

  return channels;
};
