import React, { Component } from 'react';
import FieldForm from '../components/inputs/FieldForm'
//uygulamayı daha iyi kontrol etmek için tip kontrolu(proptypes) componentini kullanıyoruz
import PropTypes from 'prop-types';
//material ui işlevleri
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//icons
import SaveIcon from '@material-ui/icons/Save';


const styles = {
    paper: {
        width: "100%",
        padding: "3%",
        marginBottom: "11%",
    },
    ilkYayinTarihi: {
        paddingLeft: "1%"
    }
};


class Ayarlar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper elevation={3} className={classes.paper} >
                    <Grid container spacing={1}>
                        <Typography variant="overline" display="block" gutterBottom>
                            hastane adi - logosu
                        </Typography>
                        <Grid container item xs={12} spacing={0}>
                            <TextField
                                id="filled-textarea"
                                label="Hastane Adı"
                                placeholder="DEVLET HASTANESI"
                                multiline
                                variant="filled"
                            />
                        </Grid>
                        <Grid container item xs={12} spacing={0}>
                            <TextField
                                id="filled-textarea"
                                label="Logo URL"
                                placeholder="https://sample.com"
                                multiline
                                variant="filled"
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Kaydet
                        </Button>
                    </Grid>
                    <br />
                    <hr />
                    <Grid container spacing={1}>
                        <Typography variant="overline" display="block" gutterBottom>
                            dokuman bilgileri
                        </Typography>
                        <Grid container item xs={12} spacing={0}>
                            <TextField
                                id="outlined-number"
                                label="Dokuman No"
                                helperText="Mavi Kod"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <TextField
                                className={classes.ilkYayinTarihi}
                                id="date"
                                label="Ilk Yayın Tarihi"
                                type="date"
                                defaultValue="2020-05-24"
                                helperText="Mavi Kod"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid container item xs={12} spacing={0}>
                            <TextField
                                id="outlined-number"
                                label="Dokuman No"
                                helperText="Pembe Kod"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <TextField
                                id="date"
                                label="Ilk Yayın Tarihi"
                                type="date"
                                defaultValue="2020-05-24"
                                helperText="Pembe Kod"
                                className={classes.ilkYayinTarihi}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid container item xs={12} spacing={0}>
                            <TextField
                                id="outlined-number"
                                label="Dokuman No"
                                helperText="Beyaz Kod"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <TextField
                                id="date"
                                label="Ilk Yayın Tarihi"
                                type="date"
                                defaultValue="2020-05-24"
                                helperText="Beyaz Kod"
                                className={classes.ilkYayinTarihi}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Kaydet
                        </Button>
                    </Grid>
                    <br />
                    <hr />
                    <Grid container spacing={1}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Form Alanları
                        </Typography>
                        <FieldForm/>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Kaydet
                        </Button>
                    </Grid>
                    <br />
                    <hr />
                </Paper>
            </div>
        )
    }
}

//proptypes ile materialui'ın sunduğu withstyles'tan objeleri çekiyoruz classes adı ile
Ayarlar.propTypes = {
    classes: PropTypes.object.isRequired
}

//burada export ediyoruz withstylesı styles'a bağlıyoruz. Navbar component adı
export default (withStyles(styles)(Ayarlar));

