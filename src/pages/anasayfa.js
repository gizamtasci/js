import React, { Component } from 'react';

//img tagını kullanmak istersen bu imageı import etmeyi unutma
// import Welcome from '../img/welcome.png';
//img tagını kullanmak istersen bu imageı import etmeyi unutma END

//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';


const styles = {
    paper: {
        width: "100%",
        padding: "24%",
        backgroundColor: "#c5c6c6"
    }
};



class anasayfa extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* bir image bulamadığım için, paper moduluyle yaptım, yorum satırından çıkarıp kontrol edebilirsin  */}

                {/* <img src={Welcome} alt="welcome"/> */}

                {/* bir image bulamadığım için, paper moduluyle yaptım, yorum satırından çıkarıp kontrol edebilirsin  END */}

                <Paper elevation={3} className={classes.paper} />
            </div>
        )
    }
}


//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
anasayfa.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(anasayfa));

