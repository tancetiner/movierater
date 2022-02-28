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
  const theme = createTheme();

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
    // setUsername("");
    // setPassword("");
    request
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/home");
        return response.data;
      })
      .catch((err) => console.log("Error is", err));
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="loginForm">
    //     <div>
    //       <Grid container spacing={2} justify="center">
    //         <Grid item>Username:</Grid>
    //         <Grid item>
    //           <input
    //             type="text"
    //             value={username}
    //             onChange={({ target }) => setUsername(target.value)}
    //           />
    //         </Grid>
    //       </Grid>
    //     </div>

    //     <div>
    //       <Grid container spacing={2} justify="center">
    //         <Grid item>Password:</Grid>
    //         <Grid item>
    //           <input
    //             type="text"
    //             value={password}
    //             onChange={({ target }) => setPassword(target.value)}
    //           />
    //         </Grid>
    //       </Grid>
    //     </div>
    //     <input type="submit" />
    //   </form>
    //   <nav
    //     style={{
    //       borderBottom: "solid 1px",
    //       paddingBottom: "1rem",
    //     }}
    //   >
    //     <Link to="/register"> Register as a new user </Link>
    //   </nav>
    // </div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              align="center"
              onClick={() => navigate("/register")}
              fullWidth
            >
              Register as a new user{" "}
            </Button>
            {/* <Link to="/register"> Register as a new user </Link> */}
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
