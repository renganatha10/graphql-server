import ServiceAPI from './../services';
import payloadCreator from './../utils/payload-creator';
import Dataloader from 'dataloader';

export const getAllUsersLoader = () =>
  new Dataloader(ids => ServiceAPI('GETALLBYIDS', 'User', payloadCreator('id', ids)));
