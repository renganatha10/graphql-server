import DataLoader from 'dataloader';
export default batchFn => options => new DataLoader(keys => batchFn(keys), options);
