import UserResolvers from './resolvers/user';
import ChannelResolvers from './resolvers/channel';
import MessageResolvers from './resolvers/message';
import { merge } from 'lodash';

const resolvers = merge({}, UserResolvers, ChannelResolvers, MessageResolvers);
export default resolvers;
