import models from './../../models';

export const getAllUsers = async () => await models.User.findAll({});
export const getUserByIndex = async (_, { id }) => await models.User.findById(id);
