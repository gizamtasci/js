import React, { Component } from 'react'
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
// import RaporlarHeader from '../components/RaporlarHeader';

//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

const styles = {
    paper: {
        width:"100%",
        padding: "3%",
        paddingBottom: "0%",
        marginBottom: "11%"
    }
};


class Raporlar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                </Paper>
            </div>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Raporlar.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Raporlar));

