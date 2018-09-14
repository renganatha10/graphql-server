import models from './../../models';

export const createUser = async (_, { input }) => await models.User.create({ input });
