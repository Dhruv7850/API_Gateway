API Gateway & Authentication Service


This repository contains the API Gateway and Authentication Service for a microservices-based architecture. Built with Node.js and Express, it handles user registration, authentication (JWT), and role-based access control (RBAC).

Features
User Management: Complete signup and signin functionality with encrypted passwords.

Authentication: Secure authentication using JSON Web Tokens (JWT).

Authorization (RBAC): Role-based access control allowing specific permissions for roles like ADMIN, CUSTOMER, and FLIGHT_COMPANY.

Middleware Protection: Request validation and authentication checks for protected routes.

Database Integration: Uses Sequelize ORM with MySQL for managing users and roles.

Structured Error Handling: Centralized error management using custom AppError classes.

Project Structure
The project follows a modular architecture for scalability and maintainability:

src/config: Environment and server configurations, including Logger setup.

src/controllers: Handles incoming HTTP requests and interacts with services.

src/middlewares: Intercepts requests for validation and authentication (e.g., checking if a user is an admin).

src/models: Sequelize models for User, Role, and the junction table User_Role.

src/repositories: Encapsulates database logic using the Repository Pattern.

src/routes: API endpoint definitions categorized by version (V1).

src/services: Contains business logic, such as password hashing and token generation.

src/utils: Common helpers, enums, and success/error response formatters.

Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MySQL

ORM: Sequelize

Security: bcrypt (hashing), jsonwebtoken (JWT)

Logging: Winston

Installation
Clone the repository:


`git clone <repository-url>`
`cd API_Gateway`

Install dependencies:

`npm install`

