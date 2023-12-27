# Microfrontend Study Project

This is a study project on Microfrontends, developed with the aim of exploring and understanding the concepts associated with this innovative architecture. Microfrontend is an architectural approach that enables breaking down a monolithic application into smaller, independent, and autonomous parts, providing benefits such as scalability, easier maintenance, and parallel development.

## Overview
The project consists of a web application divided into independent modules, each representing a specific functionality. Each module is a Microfrontend, developed and maintained separately, allowing the team to work in isolation on their respective areas without affecting other parts of the system.

## 🚀 Technologies Used

- **Vite:** Utilized with the **vite-plugin-federation** plugin for Microfrontend control.
- **Tailwind CSS:** Used for styling the application.
- **TypeScript:** Implemented for strong typing and improved developer experience.
- **React:** Employed for building modular and reusable components.

## 📂 Project Structure

The project is intuitively structured, with the main directories being:

- **`/host`:** The Microfrontend "host" is the main component developed in React with TypeScript. It contains the Home component (which includes the product list, Navbar, and AppRoutes).
- **`/order-app`:** Child component developed in React with TypeScript. It houses the Checkout and Orders components.
- **`/product-app`:** Another child component developed in React with TypeScript. It contains the ProductDetails component.

## 🔧 Getting Started

1. **Install Dependencies:** Run `pnpm install` to install the project dependencies.
2. **Start Microfrontend host Server:** Run `pnpm run dev:hosts` to start the host server .
3. **Build Remotes:** Run `pnpm run build:remotes` to build the Microfrontend remotes
2. **Start Microfrontend remotes Servers:** Run `pnpm run serve:remotes`
   - order-app: [http://localhost:5001](http://localhost:50001)
   - product-app: [http://localhost:5002](http://localhost:5002)

Visit [http://localhost:5000](http://localhost:5000) to view the project in your browser.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
