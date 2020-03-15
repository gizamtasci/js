import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';


//icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
    paper: {
        width:"100%",
        padding: "3%"
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper elevation={3} className={classes.paper}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Hemşire Çağır" value="hemsirecagir" icon={<LocalHospitalIcon />} />
            <BottomNavigationAction label="Beyaz Kod" value="beyazkod" icon={<AcUnitIcon />} />
            <BottomNavigationAction label="Mavi Kod" value="mavikod" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Pembe Kod" value="pembekod" icon={<SettingsInputSvideoIcon />} />
            <BottomNavigationAction label="Kansültasyon" value="kansultasyon" icon={<AccessibilityIcon />} />
            <BottomNavigationAction label="Tüm Olaylar" value="tumolaylar" icon={<FolderIcon />} />
        </BottomNavigation>
        </Paper>
    );
}