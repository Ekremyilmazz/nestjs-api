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

## ✅ Register
- **POST** `/auth/register`
{
  "email": "user@example.com",
  "password": "yourpassword"
}

## 🔐 Authentication
- Login and receive a **JWT token**
- Add token to **Headers**
- Protected routes can only be accessed with a valid token

## 🟧 Testing with Postman

### User Registration
<img width="984" height="638" alt="Image" src="https://github.com/user-attachments/assets/0bcf67ac-7cbb-452a-9d45-43ad6aa6aea5" />
### User Login and receive token
<img width="977" height="633" alt="Image" src="https://github.com/user-attachments/assets/4fefecdd-baab-4924-85ab-e29e21c7ecdc" />
### Get all products with token
<img width="983" height="634" alt="Image" src="https://github.com/user-attachments/assets/4be0913d-e555-41ed-9a28-45f33e69b779" />
### Get product by ID
<img width="986" height="629" alt="Image" src="https://github.com/user-attachments/assets/592e97de-9a35-4d78-82a6-34d141b0a0a9" />
### Update product by ID
<img width="982" height="631" alt="Image" src="https://github.com/user-attachments/assets/82196c34-80e7-4a92-aa58-1dcac1c96474" />
### Delete product by ID
<img width="985" height="629" alt="Image" src="https://github.com/user-attachments/assets/549ca290-0c1b-415e-848f-c714fcacb346" />



