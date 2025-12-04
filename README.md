## AR Restaurant Menu

AR Restaurant Menu is a React + WebXR experience that allows users to view restaurant dishes in Augmented Reality or in a 3D fallback viewer when AR is not supported.
It includes a complete, responsive menu system with category sections, animated UI, and high-quality GLB dish models.

### ⚡Description

This project loads a restaurant’s dish model and displays it in AR mode using WebXR.
If the device does not support AR, the system automatically switches to a Three.js 3D fallback, keeping the experience functional across all devices.
The React UI manages the full menu: categories, dish details, pricing, buttons, and navigation.

### 🛰️ Technologies Used

React – UI structure, states, and layout

Three.js – 3D rendering for AR and fallback

WebXR – AR placement and hit-testing

React Hooks – state management

CSS / Tailwind – responsive UI styling

Vite

### 🔧 Features

AR Mode (WebXR)

Real-world plane detection and hit-testing

Place, rotate, and scale the dish model

On-screen AR instructions and overlays

3D Fallback Mode

Auto-detects when WebXR is unavailable

Displays the dish in a standard Three.js viewer

OrbitControls for movement and zoom

Full React Menu System

Responsive and mobile-friendly

Menu categories (e.g., Drinks, Starters, Desserts)

Dish cards, descriptions, images, and pricing

Smooth transitions between menu states

Branding & Visual Identity

Custom UI components

Clean layout suitable for restaurants

Optional color palette theming

Performance Considerations

Lazy-loading of GLB models

Memoized components

Optimized textures for mobile AR

### 🧩 The Process

WebXR Integration

Initializing AR sessions

Setting up hit-testing logic

Handling anchors and user placement flow

Fallback 3D Viewer

Detecting XR capabilities via navigator.xr

Building a complete Three.js scene

Adding interactive controls for non-AR users

React Application Flow

Component-based UI for the menu

React state to switch dishes and categories

Conditional rendering of AR / 3D modes

Design & UX

Responsive layout for mobile-first experiences

Intuitive AR entry button

Clear instructions for users unfamiliar with AR

### 📡 What I Learned

Integrating WebXR inside a React application

Creating reliable AR fallback systems for unsupported devices

Managing React state alongside Three.js rendering loops

Techniques for optimized mobile 3D content

Practical experience with hit-testing and AR surface detection

Structuring a complete menu UI with category logic

🔭 How It Can Be Improved

Add multi-dish placement in AR

Allow users to switch textures (e.g., plating variations)

Add real-time shadows in fallback mode via a shadow catcher

Build an internal CMS so restaurants can update menu items

Add motion effects (steam, glow, ingredient animations)

Offline support with service workers

📦 Running the Project
1. Clone the repository

2. Install dependencies
npm install

3. Start the development server
npm run dev

4. Open in your browser

5. AR Testing Notes

Use Chrome for Android for WebXR support.

iOS Safari does not support WebXR.

If AR is not available, the 3D fallback viewer loads automatically.
