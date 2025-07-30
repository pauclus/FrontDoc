import { Box, Typography, Paper, Container, Grid, Button, TextField, MenuItem, Select, FormControl, InputLabel, Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const Registrar = ()=>{
    const [formData, setFormData] = useState({
        nombre: '',
        raza: '',
        edad: '',
        color: '',
        tamaño: '',
        imagen: null
    });
    
    const [previewImage, setPreviewImage] = useState(null);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        onDrop: acceptedFiles => {
            const file = acceptedFiles[0];
            setFormData(prev => ({
                ...prev,
                imagen: file
            }));
            setPreviewImage(URL.createObjectURL(file));
        }
    });

    const handleSubmit = () => {
        // Aquí iría la lógica para enviar los datos a la API
        console.log('Datos del perro a registrar:', formData);
        
        // Simulación de éxito
        setSnackbar({
            open: true,
            message: 'Perro registrado con éxito',
            severity: 'success'
        });
        
        // Resetear formulario
        setFormData({
            nombre: '',
            raza: '',
            edad: '',
            color: '',
            tamaño: '',
            imagen: null
        });
        setPreviewImage(null);
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ color: '#3f51b5', fontWeight: 'bold', mb: 4 }}>
                    Registro de Perros
                </Typography>
                
                <Grid container spacing={4}>
                    {/* Formulario - Lado izquierdo */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                            
                            <TextField
                                fullWidth
                                label="Raza"
                                name="raza"
                                value={formData.raza}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            
                            <TextField
                                fullWidth
                                label="Edad (años)"
                                name="edad"
                                type="number"
                                value={formData.edad}
                                onChange={handleChange}
                                variant="outlined"
                                inputProps={{ min: 0 }}
                            />
                            
                            <TextField
                                fullWidth
                                label="Color"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Tamaño</InputLabel>
                                <Select
                                    name="tamaño"
                                    value={formData.tamaño}
                                    onChange={handleChange}
                                    label="Tamaño"
                                >
                                    <MenuItem value="pequeño">Pequeño</MenuItem>
                                    <MenuItem value="mediano">Mediano</MenuItem>
                                    <MenuItem value="grande">Grande</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    
                    {/* Área de imagen - Lado derecho */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Foto del Perro
                            </Typography>
                            
                            <Paper
                                {...getRootProps()}
                                sx={{
                                    border: '2px dashed #3f51b5',
                                    borderRadius: 2,
                                    p: 2,
                                    width: '100%',
                                    height: 250,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    backgroundImage: previewImage ? `url(${previewImage})` : 'none',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <input {...getInputProps()} />
                                {!previewImage && (
                                    <>
                                        <Typography variant="body1" align="center">
                                            Arrastra y suelta una imagen aquí, o haz clic para seleccionar
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
                                            (Formatos aceptados: JPG, JPEG, PNG)
                                        </Typography>
                                    </>
                                )}
                            </Paper>
                            
                            {previewImage && (
                                <Button 
                                    variant="outlined" 
                                    color="secondary" 
                                    onClick={() => {
                                        setPreviewImage(null);
                                        setFormData(prev => ({ ...prev, imagen: null }));
                                    }}
                                    sx={{ mt: 1 }}
                                >
                                    Eliminar imagen
                                </Button>
                            )}
                        </Box>
                    </Grid>
                    
                    {/* Espacio adicional antes del botón */}
                    <Grid item xs={12} sx={{ height: 30 }} />
                    
                    {/* Botón de registro */}
                    <Grid item xs={12} sx={{ mt: 5, mb: 3, display: 'flex', justifyContent: 'center' }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            onClick={handleSubmit}
                            sx={{ 
                                px: 8, 
                                py: 2, 
                                borderRadius: 4,
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                width: '50%',
                                maxWidth: '400px',
                                boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 6px 15px rgba(63, 81, 181, 0.4)'
                                }
                            }}
                        >
                            REGISTRAR PERRO
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
            {/* Notificación de éxito */}
            <Snackbar 
                open={snackbar.open} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    )
}