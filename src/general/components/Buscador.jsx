import { TextField, Autocomplete, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCursoSeleccionado } from '../slices/cursoSlice'

import { useState, useEffect} from 'react';
import { cursoService } from '../services/cursoService';


export default function Buscador({titulo='TITULO'}) {
    const [binar, SetBinar] = useState(false);
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const curso= useSelector((state)=> state.curso.CursoSeleccionado)

    useEffect(() => {
        if (curso) {
            console.log('Curso seleccionado:', curso);
        }
        if(inputValue.length >= 2){
            try{	
            const buscarCursos = async () => {
                const response = await cursoService.buscarCursos(inputValue);
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
    }, [inputValue, curso]);

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
                dispatch(setCursoSeleccionado(value));
            }}
            sx={{width: '50%'}}
        />
    )
}