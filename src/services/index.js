import { getAll, getById, createModel, getAllByIds } from './../utils/genericdb';

export const getAllChannel = () => getAll('Channel');
export const getChannelByIndex = id => getById('Channel', 'id', id);
export const createChannel = input => createModel('Channel', input);

export default (type, modelName, payload) => {
  switch (type) {
    case 'GETALL':
      return getAll(modelName);
    case 'GETALLBYID': {
      const { conditionKey, conditionValue } = payload;
      return getById(modelName, conditionKey, conditionValue);
    }
    case 'GETALLBYIDS': {
      const { conditionKey, conditionValue } = payload;
      return getAllByIds(modelName, conditionKey, conditionValue);
    }
    case 'CREATE': {
      return createModel(modelName, payload);
    }
    default:
      break;
  }
};
