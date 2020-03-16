import React, { Component } from 'react';
import StatisticHeader from '../components/StatisticHeader';
import StatisticModal from '../components/StatisticModal';
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
//material ui işlevleri
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = {
    paper: {
        width: "100%",
        padding: "3%",
        paddingBottom: "auto",
        marginBottom: "11%"
    }
};


class Istatislikler extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <StatisticHeader />
                <Paper elevation={3} className={classes.paper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Personel:
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                        >
                            <MenuItem value={10}>Bir</MenuItem>
                            <MenuItem value={20}>Iki</MenuItem>
                            <MenuItem value={30}>Uc</MenuItem>
                        </Select>
                        <FormHelperText>Personelin istatisliklerini seç!</FormHelperText>
                        <StatisticModal />
                    </FormControl>
                </Paper>
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

