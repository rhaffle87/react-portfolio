import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StaggeredMenu from './components/StaggeredMenu';
import { menuItems, socialItems } from './data/data';

function App() {
  return (
    <Router>
      <StaggeredMenu
        className='animate__animated animate__fadeInUp animate__delay-2s'
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#EDC06E' , '#E09B1B' , '#68480D']}
        logoUrl="/vite.svg"
        accentColor="#E09B1B"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
