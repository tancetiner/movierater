import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginRequest } from "../services/requests";
import {
  Typography,
  Box,
  TextField,
  CssBaseline,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LoginForm = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    let loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = data.get("username");
    const pass = data.get("password");
    const request = loginRequest(user, pass);
    request
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/home");
        return response.data;
      })
      .catch((err) => console.log("Error is", err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 400,
          height: 400,
          borderRadius: 20,
          padding: 4,
        }}
        style={{ backgroundColor: "rgb(223, 178, 41)" }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#4442bd" }}
          >
            Sign In
          </Button>
          <Button
            align="center"
            onClick={() => navigate("/register")}
            sx={{ color: "#4442bd" }}
            fullWidth
          >
            Register as a new user
          </Button>
          {/* <Link to="/register"> Register as a new user </Link> */}
          <Grid container>
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
