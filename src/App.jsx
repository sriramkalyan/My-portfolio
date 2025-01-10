
import {Routes, Route } from 'react-router-dom';
 // Adjust the path if needed
import Skills from './pages/Skills.jsx';  // Define your pages as components
import Experiences from './pages/Experiences.jsx';
import Projects from './pages/Projects.jsx';
import CV from './pages/CV.jsx';
import About from './pages/About.jsx';

function App() {
  return (

      <Routes>
        <Route path="/" element={<About />} /> {/* Default route */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

  );
}

export default App;
