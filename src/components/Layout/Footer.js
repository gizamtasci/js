import React from "react";
import PropTypes from "prop-types";

//material ui işlevleri
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";



const styles = {
  flex: {
    flexGrow: 1
  },
  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: "#000"
  }
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
        <Grid container spacing={1}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
              >
                © Copyright 2020
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);