import { getAllUsersLoader } from './user';
import { getAllChannelsLoader } from './channel';

const createLoader = options => ({
  users: getAllUsersLoader(options),
  channels: getAllChannelsLoader(options),
});

export default createLoader;
