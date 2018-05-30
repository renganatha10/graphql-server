import servicesAPI from './../../services';

export const createUser = (_, { input }) => servicesAPI('CREATE', 'User', input);
