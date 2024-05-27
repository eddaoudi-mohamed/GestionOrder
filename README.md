# Order Management System

## Overview

This project is an Order Management System built with Laravel for the backend and React for the frontend. The system allows for managing orders, clients, products, and categories. The admin can perform CRUD operations (Create, Read, Update, Delete) on clients, products, and orders. The project also includes an admin authentication system.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Database Schema](#database-schema)
- [Running the Application](#running-the-application)

## Technologies Used

- Laravel (PHP)
- React (JavaScript)
- MySQL (or any other supported database by Laravel)
- Docker (optional, for containerized development)

## Features

- Admin authentication
- Manage clients (create, read, update, delete)
- Manage products (create, read, update, delete)
- Manage categories (create, read, update, delete)
- Manage orders (create, read, update, delete)
- Order status management
- Product inventory management

## Getting Started

### Prerequisites

- PHP >= 7.3
- Composer
- Node.js >= 12.x
- npm or yarn
- MySQL or another supported database
- Laravel CLI
- Docker (optional, for containerized development)

## Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/order-management-system.git
    cd order-management-system
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    composer install
    ```

3. **Setup environment variables:**

    Copy `.env.example` to `.env` and configure your database and other environment settings.

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. **Run the database migrations:**

    ```bash
    php artisan migrate
    ```

5. **Start the backend server:**

    ```bash
    php artisan serve
    ```

## Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the frontend application:**

    ```bash
    npm start
    # or
    yarn start
    ```

## API Endpoints

### Admin Authentication

- `POST /api/login` - Login admin

### Clients

- `GET /api/clients` - List all clients
- `POST /api/clients` - Create a new client
- `GET /api/clients/{id}` - Get a specific client
- `PUT /api/clients/{id}` - Update a specific client
- `DELETE /api/clients/{id}` - Delete a specific client

### Products

- `GET /api/products` - List all products
- `POST /api/products` - Create a new product
- `GET /api/products/{id}` - Get a specific product
- `PUT /api/products/{id}` - Update a specific product
- `DELETE /api/products/{id}` - Delete a specific product

### Categories

- `GET /api/categories` - List all categories
- `POST /api/categories` - Create a new category
- `GET /api/categories/{id}` - Get a specific category
- `PUT /api/categories/{id}` - Update a specific category
- `DELETE /api/categories/{id}` - Delete a specific category

### Orders

- `GET /api/orders` - List all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/{id}` - Get a specific order
- `PUT /api/orders/{id}` - Update a specific order
- `DELETE /api/orders/{id}` - Delete a specific order

## Database Schema

### Admins

- `id` (integer, primary key)
- `name` (string)
- `email` (string, unique)
- `password` (string)

### Clients

- `id` (integer, primary key)
- `name` (string)
- `email` (string, unique)
- `phone` (string)
- `status` (enum: ['available', 'unavailable'])

### Categories

- `id` (integer, primary key)
- `name` (string)
- `description` (string)

### Products

- `id` (integer, primary key)
- `name` (string)
- `description` (string)
- `category_id` (integer, foreign key)
- `price` (decimal)
- `quantityPerUnit` (integer)
- `unitsInStock` (integer)
- `unitsOnOrder` (integer)
- `status` (enum: ['available', 'unavailable'])
- `statusExiste` (enum: ['existe', 'deleted'])
- `image` (string)

### Orders

- `id` (integer, primary key)
- `client_id` (integer, foreign key)
- `amount` (decimal)
- `status` (enum: ['pending', 'paid', 'unpaid', 'partially_paid', 'refunded', 'partially_refunded', 'voided', 'deleted'])

### Order List

- `id` (integer, primary key)
- `order_id` (integer, foreign key)
- `product_id` (integer, foreign key)
- `quantity` (integer)
- `price` (decimal)
- `total` (decimal)

## Running the Application

1. **Start the backend server:**

    ```bash
    cd backend
    php artisan serve
    ```

2. **Start the frontend application:**

    ```bash
    cd ../frontend
    npm start
    # or
    yarn start
    ```

3. **Access the application:**

    Open your browser and go to `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend API.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.
