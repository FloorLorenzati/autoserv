import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portada from './pages/portada';
import Pantalla1 from './pages/pantalla1';
import Pantalla2 from './pages/pantalla2';
import Pago from './pages/pago';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/pantalla1" element={<Pantalla1 />} />
        <Route path="/pantalla2" element={<Pantalla2 />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </Router>
  );
}

export default App;
