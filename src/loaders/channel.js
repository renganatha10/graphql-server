import ServiceAPI from './../services';
import payloadCreator from './../utils/payload-creator';
import Dataloader from 'dataloader';
// import { groupBy } from 'lodash';

export const getAllChannelsLoader = () =>
  new Dataloader(ids => ServiceAPI('GETALLBYIDS', 'Channel', payloadCreator('id', ids)));

// new Dataloader(async channelsIds => {
//   const a = await ServiceAPI(
//     'GETALLBYIDS',
//     'ChannelMember',
//     payloadCreator('channel_id', channelsIds)
//   );
//   const groupByChannelId = groupBy(a, 'channel_id');
//   return channelsIds.map(item => groupByChannelId[item]);
// });
