# Converso - Real-time AI Teaching Platform

## 🚀 Quick Setup Instructions

This project has been configured with Clerk authentication using the correct Next.js App Router approach. Follow these steps to get started:

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Clerk

1. Create an account at [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your API keys from the dashboard
4. Create a `.env.local` file in the root directory:

```bash
# Clerk Environment Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Optional: Customize Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Run the Development Server

```bash
npm run dev
```
