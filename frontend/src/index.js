import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import Saved from "./components/Saved";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
