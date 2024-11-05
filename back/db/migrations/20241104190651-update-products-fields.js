
/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('products', 'images', {
          type: Sequelize.JSON,
          allowNull: true,  // Cambiar a true para permitir valores nulos
        });
      },
    
      down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('products', 'images', {
          type: Sequelize.JSON,
          allowNull: false,  // Revertir a false si es necesario
        });
      },
    };
  }}