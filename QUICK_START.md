# Quick Start Guide - BDO User Manual React App

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: Open Browser
The app will automatically open at: **http://localhost:3000**

---

## 📁 Project Structure
```
bdo-user-manual/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.js        # Top header with logo
│   │   ├── Navigation.js    # Sidebar navigation
│   │   └── PageHeader.js    # Page title & search
│   ├── pages/               # Page components
│   │   ├── Introduction.js
│   │   ├── UserRoleTypes.js
│   │   ├── UserFunctionTypes.js
│   │   ├── Functionalities.js
│   │   └── ErrorMessages.js
│   ├── styles/
│   │   └── App.css          # All styles
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
├── package.json             # Dependencies
└── README.md                # Full documentation
```

---

## 🎨 Features

✅ **React Router** - Client-side routing  
✅ **Responsive Design** - Works on all devices  
✅ **Search** - Real-time content search  
✅ **BDO Branding** - Official colors and logo  
✅ **Smooth Animations** - Professional transitions  

---

## 🔧 Common Commands

### Development
```bash
npm start          # Start dev server (http://localhost:3000)
npm test           # Run tests
```

### Production
```bash
npm run build      # Create production build
```

The production build will be in the `build/` folder, ready to deploy.

---

## 🌐 Navigation Routes

- `/` - Introduction
- `/user-role-types` - User Role Types
- `/user-function-types` - User Function Types
- `/functionalities` - Functionalities
- `/error-messages` - Error Messages

---

## 💡 Making Changes

### Adding a New Page
1. Create component in `src/pages/YourPage.js`
2. Add route in `src/App.js`
3. Add nav item in `src/components/Navigation.js`

### Changing Colors
Edit CSS variables in `src/styles/App.css`:
```css
:root {
  --bdo-blue: #003d7a;
  --bdo-orange: #f39c12;
}
```

---

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
# Use different port
PORT=3001 npm start
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear build cache
rm -rf build
npm run build
```

---

## 📦 Deployment

### Deploy to Netlify
1. Run `npm run build`
2. Drag `build` folder to https://app.netlify.com/drop

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

---

## 🎯 Next Steps

- Customize content in page components
- Add more pages as needed
- Modify styling in App.css
- Deploy to production

---

**Need help?** Check README.md for detailed documentation.
