# Project Title

## Overview

This is a Backend Template, built with **Node.js** and **TypeScript**. It follows a modular architecture with features like authentication, rate limiting, and notifications.

---

## Features

- **Authentication**: Secure login and registration for users.
- **Notification System**: Notify users about quiz-related updates.
- **Rate Limiting**: Protect APIs from excessive requests.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **TypeScript**: For strong typing and maintainability.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing application data.
- **express-rate-limit**: Middleware for rate limiting.
- **JWT**: For user authentication and authorization.

---

## Folder Structure

````plaintext
src/
    users/
    user.routes.ts
    user.controller.ts
    user.service.ts
    user.dto.ts
    user.model.ts


---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amitkumar9297/quiz_backend.git
````

2. Navigate to the project directory:

   ```bash
   cd quiz_backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file for environment variables:

   ```plaintext
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/quizApp
   JWT_SECRET=your_jwt_secret
   RATE_LIMIT_WINDOW=15 * 60 * 1000
   RATE_LIMIT_MAX=100
   ```

5. Start the development server:
   ```bash
   npm run local
   ```

---
