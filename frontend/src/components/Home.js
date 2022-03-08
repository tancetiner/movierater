import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomMovie from "./RandomMovie";
import { saveRequest } from "../services/requests";
import RateForm from "./RateForm";
import { Typography, AppBar, Box, Grid, Button, Toolbar } from "@mui/material";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";

const Home = () => {
  let navigate = useNavigate();

  const persistentUserData = localStorage.getItem("user");
  const [userData] = useState(JSON.parse(persistentUserData));
  const [r, refresh] = useState(1);

  useEffect(() => {
    if (persistentUserData) {
      localStorage.setItem("username", userData.username);
    } else {
      navigate("/");
    }
  }, []);

  const handleLogout = (event) => {
    localStorage.clear();
    navigate("/");
  };

  const handleSave = (event) => {
    const movieData = localStorage.getItem("movie");
    if (movieData === null) {
      alert("You must press the Random Movie button first!");
    } else {
      const request = saveRequest(userData.username, movieData);
      request
        .then((response) => {
          console.log(response.data);
          refresh((r) => r + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ background: "#9283de" }}
          position="static"
          sx={{ color: "#4442bd" }}
        >
          <Toolbar>
            <MovieCreationOutlinedIcon
              fontSize="large"
              style={{ color: "#4442bd" }}
            />
            <Typography variant="h4" color="black" align="left">
              MovieRater
            </Typography>
            <TheatersOutlinedIcon
              fontSize="large"
              style={{ color: "#4442bd" }}
            />
            <Grid container justifyContent="right">
              <Grid item>
                <Button color="inherit" onClick={() => navigate("/saved")}>
                  Watchlist
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => navigate("/rated")}>
                  Ratings
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>

      {persistentUserData ? (
        <Typography
          variant="h6"
          textAlign="right"
          color={"4442bd"}
          style={{ margin: 15 }}
        >
          {userData.username}
        </Typography>
      ) : (
        ""
      )}

      <Box sx={{ padding: 5, width: 1100, margin: "auto", marginTop: "flex" }}>
        <RandomMovie r={r}> </RandomMovie>
      </Box>
      <br />
      <Grid container justifyContent="space-evenly">
        <Button
          onClick={handleSave}
          style={{
            borderRadius: 10,
            backgroundColor: "#4442bd",
          }}
          variant="contained"
        >
          Save to Watchlist
        </Button>
        <RateForm> </RateForm>
      </Grid>
    </div>
  );
};

export default Home;
