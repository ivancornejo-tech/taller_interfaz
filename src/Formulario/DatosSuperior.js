import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { puestos } from './catalogos';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const style = theme => ({
    root: {
        maxWidth: 1200,
        margin: '0 auto',
    },
    paper: {
        padding: theme.spacing(3),
        maxWidth: 1200,
        margin: '0 auto',
    },
    field: {
        width: '100%'
    }
});



let regRFC = new RegExp('^$|^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\\d]{3})$');

let regCURP = new RegExp('^$|^([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)$')

class DatosSuperio extends React.Component {
    render()
    {
        const { classes, superior, handleChange } = this.props;
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.field} id={"superiorNombre"} label={"Nombre"} value={superior.nombres} onChange={(e) => handleChange('nombres', e)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.field} id={"superiorPrimerApellido"} label={"primerApellido"} value={superior.superiorPrimerApellido} onChange={(e) => handleChange('primerApellido', e)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.field} id={"superiorSegundoApellido"} label={"segundoApellido"} value={superior.superiorSegundoApellido} onChange={(e) => handleChange('segundoApellido', e)} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField className={classes.field} id={"superiorRfc"}       label={"rfc"} value={superior.rfc}
                      onChange={(e) => handleChange('rfc', e)}
                      error={superior.rfc.match(regRFC) == null}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.field} id={"superiorCurp"} label={"curp"} value={superior.curp}
                        onChange={(e) => handleChange('curp', e)}
                        error={superior.curp.match(regCURP) == null}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl className={classes.field}>
                        <InputLabel id="demo-simple-select-label">Puesto</InputLabel>
                        <Select
                            labelId="puesto-label"
                            id="puesto"
                            value={superior.puesto}
                            onChange={(e)=>handleChange('puesto',e)}
                        >
                            {
                                puestos.map((puesto)=>{
                                    return  <MenuItem key={puesto.nivel} value={puesto}>{puesto.nombre}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}

export default (withStyles(style)(DatosSuperio));
