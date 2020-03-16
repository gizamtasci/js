import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';


//icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const useStyles = makeStyles({
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
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Personeller" value="personeller" icon={<AccountBoxIcon />} />
            <BottomNavigationAction label="Zaman Aralığı" value="zamanaraligi" icon={<QueryBuilderIcon />} />
        </BottomNavigation>
        </Paper>
    );
}