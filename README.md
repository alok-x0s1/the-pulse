# The Pulse

A modern, interactive dashboard application for managing tasks and items with real-time analytics. Built to learn AWS S3 and CloudFront deployment strategies while demonstrating professional React development practices.

Live link: [d2he2keld5hy9b.cloudfront.net](https://d2he2keld5hy9b.cloudfront.net)

## Why I Built This

This project was created with three main goals:

1. **Learn AWS S3 & CloudFront** - Master static site hosting on S3 and global CDN distribution via CloudFront for fast, reliable content delivery
2. **Modern React Development** - Implement professional patterns including TanStack Query, React Context, custom hooks, and TypeScript best practices
3. **Production-Ready Code** - Create a template-quality application that demonstrates proper architecture, accessibility, and performance optimization

## Features

-   **Task Management (CRUD)** - Create, read, update, and delete items with instant feedback
-   **Toast Notifications** - Success, error, warning, and info messages with auto-dismiss
-   **Confirmation Dialogs** - Safe deletion with confirmation popups to prevent accidents
-   **Analytics Dashboard** - Real-time charts showing trends, status distribution, and priority breakdown
-   **Item Details Page** - View full item information with metadata and timestamps
-   **Dark Mode** - Toggle between light and dark themes with persistent storage
-   **Responsive Design** - Works perfectly on mobile, tablet, and desktop
-   **Profile Management** - User account section with preferences and settings [dummy]
-   **Smooth Animations** - Page transitions and component effects powered by Framer Motion

## Tech Stack

### Frontend

-   **React 19** - Latest React with concurrent features
-   **TypeScript** - Full type safety with strict mode
-   **Tailwind CSS** - Utility-first styling framework

### State & Data

-   **TanStack Query** - Professional caching and server state management
-   **React Context** - Theme and notification state management
-   **LocalStorage** - Client-side data persistence

### UI & Animation

-   **Framer Motion** - Smooth page and component animations
-   **Recharts** - Beautiful, responsive data visualization charts
-   **Lucide Icons** - Modern, consistent icon library

## Getting Started

### Installation

```bash
# Clone or download the project
git clone https://github.com/alok-x0s1/the-pulse
cd the-pulse

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

### Quick Navigation

-   **Landing** (`/`) - Feature overview and introduction
-   **Dashboard** (`/dashboard`) - Analytics and metrics
-   **Items** (`/items`) - Task management with CRUD
-   **Item Details** (`/items/[id]`) - Full item information
-   **Analytics** (`/analytics`) - Advanced charts and trends
-   **Profile** (`/profile`) - Account information
-   **Settings** (`/settings`) - App configuration

## How to Use

### Creating Items

1. Go to **Items** page
2. Click **+ New Item**
3. Fill in title, description, priority, and status
4. Click **Save**
5. Success toast appears confirming creation

### Editing Items

1. Click the **Edit** button on any item in the list
2. Update the form fields
3. Click **Save**
4. Toast confirms successful update

### Deleting Items

1. Click **Delete** button on an item
2. Confirmation dialog appears asking to confirm
3. Click **Delete** to confirm or **Cancel** to abort
4. Success toast appears on deletion

### Viewing Analytics

1. Go to **Analytics** page
2. See real-time metrics updated as items change
3. View charts: Line (trends), Pie (status), Bar (priority)
4. Read AI-generated insights based on data

## Architecture

### Key Patterns

**TanStack Query (React Query)**

-   Manages data fetching and caching
-   Automatic synchronization between server and UI
-   Mutations handle create, update, delete operations
-   Cache invalidation keeps data fresh

**Custom Hooks**

-   `useItems()` - Fetch and manage items
-   `useAnalytics()` - Get analytics data
-   `useToast()` - Show notifications
-   `useTheme()` - Theme management

**Mock API Layer**

-   Simulates backend without server
-   localStorage persistence for demo data
-   200-400ms network delays for realistic feel
-   Complete CRUD implementation

## Production Build

### Building

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

Build outputs to `dist/` folder optimized for static export.

## Data Persistence

Currently, The Pulse uses **localStorage** for demo data. All items, changes, and preferences are stored locally in your browser.

For production use, you should integrate a real backend:

-   **Node.js + Express** - Custom backend
-   **Supabase** - PostgreSQL with authentication
-   **Firebase** - Google's realtime database
-   **MongoDB + Node** - NoSQL solution

## Performance

The Pulse is optimized for speed:

-   Code splitting by route
-   CSS minification
-   JavaScript minification
-   Efficient caching with TanStack Query
-   GPU-accelerated animations

## Future Improvements

-   Real backend API integration
-   User authentication (Google OAuth, JWT)
-   Database for persistent storage
-   Real-time collaboration
-   Mobile app (React Native)
-   Advanced reporting features
-   Team/workspace support
-   Data export (CSV, PDF)

## Learning Resources

-   [React Documentation](https://react.dev)
-   [TanStack Query Guide](https://tanstack.com/query/latest)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [Framer Motion](https://www.framer.com/motion)
-   [AWS S3 Guide](https://docs.aws.amazon.com/s3/)
-   [CloudFront Guide](https://docs.aws.amazon.com/cloudfront/)

**Built with ❤️ to learn AWS deployment and modern React patterns.**

### Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-Alok%20Yadav-181717?logo=github)](https://github.com/alok-x0s1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alok%20Yadav-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/alok-x0s1)
[![LinkedIn](https://img.shields.io/badge/Instagram-Alok%20Yadav-E4405F?logo=instagram&logoColor=white)](https://instagram.com/9.pnpm)

