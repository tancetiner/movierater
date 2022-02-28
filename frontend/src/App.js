import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Typography,
  AppBar,
  CssBaseline,
  Container,
  Paper,
  Box,
} from "@mui/material";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Typography variant="h2" color="textPrimary" align="center">
          {" "}
          Movie Rater
        </Typography>
      </AppBar>
      <main>
        <div>
          <Box sx={{ bgColor: "background.paper" }}>
            <Typography variant="h5" align="center" padding={5}>
              Welcome to the Movie Rater!
            </Typography>
            <LoginForm> </LoginForm>
          </Box>
        </div>
      </main>
    </div>
  );
};

export default App;
