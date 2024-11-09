// const { Sequelize } = require('sequelize');
// const { config } = require('../config/config');
// const setupModels = require('../db/models/index');


// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);

// // Crea la URI de conexión a la base de datos PostgreSQL usando las credenciales y detalles de la configuración.
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// // Crea una instancia de Sequelize con la URI de conexión y especifica el dialecto como 'postgres'.
// // También habilita el registro (logging) de las consultas SQL ejecutadas.
// const sequelize = new Sequelize(URI, {
//   dialect: 'postgres',
//   logging: console.log,
// });
// setupModels(sequelize);


// sequelize.sync();

// // Exporta la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación.
// module.exports = sequelize;
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models/index');

// Configura la URI de conexión a la base de datos desde la variable de entorno
const URI = process.env.DATABASE_URL;

// Crea una instancia de Sequelize con la URI de conexión y configura el dialecto
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,            // Necesario en Render
      rejectUnauthorized: false, // Desactiva la verificación del certificado
    },
  },
  logging: console.log,
});

// Ejecuta la configuración de los modelos
setupModels(sequelize);

// Sincroniza los modelos (opcional, dependiendo de tu estrategia de migración)
sequelize.sync();

// Exporta la instancia de Sequelize
module.exports = sequelize;
