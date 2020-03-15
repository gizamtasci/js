import React, { Component } from 'react'
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
import RaporlarHeader from '../components/RaporlarHeader';

//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = {
    raporlar: {
        margin: "auto",
    }
};


class Raporlar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={3}>
                <div className={classes.raporlar}>
                    <RaporlarHeader />
                    <h1>Raporlar</h1>
                </div>
            </Grid>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Raporlar.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Raporlar));
