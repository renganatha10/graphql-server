import models from '../models';

const create = (modelName, object) => models[modelName].create(object);

const update = (modelName, conditionKey, conditionValue, updatedValue) =>
  models[modelName].update(updatedValue, {
    where: {
      [conditionKey]: conditionValue,
    },
  });

const destroy = (modelName, conditionKey, conditionValue) =>
  models[modelName].destroy({
    where: {
      [conditionKey]: conditionValue,
    },
  });

export const getAll = modelName => models[modelName].findAll({});

export const getById = (modelName, conditionKey, conditionValue) =>
  models[modelName].findAll({
    where: {
      [conditionKey]: conditionValue,
    },
  });

export const getAllById = (modelName, conditionKey, conditionValue) =>
  models[modelName].findAll({
    where: {
      [conditionKey]: conditionValue,
    },
  });

export const getAllByIds = (modelName, conditionKey, conditionValues) =>
  models[modelName].findAll({
    raw: true,
    where: {
      [conditionKey]: {
        $in: conditionValues,
      },
    },
  });

export const createModel = create;
export const updateModel = update;
export const deleteModel = destroy;
