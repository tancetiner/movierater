import React from "react";
import { registerRequest } from "../services/requests";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  CssBaseline,
  Container,
  Grid,
  Button,
} from "@mui/material";

const RegisterForm = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const register = (event) => {
  //   event.preventDefault();
  //   const request = registerRequest(username, password);
  //   setUsername("");
  //   setPassword("");
  //   request
  //     .then((response) => {
  //       navigate("/");
  //       return response.data;
  //     })
  //     .catch((err) => console.log(err));
  // };

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
    // <div>
    //   <h1> REGISTER </h1>
    //   <p> Pick a username and password </p>
    //   <form onSubmit={register}>
    //     <div>
    //       Username:{" "}
    //       <input type="text" value={username} onChange={handleUsernameChange} />
    //     </div>
    //     <div>
    //       Password:{" "}
    //       <input type="text" value={password} onChange={handlePasswordChange} />
    //     </div>
    //     <div>
    //       <input type="submit" value="Sign Up" />
    //     </div>
    //   </form>
    // </div>

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
          Register
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
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
