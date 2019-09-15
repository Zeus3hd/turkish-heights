import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GalleryItem from "./GalleryItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
const Gallery = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <GalleryItem />
        </Grid>
        <Grid item>
          <GalleryItem />
        </Grid>
        <Grid item>
          <GalleryItem />
        </Grid>
        <Grid item>
          <GalleryItem />
        </Grid>
        <Grid item>
          <GalleryItem />
        </Grid>
        <Grid item>
          <GalleryItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
