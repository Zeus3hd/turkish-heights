import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import stocksIcon from "../icons/line-chart.png";
import clockIcon from "../icons/clock-of-circular-shape-with-dots.png";
import mapIcon from "../icons/map-perspective-with-a-placeholder-on-it.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  features: {
    width: "125px"
  }
}));
const Features = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3} justify="space-between">
          <Grid item sm={3} xs={12} className="features-lists">
            <img src={stocksIcon} alt="features" className={classes.features} />
            <ul>
              <li>
                Aenean maximus diam ac leo dapibus, in blandit augue vestibulum.
              </li>
              <li>
                Pellentesque turpis risus, faucibus id tincidunt id, sagittis
                vel est. Vivamus eros elit, ultricies non lobortis id, elementum
                nec metus.
              </li>
              <li>
                Mauris non arcu neque. Duis semper ultricies quam sed luctus.
              </li>
            </ul>
          </Grid>
          <Grid item sm={3} xs={12} className="features-lists">
            <img src={clockIcon} alt="features" className={classes.features} />
            <ul>
              <li>
                Aenean maximus diam ac leo dapibus, in blandit augue vestibulum.
              </li>
              <li>
                Pellentesque turpis risus, faucibus id tincidunt id, sagittis
                vel est. Vivamus eros elit, ultricies non lobortis id, elementum
                nec metus.
              </li>
              <li>
                Mauris non arcu neque. Duis semper ultricies quam sed luctus.
              </li>
            </ul>
          </Grid>
          <Grid item sm={3} xs={12} className="features-lists">
            <img src={mapIcon} alt="features" className={classes.features} />
            <ul>
              <li>
                Aenean maximus diam ac leo dapibus, in blandit augue vestibulum.
              </li>
              <li>
                Pellentesque turpis risus, faucibus id tincidunt id, sagittis
                vel est. Vivamus eros elit, ultricies non lobortis id, elementum
                nec metus.
              </li>
              <li>
                Mauris non arcu neque. Duis semper ultricies quam sed luctus.
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Features;
