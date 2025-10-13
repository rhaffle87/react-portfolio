# Rafli's Portfolio

A modern, interactive personal portfolio website built with React, showcasing projects, skills, and contact information. This portfolio features smooth animations, a like system with real-time updates, and a responsive design optimized for all devices.

## 🚀 Live Demo

[View Live Portfolio](https://raflialif.vercel.app/)

## 📋 Overview

This is a single-page application (SPA) portfolio for Rafli Alif Ihza Hartono, a Telecommunications Engineering student passionate about web development and electronics. The site includes sections for introduction, about, tools/skills, projects, and contact, with interactive elements and smooth animations.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Animations**: Powered by Framer Motion, GSAP, and AOS for smooth transitions and effects
- **Like System**: Real-time like counter using Redis backend with local storage to prevent multiple likes
- **Animated Ribbons**: Customizable ribbon animations using OGL and Three.js
- **Staggered Menu**: Animated navigation menu with social links
- **Logo Loop**: Infinite scrolling logo carousel for tools/skills
- **Contact Form**: Integrated contact form using FormSubmit
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized with Vite build tool and code splitting

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library with hooks and modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **GSAP** - High-performance animation library
- **AOS (Animate On Scroll)** - CSS animation library
- **Three.js & OGL** - 3D graphics and animations
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Lucide React** - Additional icon components

### Backend/API
- **Redis** - In-memory data structure store for like counter
- **Node.js** - Runtime for API endpoints

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rhaffle87/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your Redis URL:
   ```env
   REDIS_STORAGE_REDIS_URL=your_redis_connection_string
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🚀 Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Deployment
The project is configured for deployment on Vercel with the included `vercel.json` configuration.

## 📁 Project Structure

```
react-portfolio/
├── api/                          # API endpoints
│   ├── getLikes.js              # Get likes count
│   └── Likes.js                 # Increment likes
├── public/                       # Static assets
│   ├── assets/
│   │   ├── favicon.ico
│   │   ├── hero-img.png
│   │   ├── hero-img.webp
│   │   ├── proyek/              # Project images
│   │   └── tools/               # Tool icons
│   └── ger.png                  # Logo
├── src/
│   ├── components/               # Reusable components
│   │   ├── Counter.jsx          # Like counter component
│   │   ├── Footer.jsx           # Footer component
│   │   ├── LogoLoop.jsx         # Logo carousel
│   │   ├── Navbar.jsx           # Navigation
│   │   ├── Preloader.jsx        # Loading screen
│   │   ├── Ribbons.jsx          # Animated ribbons
│   │   └── StaggeredMenu.jsx    # Animated menu
│   ├── data/
│   │   └── data.js              # Static data (tools, projects, etc.)
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   ├── pages/                   # Page components
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact page
│   │   ├── Home.jsx             # Home page
│   │   ├── Projects.jsx         # Projects page
│   │   └── Tools.jsx            # Tools/Skills page
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── .gitignore                   # Git ignore rules
├── components.json              # Component configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── jsconfig.json                # JavaScript configuration
├── package.json                 # Dependencies and scripts
├── README.md                    # This file
├── vercel.json                  # Vercel deployment config
└── vite.config.js               # Vite configuration
```

## 🔌 API Endpoints

### GET /api/getLikes
Returns the current total likes count.

**Response:**
```json
{
  "totalLikes": 12
}
```

### POST /api/Likes
Increments the like counter by 1.

**Response:**
```json
{
  "success": true,
  "totalLikes": 13
}
```

**Note:** Requires Redis connection via `REDIS_STORAGE_REDIS_URL` environment variable.

## 🎨 Customization

### Colors and Themes
The portfolio uses a dark theme with yellow accents. Main colors:
- Background: `zinc-900` (#18181b)
- Primary: `yellow-700` (#b45309)
- Secondary: `zinc-800` (#27272a)

### Adding New Projects
Edit `src/data/data.js` and add to the `listProyek` array:
```javascript
{
  id: 6,
  gambar: "/assets/proyek/new-project.webp",
  nama: "New Project Name",
  desk: "Project description",
  tools: ["Tech1", "Tech2"],
  role: "Your Role",
  year: "2025",
  dad: "600", // Animation delay
  link: "https://project-link.com"
}
```

### Adding New Tools
Add to the `listTools` array in `src/data/data.js`:
```javascript
{
  id: 13,
  gambar: "/assets/tools/new-tool.png",
  nama: "New Tool",
  ket: "Category",
  dad: "1300"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rafli Alif Ihza Hartono**
- GitHub: [@rhaffle87](https://github.com/rhaffle87)
- LinkedIn: [Rafli Alif Ihza Hartono](https://www.linkedin.com/in/rafli-alif-ihza-hartono-084460288/)
- Instagram: [@rhaffle87](https://www.instagram.com/rhaffle87/)
- Email: rhaffle87@gmail.com

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations inspired by various open-source projects
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts

---

⭐ If you like this project, give it a star on GitHub!
