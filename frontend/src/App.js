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
      <AppBar
        style={{ background: "#9283de" }}
        position="static"
        sx={{ color: "#4442bd" }}
      >
        <Typography variant="h2" color="inherit" align="center">
          {" "}
          Movie Rater
        </Typography>
      </AppBar>
      <main>
        <div>
          <Box sx={{ bgColor: "rgb(217, 222, 222)" }}>
            <Typography variant="h5" align="center" padding={5} color="inherit">
              Get random movies, add them to watchlist or rate them!
            </Typography>
            <LoginForm> </LoginForm>
          </Box>
        </div>
      </main>
    </div>
  );
};

export default App;
