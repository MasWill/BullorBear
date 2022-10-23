import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Playing from './pages/Playing';
import Lose from './pages/Lose';
import { useEffect, useState } from "react"



function App() {
  
  return (
    <div> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/playing" element={<Playing />} />
                <Route path="/lose/:score" element={<Lose />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
