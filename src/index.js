import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Button from './Components/Button/Button';
import InputField from './Components/InputField/InputField';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>  
    <Route exact path='/' element={<App />} />
     <Route path='Dashboard' element= {<Dashboard />} />
     <Route path='Button' element= {<Button />} />
     <Route path='InputField' element= {<InputField />} />
  </Routes>
  </BrowserRouter>
);


