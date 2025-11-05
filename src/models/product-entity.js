const { EntitySchema } = require('typeorm');

module.exports.ProductEntity = new EntitySchema({
  name: 'Product',
  tableName: 'products',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    price: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
  },
});
