import React from "react";
import { registerRequest } from "../services/requests";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  CssBaseline,
  Grid,
  Button,
  AppBar,
} from "@mui/material";

const RegisterForm = (props) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = data.get("username");
    const pass = data.get("password");
    const request = registerRequest(user, pass);
    request
      .then((response) => {
        navigate("/");
        return response.data;
      })
      .catch((err) => console.log("Error is", err));
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        style={{ background: "#9283de" }}
        position="static"
        sx={{ color: "#4442bd" }}
      >
        <Typography variant="h2" color="inherit" align="center">
          Movie Rater
        </Typography>
      </AppBar>
      <main>
        <div>
          <br />
          <Typography variant="h5" color="inherit" align="center">
            Get random movies, add them to watchlist or rate them!
          </Typography>
          <br />
          <Box
            sx={{
              margin: "auto",
              width: 400,
              height: 350,
              borderRadius: 20,
              padding: 2,
              backgroundColor: "rgb(223, 178, 41)",
            }}
          >
            <Typography component="h1" variant="h5" align="center">
              Register
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              textAlign="center"
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
                sx={{ mt: 3, mb: 2, backgroundColor: "#4442bd" }}
              >
                Register
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                sx={{ alignContent: "center", color: "#4442bd" }}
              >
                Already have an account
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </main>
    </div>
  );
};

export default RegisterForm;
