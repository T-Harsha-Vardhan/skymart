# SkyMart

SkyMart is a modern e-commerce web application built with React, offering a seamless shopping experience with a clean, responsive user interface.

## 🚀 Features

- **Product Catalog:** Browse products with detailed views.
- **Categorization:** View products by category.
- **Shopping Cart:** Add, remove, and manage items in the cart.
- **User Authentication:** Login and Registration pages for user accounts.
- **User Profile:** Manage user profile information.
- **Responsive Design:** Optimized for all screen sizes using Tailwind CSS.
- **Design System:** Built-in UI component library and design system.
- **Toast Notifications:** Beautiful toast notifications for user actions.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing:** [React Router 8](https://reactrouter.com/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

## 📦 Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v18 or higher recommended)
- npm or yarn

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd skymart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📁 Folder Structure

```
skymart/
├── public/             # Static assets
├── src/
│   ├── api/            # API integration and services
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers (e.g., Auth, Cart)
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Page layout components
│   ├── pages/          # Application pages (Home, Products, Login, etc.)
│   ├── routes/         # Routing configuration
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
└── package.json        # Project metadata and scripts
```

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Runs ESLint to analyze the code for potential errors.

## 📄 License

This project is licensed under the MIT License.
