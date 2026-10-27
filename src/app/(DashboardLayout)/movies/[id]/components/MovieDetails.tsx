import { Movie } from "@/app/lib/types";
import React from "react";
import styles from "./MovieUI.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import NavButton from "@/app/(DashboardLayout)/components/shared/NavButton";

interface MovieDetailsProps {
  movie: Movie;
}

function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className={styles["movie-ui-container"]}>
      <Card sx={{ display: "flex", marginBottom: "15px" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="/images/movies/toyStory5.jpg"
          alt={movie.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {movie.director.name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {movie.year}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default MovieDetails;
