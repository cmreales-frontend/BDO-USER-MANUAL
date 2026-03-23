# BDO User Manual - React Application

A professional React.js application for BDO's BRPS Payment Processor user manual documentation.

## Features

- ✅ React Router for seamless navigation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Real-time search functionality
- ✅ BDO corporate branding and styling
- ✅ Smooth animations and transitions
- ✅ Component-based architecture
- ✅ Mobile-friendly navigation

## Project Structure

```
bdo-user-manual/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   └── PageHeader.js
│   ├── pages/
│   │   ├── Introduction.js
│   │   ├── UserRoleTypes.js
│   │   ├── UserFunctionTypes.js
│   │   ├── Functionalities.js
│   │   └── ErrorMessages.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Installation

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Recommended version: 16.x or higher

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to: http://localhost:3000

## Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Components

### Header
- Displays BDO logo
- Fixed position at top

### Navigation
- Sidebar navigation menu
- Active route highlighting
- Mobile responsive with toggle

### PageHeader
- Page title display
- Search functionality
- Responsive layout

### Pages
- **Introduction** - Overview and conventions
- **User Role Types** - Role definitions
- **User Function Types** - Function descriptions
- **Functionalities** - System features
- **Error Messages** - Error codes and solutions

## Technologies Used

- **React** 18.2.0
- **React Router DOM** 6.20.0
- **Font Awesome** 6.0.0 (for icons)
- **CSS3** (custom styling)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## Customization

### Colors
Edit CSS variables in `src/styles/App.css`:
```css
:root {
  --bdo-blue: #003d7a;
  --bdo-dark-blue: #002952;
  --bdo-orange: #f39c12;
}
```

### Navigation Items
Edit the `navItems` array in `src/components/Navigation.js`

### Content
Update individual page components in `src/pages/`

## Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## License

Proprietary - BDO Unibank

## Support

For technical support, contact the development team.
