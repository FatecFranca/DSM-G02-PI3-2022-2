import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//IMPORT DAS PAGINAS DA APLICAÇÃO
import Home from './pages/Home/Home'



function App() {
  return (
   //ROTAS DA APLICAÇÃO
   <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
      </Routes>
   </Router>
  );
}

export default App;