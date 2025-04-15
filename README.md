# E-Commerce Platform

A modern e-commerce platform built with Next.js 14.2.4 and Nest.js, focusing on scalability, maintainability, and SOLID principles. The platform includes a minimalist, light, and fast-performing UI with RTL support for Persian language.

## 🚀 Features

- **OTP Authentication**: Phone number-based authentication using OTP
- **Modern UI**: Utilizing Shadcn UI components and Tailwind CSS
- **RTL Support**: Full Persian language support with RTL layout
- **State Management**: Zustand for state management
- **Data Fetching**: React Query (Tanstack) for data fetching and caching
- **Form Validation**: Zod + React Hook Form for form validation
- **Database**: Prisma ORM with PostgreSQL
- **Monitoring**: Sentry for error tracking & Custom logging system

## 📂 Project Structure

```
ecommerce-platform/
├── frontend/               # Next.js 14.2.4 frontend
│   ├── src/
│   │   ├── app/            # App router
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   │   └── logger.ts   # Custom logger
│   │   └── providers/      # Context providers
│   ├── public/             # Static assets
│   └── ...
└── backend/                # Nest.js backend
    ├── src/
    │   ├── auth/           # Authentication module
    │   ├── user/           # User module
    │   ├── prisma/         # Prisma module
    │   ├── common/         # Common utilities
    │   │   └── logger/     # Custom logger module
    │   ├── app.module.ts   # Main app module
    │   └── main.ts         # Application entry point
    ├── prisma/             # Prisma schema and migrations
    └── ...
```

## 🛠️ Technologies

### Frontend
- **Next.js 14.2.4**: React framework with App Router
- **TypeScript**: Static typing
- **Shadcn UI & Radix UI**: Accessible component library
- **Tailwind CSS**: Utility-first CSS framework
- **React Query (Tanstack)**: Data fetching and caching
- **Zustand**: Lightweight state management
- **Zod + React Hook Form**: Form validation
- **Custom Logger**: Structured logging system

### Backend
- **Nest.js**: Progressive Node.js framework
- **TypeScript**: Static typing
- **Prisma ORM**: Database ORM
- **PostgreSQL**: Database
- **JWT**: Authentication
- **Swagger**: API documentation
- **Class Validator & Transformer**: DTO validation
- **Sentry**: Error tracking
- **Custom Logger Module**: Structured logging system

## 📝 Custom Logging System

The platform includes a custom logging system for both frontend and backend:

### Frontend Logger
```typescript
// Create a logger instance
import { createContextLogger } from '@/lib/logger';
const logger = createContextLogger('ComponentName');

// Usage
logger.info('User logged in successfully');
logger.error('Failed to fetch data', { error });
```

### Backend Logger
```typescript
// Inject the logger service
constructor(private readonly logger: LoggerService) {
  this.logger.setContext('ServiceName');
}

// Usage
this.logger.info('Database connected successfully');
this.logger.error('Authentication failed', { userId });
```

The logging system provides:
- Multiple log levels (error, warn, info, http, debug)
- Context-based logging
- Environment-based filtering (debug logs disabled in production)
- Formatted timestamps
- Structured metadata support

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-platform.git
cd ecommerce-platform
```

2. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Set up environment variables:
   - Create `.env.local` in the frontend directory
   - Create `.env` in the backend directory
   - Use the provided examples as reference

4. Set up the database:
```bash
# In the backend directory
npx prisma migrate dev --name init
```

5. Start the development servers:
```bash
# In the frontend directory
npm run dev

# In the backend directory
npm run start:dev
```

## 📱 Authentication Flow

1. User enters their phone number
2. System sends an OTP code to the phone number
3. User enters the OTP code
4. If valid, the system creates a JWT token and authenticates the user
5. If the phone number is new, a new user account is created

## 🔒 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXT_PUBLIC_SENTRY_DSN="your-sentry-dsn"
```

### Backend (.env)
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/ecommerce?schema=public"
JWT_SECRET="your-jwt-secret-key-change-in-production"
JWT_EXPIRATION="7d"
OTP_EXPIRATION_MINUTES=10
PORT=3001
NODE_ENV=development
SENTRY_DSN="your-sentry-dsn"
```

## 📜 API Documentation

Once the backend server is running, you can access the Swagger documentation at:
```
http://localhost:3001/api/docs
```

## 🚧 Future Enhancements

- Product catalog management
- Shopping cart functionality
- Order processing
- Payment integration
- User profile management
- Admin dashboard
- Advanced search and filtering
- Wishlist functionality
- Product reviews and ratings
- Multi-language support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.