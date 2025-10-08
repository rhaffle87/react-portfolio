import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'

import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import StaggeredMenu from './components/StaggeredMenu.jsx'
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className='container mx-auto overflow-x-hidden px-4'>
      <StaggeredMenu />
      <App />
    </div>
  </StrictMode>,
)
