import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StaggeredMenu from './components/StaggeredMenu';
import { menuItems, socialItems } from './data/data';
import Ribbons from './components/Ribbons';
import { GiSpinningRibbons } from "react-icons/gi";
import { motion as Motion } from "framer-motion";

function App() {
  const [showRibbons, setShowRibbons] = useState(true);

  return (
    <Router>
      {showRibbons && (
        <Ribbons
          baseThickness={35}
          colors={['#68480D' ,'#EDC06E']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      )}

      <Motion.div
        className="fixed bottom-4 right-4 z-10 flex flex-col items-center group"
      >
        {/* Tooltip */}
        <span
          className="mb-2 text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none select-none"
        >
          {showRibbons ? "Ribbons On" : "Ribbons Off"}
        </span>

        {/* Button */}
        <Motion.button
          onClick={() => setShowRibbons(!showRibbons)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: showRibbons ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`p-3 rounded-full shadow-lg border flex items-center justify-center transition-all duration-300
            ${
              showRibbons
                ? "bg-black text-white border-black animate-pulse"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
        >
          <GiSpinningRibbons
            className={`text-2xl transition-transform duration-300 ${
              showRibbons ? "rotate-180" : "rotate-0"
            }`}
          />
        </Motion.button>
      </Motion.div>

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
        logoUrl="/ger.png"
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

export default App;
