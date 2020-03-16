import React from "react";
import PropTypes from "prop-types";
import FooterImage from '../../img/footer.png';

//material ui işlevleri
import { withStyles } from "@material-ui/core/styles";



const styles = {
  flex: {
    flexGrow: 1
  },
  footer: {
    position: "fixed",
    textAlign: "center",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#c5c6c6"
  }
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
       <img src={FooterImage} alt="footer footer"/>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);