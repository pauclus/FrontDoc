import { TextField, Autocomplete, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setHierbaSeleccionado } from '../slices/hierbaSlice'

import { useState, useEffect} from 'react';
import { hierbaService } from '../services/hierbaService';


export default function Buscador({titulo='TITULO'}) {
    const [binar, SetBinar] = useState(false);
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const hierba= useSelector((state)=> state.hierba.HierbaSeleccionado)

    useEffect(() => {
        if (hierba) {
            console.log('Hierba seleccionada:', hierba);
        }
        if(inputValue.length >= 2){
            try{	
            const buscarHierbas = async () => {
                const response = await hierbaService.buscarHierbas(inputValue);
                if (Array.isArray(response)) {
                    setOptions(response);
                  } else {
                    setOptions([]); // fallback seguro
                  }
            }
            buscarHierbas();
        } catch (error) {
            console.error('Error al buscar hierbas:', error);
        }
        }
    }, [inputValue, hierba]);

    return (
        <Autocomplete
            options={options}
            renderInput={(params) => 
            <div>
                <Typography variant="h6">{titulo}</Typography>
                <TextField {...params}  placeholder='Selecciona el tipo' />
                </div>}
            onInputChange={(event, value) => {setInputValue(value)}}
            getOptionLabel={(option) => option.nombre}
            onChange={(event, value) => {
                dispatch(setHierbaSeleccionado(value));
            }}
            sx={{width: '50%'}}
        />
    )
}