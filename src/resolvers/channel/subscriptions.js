import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

export const CHANNEL_ADDED_TOPIC = 'newChannel';

export default pubsub;
