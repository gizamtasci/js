import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';

//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const drawerWidth = 240;

//stiller
const styles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    header: {
        marginLeft: "15%"
    },
};


class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap className={classes.header}>
                            Raporlar İstatislikler
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* left-navbar yaratıyoruz, materialui'ın sunduğu paper modulu ile */}
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <h1>hello</h1>
                </Drawer>
            </div>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Navbar));
