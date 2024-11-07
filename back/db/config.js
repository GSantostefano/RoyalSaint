const { config } = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgresql://${DB_NAME}_owner:${DB_PASSWORD_NEON}@${DB_HOST_CONFIG}/${DB_NAME}?sslmode=require`;
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
module.exports = {
  development: { url: URI, dialect: 'postgres' },
  production: { url: URI, dialect: 'postgres' },
};
