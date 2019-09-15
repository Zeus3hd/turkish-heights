import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GalleryItem from "./GalleryItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
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
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
      </Grid>
    </Container>
  );
};

export default Gallery;
