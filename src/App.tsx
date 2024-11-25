import Menu from './components/navbar/navbar';
import Templates from './components/templates/templates';
import About from './components/about/about';
import Certifications from './components/certifications/certifications';
import Contact from './components/contact/contact';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Menu principal */}
      <Menu />

      {/* Configuração das rotas */}
      <Routes>
        <Route path='/' element={<Navigate to='/about' replace />} />
        <Route path='/templates' element={<Templates />} />
        <Route path='/about' element={<About />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
