# Next.js 15 App Router Project

A basic Next.js 15 project using the app router, TypeScript, and modern React features.

## Features

- **Next.js 15** - Latest version with app router
- **TypeScript** - Type-safe development
- **App Router** - File-based routing system
- **Server Components** - Default server-side rendering
- **API Routes** - Backend API endpoints for testing
- **Modern UI** - Clean and responsive design

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── api/
│   │   └── test/
│   │       └── route.ts  # API route for testing
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (with API testing)
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Testing

The project includes a test API endpoint at `/api/test` that supports both GET and POST requests:

### GET Request
```
GET /api/test?name=YourName
```

### POST Request
```
POST /api/test
Content-Type: application/json

{
  "name": "Next.js 15",
  "type": "Framework",
  "version": "15.0.0"
}
```

You can test these endpoints directly from the home page using the provided buttons, or test them manually using tools like curl or Postman.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [TypeScript with Next.js](https://nextjs.org/docs/pages/building-your-application/configuring/typescript)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
