import React from 'react';
import { Link } from 'react-router-dom';

//material ui işlevleri
import Button from '@material-ui/core/Button';
//classname utilitylerini daha kolay yönemek için
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//icons
import ReportIcon from '@material-ui/icons/Report';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;
//stills materialui useTheme yoluyla navbar kısmını düzenledik
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
}));

export default function Navbar() {
    //bu kez proptypeslar ile değil de materialui ın useStyles modulu ile yarattık
    const classes = useStyles();
    const theme = useTheme();
    //navbarın açıp kapamak için usestate modulunde constructorını kullandık. default'da "false" hemen aşağıda true ve false olarak set ediyoruz
    const [open, setOpen] = React.useState(false);

    //burası 
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    //ve burası 
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        RAPORLAR - ISTATISLIKLER
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
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
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
        </div>
    );
}