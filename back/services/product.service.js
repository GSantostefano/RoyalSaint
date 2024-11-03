const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
    // Ya no necesitas un arreglo de productos en memoria
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset, price, price_min, price_max } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min || price_max) {
      options.where.price = {};
      if (price_min) {
        options.where.price[Op.gte] = price_min;
      }
      if (price_max) {
        options.where.price[Op.lte] = price_max;
      }
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    console.log('Buscando producto con ID:', id);
    const product = await models.Product.findByPk(id, {
      include: ['category'] // Incluye la categoría si es necesario
    });

    if (!product) {
      throw boom.notFound('product not found');
    }

    if (product.isBlock) {
      throw boom.conflict('product is block');
    }

    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id); // Verifica si el producto existe
    return await product.update(changes); // Actualiza el producto
  }

  async delete(id) {
    const product = await this.findOne(id); // Verifica si el producto existe
    await product.destroy(); // Elimina el producto
    return { id };
  }
}

module.exports = ProductsService;
