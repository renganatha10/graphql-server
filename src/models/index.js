import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const debug = require('debug')('api');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';

const config = require(`${__dirname}/../config/db.json`)[env];

const db = {};
let seq;

if (config.use_env_variable) {
  seq = new Sequelize(process.env[config.use_env_variable]);
} else {
  seq = new Sequelize(config.database, config.username, config.password, config, config.logging);
}

seq
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch(err => {
    debug('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = seq.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;

export const sequelize = seq;
