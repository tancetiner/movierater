import React from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";
import LoginForm from './components/LoginForm'
import RegisterForm from "./components/RegisterForm";


const App = () => {

  return (
    <div>
      <h1> Movie Rater</h1>
      <p> Welcome to the Movie Rater! </p>
      <LoginForm> </LoginForm>
    </div>
  );
}

export default App;
