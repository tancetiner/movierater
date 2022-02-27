import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);