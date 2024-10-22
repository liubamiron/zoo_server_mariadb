import { Sequelize } from 'sequelize';
import config from './config/config.js'; // Import the configuration

const environment = process.env.NODE_ENV || 'development'; // Default to development
const dbConfig = config[environment]; // Get the config based on the current environment

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: console.log,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
            // You can specify a fetch size here, if applicable
        },
    }
);

export default sequelize;
