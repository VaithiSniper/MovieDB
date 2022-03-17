import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({
  moviePoster,
  movieName,
  movieRelease,
  movieRating,
  movieSummary
}) {
  return (
    <Card variant="outlined" sx={{ display: "flex" }}>
      <React.Fragment>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 0.5, m: 1, borderRadius: 2}}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={moviePoster}
                alt={`${movieName}_poster`}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", ml: 3}}>
              <Typography variant="h3" component="div">
                {movieName}
              </Typography>
              <Typography sx={{ mt: 1 }} color="text.secondary">
                Release Date : {movieRelease}
              </Typography>
              <Typography sx={{ mt: 1, mb: 1 }} color="text.secondary">
                Rating : {movieRating}
              </Typography>
              <Typography variant="body1">{movieSummary}</Typography>
            </Box>
          </Box>
        </CardContent>
      </React.Fragment>
    </Card>
  );
}
