import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

const CardComponent = ({ info }) => {
  return (
    <Grid2 size={{ xs: 12, md: 4 }}>
      <Card sx={{ maxWidth: 370 }}>
        <CardMedia
          sx={{ height: 280, width: { xs: 250, md: 350 }, margin: "auto" }}
          image={info.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {info.caption}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default CardComponent;
