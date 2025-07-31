import { TextField, Autocomplete, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPerroSeleccionado, setBusqueda } from '../slices/perroSlice';

import { useState, useEffect } from 'react';
import { perroService } from '../services/perroService';

export default function Buscador({ titulo = 'TITULO', onBuscar }) {
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState({ nombre: '' });
    const perro = useSelector((state) => state.perro.perroSeleccionado);

    useEffect(() => {
        if (!inputValue?.nombre || inputValue.nombre.length < 2) return;

        const buscarPerros = async () => {
            try {
                // Si se proporciona onBuscar, usarla
                if (onBuscar) {
                    onBuscar(inputValue.nombre);
                    //return;
                }

                // Comportamiento original
            const response = await perroService.buscarPerros(inputValue);
            setOptions(Array.isArray(response) ? response : []);
            dispatch(setBusqueda(options));
            } catch (error) {
                console.error('Error al buscar perros:', error);
                setOptions([]);
            }
        };

        buscarPerros();
    }, [inputValue, perro, onBuscar]);

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.nombre || ''}
            renderInput={(params) => (
                <div>
                    <Typography variant="h6">{titulo}</Typography>
                    <TextField {...params} placeholder="Nombre del Perro" />
                </div>
            )}
            onInputChange={(event, value) => {
                setInputValue((prev) => ({ ...prev, nombre: value }));
            }}
            onChange={(event, value) => {
                dispatch(setPerroSeleccionado(value));
            }}
            sx={{ width: '50%' }}
        />
    );
}
