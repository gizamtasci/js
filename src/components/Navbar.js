import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';

//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//icons
import ReportIcon from '@material-ui/icons/Report';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';

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
    sideBox: {
        margin: "25%"
    }
};


class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container>
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
                    <List component="nav" aria-label="mailbox folders">
                        <Button color="inherit" component={Link} to="/raporlar">
                            <ListItem>
                                <ListItemIcon>
                                    <ReportIcon />
                                </ListItemIcon>
                                <ListItemText primary="Raporlar" />
                            </ListItem>
                        </Button>
                        <Divider />
                        <Button color="inherit" component={Link} to="/istatislikler">
                            <ListItem >
                                <ListItemIcon>
                                    <EqualizerIcon />
                                </ListItemIcon>
                                <ListItemText primary="İstatislikler" />
                            </ListItem>
                        </Button>
                        <Divider />
                        <Button color="inherit" component={Link} to="/ayarlar">
                            <ListItem >
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ayarlar" />
                            </ListItem>
                        </Button>
                        <Divider light />
                        <ListItem button>
                            <ListItemIcon>
                                <LockIcon />
                            </ListItemIcon>
                            <ListItemText primary="Çıkış" />
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Navbar));
