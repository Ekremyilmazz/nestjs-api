const { EntitySchema } = require('typeorm');

module.exports.UserEntity = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    email: {
      type: 'varchar',
      unique: true,
      length: 255,
    },
    password: {
      type: 'varchar',
    },
  },
});
