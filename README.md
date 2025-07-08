# REST API

A well-structured REST API built with Node.js, Express, and MongoDB following industry best practices.

## Directory Structure

```
├── src/
│   ├── controllers/          # Business logic
│   │   └── userController.js
│   ├── models/              # Database schemas
│   │   └── User.js
│   ├── routes/              # API endpoints
│   │   └── userRoutes.js
│   ├── middleware/          # Custom middleware
│   │   └── errorHandler.js
│   ├── config/              # Configuration files
│   │   └── database.js
│   └── app.js              # Express app configuration
├── server.js               # Server entry point
├── package.json
└── .env                   # Environment variables
```

## API Endpoints

- `GET /users` - Fetch all users
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   DB_CONNECTION=mongodb://localhost:27017/your-database
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Features

- ✅ Proper separation of concerns
- ✅ MVC-like architecture
- ✅ Centralized error handling
- ✅ Clean, maintainable code structure
- ✅ Environment-based configuration
- ✅ Graceful shutdown handling

## Development

- `npm start` - Start the production server
- `npm run dev` - Start the development server