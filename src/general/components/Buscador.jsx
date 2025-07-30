import { TextField, Autocomplete, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPerroSeleccionado } from '../slices/perroSlice'

import { useState, useEffect} from 'react';
import { perroService } from '../services/perroService';


export default function Buscador({titulo='TITULO'}) {
    const [binar, SetBinar] = useState(false);
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const perro= useSelector((state)=> state.perro.perroSeleccionado)

    useEffect(() => {
        if (perro) {
            console.log('Perro seleccionado:', perro);
        }
        if(inputValue.length >= 2){
            try{	
            const buscarCursos = async () => {
                const response = await perroService.buscarPerros(inputValue);
                if (Array.isArray(response)) {
                    setOptions(response);
                  } else {
                    setOptions([]); // fallback seguro
                  }
            }
            buscarCursos();
        } catch (error) {
            console.error('Error al buscar cursos:', error);
        }
        }
    }, [inputValue, perro]);

    return (
        <Autocomplete
            options={options}
            renderInput={(params) => 
            <div>
                <Typography variant="h6">{titulo}</Typography>
                <TextField {...params}  placeholder='Nombre del Perro' />
                </div>}
            onInputChange={(event, value) => {setInputValue(value)}}
            getOptionLabel={(option) => option.nombre}
            onChange={(event, value) => {
                dispatch(setPerroSeleccionado(value));
            }}
            sx={{width: '50%'}}
        />
    )
}