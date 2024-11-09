
const URI = process.env.DATABASE_URL; // Esta línea está correcta para obtener la URL de la base de datos desde la variable de entorno.

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
