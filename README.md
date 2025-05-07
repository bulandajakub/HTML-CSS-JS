# HTML-CSS-JS

A collection of simple projects created to practice and learn HTML, CSS, and JavaScript. This repository includes various small exercises, UI components, and interactive elements to improve frontend development skills.

⚠️ **Warning:** This README might turn into an **endless scroll** as more projects get added. 🤖
Grab a coffee ☕, get comfy 🛋️, and enjoy the ride through this ever-growing collection of frontend experiments!

# Projects list

## 00-components

This folder is intended to collect **reusable UI components** and patterns, which can be shared or integrated into other projects over time.

### nav_bar / 01-animated_responsive_navbar

This project implements a modern, responsive, and animated navigation bar. It adapts based on screen size: on large screens, it appears vertically on the left and expands on hover; on small screens, it switches to a horizontal layout at the bottom. The navigation uses SVG icons for clarity and aesthetics.

Key features include:

- 🎨 CSS Variables for customizable themes.
- 🌓 Theme Switcher: Three themes (dark, light, and solar) can be toggled with persistent state stored in localStorage.
- 💻 Responsive Design: Vertical layout for desktops and horizontal for mobile.
- ✨ Animated Effects: Smooth transitions on hover and logo rotation.
- 🧠 JS Theme Logic: Cycles through the themes and updates the DOM accordingly.

Based on the YouTube tutorial:  
📌 [Fireship - Animated Responsive Navbar with CSS] https://tinyurl.com/sy3r3s6n

### nav_bar / 02-Advanced_dropdown_menu

An advanced dropdown menu component built with React and CSS. This menu features **nested navigation**, **smooth animated transitions**, and **automatic height calculation** to ensure layout stability during menu switches.

Key features include:

- 🧭 Multi-Level Navigation: Supports nested submenus with intuitive back navigation.
- 📏 Dynamic Height Animation: Automatically adjusts height based on content, preserving transition effects.
- 🎨 Smooth Transitions: Enter and exit animations for seamless user experience.
- ⚙️ Component-Based Structure: Clean and reusable logic with React and CSSTransition.
- 🛠️ Bug Fixes: Improved handling of layout glitches during height recalculations.

Based on the YouTube tutorial:  
📌 [Fireship - Advanced Dropdown Menu - React & CSS Animation] https://tinyurl.com/4c9245jb

### theme_switcher / 01-CSS_theme_switcher

This project demonstrates the use of **CSS variables** to create a dynamic theme switcher. The focus is on utilizing **CSS custom properties** to manage colors, background, and layout schemes efficiently across the site. The theme can be toggled between light, dark, and solar modes using simple buttons.

A **subtle animation** is applied to the logo during theme changes, providing a nice touch that enhances the user experience.

The theme structure is well-organized, with **CSS variables** controlling the design elements and ensuring that changes to the theme are reflected consistently throughout the page.

Based on the YouTube tutorial:  
📌 [Fireship - CSS Theme Switcher] https://shorturl.at/Afm3C

## 01_Basics

This project is a collection of simple web pages created while learning HTML, CSS, and JavaScript. The main focus is on structuring HTML properly, applying CSS for styling, and using JavaScript to enhance interactivity.

**Features:**

- Various HTML page structures
- CSS styling for layout and typography
- JavaScript script for dynamically loading partial HTML files into the main page
- This project serves as a practice ground for experimenting with front-end technologies. 🚀

---

## 02_CSS-grid

This project contains multiple **CSS Grid layouts**, each designed to showcase different aspects of grid-based design. The goal is to practice grid properties and learn how to build flexible and responsive layouts using CSS Grid.

### grid-1

A simple **3x3 grid** layout demonstrating the fundamental concepts of CSS Grid.

### grid-2

A layout demonstrating how **grid items can span multiple columns and rows**.

### grid-3

This example explores **nesting grids inside grid items** to create more complex layouts.

### grid-4

This layout focuses on **precise alignment and positioning** of grid items using CSS Grid properties.

### grid-5

A **12-column CSS Grid layout** which also includes a **toggleable grid overlay** for better visualization of the structure.

### grid-6

This layout consists of five distinct grid items, each spanning multiple rows and columns, creating a visually appealing **mosaic effect**. The entire grid is rotated by 45 degrees and scaled down, giving it a unique, artistic look.

