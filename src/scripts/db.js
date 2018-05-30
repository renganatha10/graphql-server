/* eslint-disable no-console */
import models from '../models';

async function syncDb() {
  await models.User.sync({ force: true });
  await models.Channel.sync({ force: true });
  await models.ChannelMember.sync({ force: true });
  await models.Message.sync({ force: true });
  console.log('Finished Rewriting tables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}

async function syncAndLoad() {
  console.log('Starte');
  await syncDb();
  process.exit(0);
}

syncAndLoad();
