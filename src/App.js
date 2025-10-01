import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./componentes/Header";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import Habilidades from "./componentes/Habilidades";
import Cursor from "./componentes/Cursor";
import Reconecta from "./componentes/Reconecta"; 
import Prosene from "./componentes/Prosene";
import SdM from "./componentes/SdM";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route path="/" element={
          <div>
            <Cursor />
            <Header />
            <Habilidades />
            <Proyectos />
            <Contacto />
          </div>
        } />

        {/* Página de Reconecta */}
        <Route path="/reconecta" element={<Reconecta />} />
        <Route path="/prosene" element={<Prosene />} />
        <Route path="/matricula" element={<SdM />} />
      </Routes>
    </Router>
  );
}

export default App;

