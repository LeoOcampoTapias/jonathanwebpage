import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './routes/About';
import Contacto from './routes/Contacto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={ <App />}/>
    <Route path="/about" element={ <About />}/>
    <Route path="/contacto" element={ <Contacto />}/>
   </Routes>
  </BrowserRouter>
);

