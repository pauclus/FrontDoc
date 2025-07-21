import { Box, Typography, Paper, Container, Grid, Button, TextField, Autocomplete, Alert, Snackbar } from '@mui/material';


export const Crear = ()=>{
    return (
        <div style={{flex: '1'}}>
            <span style={{flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                <h1>Crear</h1>
            </span>

            <span style={{ justifyContent: 'center', alignItems: 'center', display :'flex', height:'100%', width:'100%'}}>
                <div style={{height:'100%', width:'50%', display: 'flex', flexDirection:'column', alignItems: 'center',   border: '2px solid red'}}>
                    <div style={{height:'80%', border: '1px solid black', width:'100%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Autocomplete
                            options={['Analisis', 'Diagnostico', 'Tratamiento', 'Control']}
                            renderInput={(params) => 
                            <div>
                                <Typography variant="h6">Curso</Typography>
                                <TextField {...params}  placeholder='Selecciona el curso' />
                            </div>}
                            sx={{width: '50%'}}
                            getOptionLabel={(option) =>'Tipo ' + option}
                        />
                        
                        <TextField label="Nombre" />
                        <TextField label="Descripción" />

                    </div>
                    <button >
                    Crear
                    </button>
                </div>
                <div style={{height:'100%', width:'50%'}}>
                    <div style={{height:'80%'}}>A</div>

                </div> 
            </span>

        </div>
    )
}