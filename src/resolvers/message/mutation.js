import models from './../../models';

export const createMessage = async (_, { input }) => {
  const { userId, message, channelId } = input;
  const createdMessage = await models.Message.create(
    {
      body: message,
      type: 'Text',
      user_id: userId,
      channel_id: channelId,
    },
    {
      include: [
        {
          model: models.User,
        },
        {
          model: models.Channel,
        },
      ],
    }
  );
  return createdMessage;
};
