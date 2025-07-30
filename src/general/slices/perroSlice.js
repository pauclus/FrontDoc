import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cursoSeleccionado: null,
    busqueda: ''
}

export const cursoSlice = createSlice({
    name: 'curso',
    initialState,
    reducers: {
        setCursoSeleccionado: (state, action) => {
            console.log('Reducing: ', action.payload);
            state.cursoSeleccionado = action.payload;
        },
        setBusqueda: (state, action) => {
            state.busqueda = action.payload;
        },
        clearCursoSeleccionado: (state) => {
            state.cursoSeleccionado = null;
            state.busqueda = '';
        }
    }
})

export const { setCursoSeleccionado, setBusqueda, clearCursoSeleccionado } = cursoSlice.actions;
export default cursoSlice.reducer;