import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import config from '../config/config.js';  // Import the config from config.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; // Load config based on environment
const db = {};

let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

// Read model files and import them dynamically
fs.readdirSync(__dirname)
    .filter(file => {
      return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.js' &&
          file.indexOf('.test.js') === -1
      );
    })
    .forEach(async file => {
      const { default: model } = await import(path.join(__dirname, file));
      db[model.name] = model(sequelize, Sequelize.DataTypes);
    });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