### grid-7

This **responsive grid-based layout** follows a structured **semantic arrangement**.

- 📱 **On smaller screens:** The **footer moves above the main content**, while `aside` and `nav` are placed below.
- 💻 **For wider screens (`min-width: 760px`)** a **two-column structure** is applied, positioning `aside` and `nav` alongside the `main` content for better usability.

---

# 03_CSS-animation

This project is a collection of simple animations created while learning CSS animations and transitions. The main focus is on using **CSS keyframes**, **transitions**, and **timing functions** to create smooth and engaging effects.

Based on the YouTube playlist:  
📌 [The Net Ninja - CSS Animations] https://shorturl.at/V6PTY

#### 🏎️ **luigiStuntman**

- A fun animation where **Luigi performs a backflip** while driving.
- Uses **CSS keyframes** to animate movement and rotation.
- Includes background elements like **clouds, grass, and a road** for a complete scene.

#### 🛍️ **webThings**

- **Pop-up Animation:** A stylish **swinging pop-up** with email input.
- **Basket Animation:** A **smooth zoom effect** when adding products to the basket.
- Uses **CSS keyframes** and **JavaScript/jQuery** for interactive effects.

### 🎴 **flippingCards**

- A **hover-based card flip animation** using **CSS keyframes**.
- Each card has a **front and back face**, rotating on the Y-axis.
- Uses **timing functions** for smooth flipping effects.

---

## 04_CSS-flexbox

This project contains multiple **CSS Flexbox layouts**, each designed to showcase different aspects of flexible box-based design. The goal is to practice flex properties and learn how to build adaptable and responsive layouts using CSS Flexbox.

### flex-1

A simple **flex container** demonstrating the fundamental concepts of Flexbox, including `flex-grow`, `flex-shrink`, and `flex-basis`.

### flex-2

This example demonstrates **flex-wrap** in CSS Flexbox. The `flex-wrap` property allows items to wrap onto multiple lines instead of shrinking to fit within the container.

### flex-3

This example focuses on **flex-basis** and the shorthand `flex` property in CSS Flexbox. This example also highlights the difference between `width` and `flex-basis`

### flex-4-navBar

This example demonstrates how to create a **responsive navigation bar** using CSS Flexbox.

### flex-5-nestedNavBar

This example expands on the previous navigation bar by introducing a **nested flexbox layout** for a social media menu.

- The navigation bar has two `ul` elements: one for main navigation links and one for social media links.
- `display: flex;` is applied to `nav` to create a **flexible navigation structure**.
- The `.social` list is styled as a **flex container**, with each social media item evenly distributed.
- A **grid-based article section** is included, which switches to a stacked layout using JavaScript.
- The layout dynamically changes between **grid and stacked formats** using the `stack` class.

This setup demonstrates **nested flexbox usage** and a **hybrid grid-flexbox approach** for responsive design.

### flex-6

This example demonstrates **flexbox ordering**, which allows elements to be visually rearranged **without changing the HTML structure**. This technique is useful for dynamically **changing layouts without modifying the HTML**.

---

## 05_CSS-variables

This project demonstrates the use of **CSS variables** to create dynamic, reusable styles across the website. The focus is on leveraging **CSS custom properties** for colors, layouts, and other elements to make the design adaptable and easy to maintain.

### variables-1

This project demonstrates how **CSS variables** can be used to manage layout and color schemes. The goal is to create reusable, maintainable styles that can be easily customized across the site. It showcases how to:

- Define **custom properties** for colors and layout.
- Apply these variables consistently across different elements.
- Use **media queries** to adjust the layout for responsiveness.

---

## 06-React_Next_ShadCN-UI_component_library

A small UI component library built using **React**, **Next.js**, and the **ShadCN UI framework**. This project follows a tutorial by Dave Gray and demonstrates how to set up a component-driven design system using modern tools and conventions.

Key features include:

- ⚛️ React-based structure for reusable UI components
- 💨 Tailwind CSS for utility-first styling
- 🧩 ShadCN UI components: pre-built, accessible, and customizable
- 📦 Organized file structure for scalability
- 🛠️ Great starting point for creating a full component library or design system

Based on the YouTube tutorial:  
📌 [Dave Gray – UI Component Library Tutorial] https://www.youtube.com/watch?v=v0_AT8zaLo8

---
