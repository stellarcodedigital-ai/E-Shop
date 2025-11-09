# E-Shop - Online Store

A modern, fully responsive e-commerce web application built with React, Vite, and Tailwind CSS.

## Features

- Product browsing with search and filter functionality
- Shopping cart with add/remove/update quantity
- User authentication (login/signup)
- Checkout flow with order summary
- Fully mobile responsive design
- Modern UI with Tailwind CSS
- Mock data for quick prototyping

## Tech Stack

- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, ProductCard)
├── pages/           # Page components (Home, Products, Cart, etc.)
├── context/         # React Context for state management
├── data/            # Mock product data
└── utils/           # Utility functions
```

## Features Overview

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- Persistent cart (localStorage)
- Real-time cart total calculation

### Product Search & Filter
- Search by product name
- Filter by category
- Sort by price, rating, or name

### Authentication
- Login/Signup forms
- Mock authentication (no backend required)
- Protected checkout flow
- User session persistence

### Mobile Responsive
- Optimized for all screen sizes
- Mobile-friendly navigation
- Touch-friendly UI elements
