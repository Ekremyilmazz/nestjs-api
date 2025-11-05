const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { ConfigModule } = require('@nestjs/config');
const dbConfig = require('./config/database.config');

const { ProductEntity } = require('./models/product-entity');
const { UserEntity } = require('./models/users-entity');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dbConfig,
      entities: [ProductEntity, UserEntity],
    }),
    TypeOrmModule.forFeature([ProductEntity, UserEntity]),
  ],
  controllers: [],
  providers: [
  ]
})

class AppModule {}
module.exports = { AppModule };