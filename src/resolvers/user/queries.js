import payloadCreator from './../../utils/payload-creator';
import servicesAPI from './../../services';

export const getAllUsers = () => servicesAPI('GETALL', 'User');
export const getUserByIndex = (_, { id }) =>
  servicesAPI('GETALL', 'User', payloadCreator('id', id));
