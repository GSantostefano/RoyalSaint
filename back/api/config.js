

const { config } = require('./../config/config');
const URI = 'postgresql://db_gacho_store_owner:Qi7kzqEoC6Bc@ep-broad-term-a5njpcxy.us-east-2.aws.neon.tech/db_gacho_store?sslmode=require';
module.exports = {
  development: { url: URI, dialect: 'postgres' },
  production: { url: URI, dialect: 'postgres' },
};

//
// const { config } = require('./../config/config');
// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgresql://${DB_NAME}_owner:${DB_PASSWORD_NEON}@${DB_HOST_CONFIG}/${DB_NAME}?sslmode=require`;
// module.exports = {
//   development: { url: URI, dialect: 'postgres' },
//   production: { url: URI, dialect: 'postgres' },
// };
