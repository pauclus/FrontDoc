import { TextField, Autocomplete } from '@mui/material';
import { useState } from 'react';

const [binar, SetBinar] = useState(false);

export default function Buscador() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(['Analisis', 'Diagnostico', 'Tratamiento', 'Control']);
    }, []);

    return (
        <Autocomplete
            options={['Analisis', 'Diagnostico', 'Tratamiento', 'Control']}
            renderInput={(params) => <TextField {...params}  placeholder='Selecciona el tipo' />}
        />
    )
}