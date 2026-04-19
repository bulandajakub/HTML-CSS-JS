# Good Design System (Foundation)

Welcome to the **Good Design System**, a production-grade UI architecture designed for scalability, modularity, and a premium developer experience. This project demonstrates a comprehensive implementation of modern web engineering principles, moving beyond simple component creation into a structured design system foundation.

## 🏗️ Core Architecture & Philosophy

The system is built on the principle of **Separation of Concerns**—decoupling design intent (tokens) from visual implementation (components) and application logic.

-   **Modular CSS Architecture**: Using Next.js **CSS Modules**, we ensure that every component owns its own styles. This eliminates global namespace pollution, prevents side effects, and makes the codebase highly maintainable.
-   **Centralized Design Tokens**: Themes and primitives are managed via **CSS Custom Properties** (Variables). This allows for near-instant brand updates and a unified visual language across the entire application.
-   **Atomic & Reusable**: Components are designed as pure UI building blocks—"dumb" components that are highly performant and easily composable into complex layouts.

## ✨ Key Features

-   🎨 **Dynamic Theming System**: Robust support for Light and Dark modes with a "zero-flicker" implementation.
-   🌓 **Theme Consistency**: Uses `next-themes` and CSS variables to ensure a smooth transition with zero layout shift (CLS).
-   🧩 **Core Component Library**: Includes production-ready components such as `Button`, `Tooltip`, and `Divider`—all with scoped styling and strict TypeScript typing.
-   ⚡ **Performance Focused**: Optimized for fast rendering and minimal runtime overhead by leveraging built-in Next.js optimizations.

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Project Structure Overview
-   `src/app/css/`: The system's "brain"—contains `_tokens.css`, `_themes.css`, and global base styles.
-   `src/components/ui/`: Atomic components, each with its own `.module.css` file.
-   `src/components/layout/`: Functional layout components that implement the design system.

---

*This project serves as a demonstration of high-quality UI engineering and architectural best practices for modern web applications.*
