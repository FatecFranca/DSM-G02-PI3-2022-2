import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//IMPORT DAS PAGINAS DA APLICAÇÃO
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'



function App() {
  return (
   //ROTAS DA APLICAÇÃO
   <Router>
      <Routes>
      <Route path="/Sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
      </Routes>
   </Router>
  );
}

export default App;