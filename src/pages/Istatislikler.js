import React, { Component } from 'react'
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
    root: {
        margin: "15%",
        maxWidth: 1200
    }
};


class Istatislikler extends Component {
    
    render() {
        const { classes} = this.props;
        return (
            <div className={classes.root}>
                <h1>Istatislikler</h1>
            </div>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Istatislikler.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Istatislikler));

