const express = require('express');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const { ProductEntity } = require('./models/product-entity');
const { UserEntity } = require('./models/users-entity');
const { getRepositoryToken } = require('@nestjs/typeorm');
const productRoutes = require('./routes/product-routes');
const authRoutes = require('./routes/auth-routes');
const productHandler = require('./handler/productHandler');
const authHandler = require('./handler/authHandler');


async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  const expressApp = app.getHttpAdapter().getInstance();

  expressApp.use(cors());

  expressApp.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 1000 requests per windowMs
  }));

  expressApp.use(express.json());

  const userRepository = app.get(getRepositoryToken(UserEntity));
  const productRepository = app.get(getRepositoryToken(ProductEntity));

  authHandler.setUserRepository(userRepository);
  productHandler.setProductREpository(productRepository);

  expressApp.use('/api/auth', authRoutes);
  expressApp.use('/api/products', productRoutes);

  const port = process.env.PORT || 5000;

  await app.listen((port), () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
bootstrap();
