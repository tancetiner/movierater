import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Grid } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import { Button, CardActions } from "@mui/material";

const MovieCard = ({ movie, isRated }) => {
  return (
    <Card
      sx={{
        width: 1 / 3,
        minHeight: 2 / 3,
        bgcolor: "secondary.main",
        padding: 2,
        margin: "auto",
      }}
    >
      <CardContent>
        <br />
        <Grid container spacing={1} direction="column" justifyContent="center">
          <Grid container spacing={2} justifyContent="center">
            <Typography variant="h5" component="div" align="center">
              {movie.name}
            </Typography>
          </Grid>
          <br />
          <br />

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <MovieOutlinedIcon />
            </Grid>
            <Grid item>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {movie.director}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <TodayRoundedIcon />
            </Grid>
            <Grid item>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {movie.releaseYear}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <StarOutlineIcon />
            </Grid>
            <Grid item>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Imdb Rating: {movie.imdbRating}
              </Typography>
            </Grid>
          </Grid>

          {isRated ? (
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <StarOutlineIcon />
              </Grid>
              <Grid item>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Your Rating: {movie.userRating}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
