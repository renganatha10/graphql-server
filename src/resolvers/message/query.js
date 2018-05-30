// import servicesAPI from './../../services';
// import payloadCreator from './../../utils/payload-creator';
import models from './../../models';

export const getAllMessageByUser = async (_, { userId }) => {
  const channels = await models.Message.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: models.User,
      },
      {
        model: models.Channel,
      },
    ],
  });

  return channels;
};

export const getAllMessageByChannel = async (_, { channelId }) => {
  const channels = await models.Message.findAll({
    where: {
      channel_id: channelId,
    },
    include: [
      {
        model: models.User,
      },
      {
        model: models.Channel,
      },
    ],
  });

  return channels;
};
