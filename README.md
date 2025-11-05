# nestjs-api
This is a backend CRUD API built using **NestJS**, **MariDB**, **TypeORM**, **JWT Authentication**, and tested with **Postman**.  
The project demonstrates clean architecture, modular structure, and secure authentication flows.

## 🚀 Features
- User authentication with JWT  
- Protected routes using Auth Guard  
- CRUD operations (Create, Read, Update, Delete)  
- PostgreSQL (or MySQL) database interaction via TypeORM  
- Error handling & validation  
- Postman collection for testing

## 🛠️ Technology Stack
- **NestJS** | Backend framework (modular architecture)
- **MariaDB** | Relational database used for data storage
- **TypeORM** | ORM for database operations
- **JWT** | Authentication & authorization
- **Postman** | API testing and documentation

## 🔧 Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/Ekremyilmazz/nestjs-api.git
2. Install dependencies
   ```
   npm install
3. Create .env file
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=xxxx
   DB_PASSWORD=xxxx
   DB_NAME=nestjs_api
   JWT_SECRET=your-secret-key
4. Run the project
   ```bash
   npm run start:dev

## ✅ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/products/` | Get all products |
| **GET** | `/api/products/:id` | Get product by ID |
| **POST** | `/api/products/` | Add product |
| **PUT** | `/api/products/:id` | Update product by ID |
| **DELETE** | `/api/products/:id` | Delete product by ID |
| **POST** | `/api/auth/reigster` | Register |
| **POST** | `/api/auth/login` | Login and receive JWT token |


