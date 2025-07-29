import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hierbaSeleccionado: null,
    busqueda: ''
}

export const hierbaSlice = createSlice({
    name: 'hierba',
    initialState,
    reducers: {
        setHierbaSeleccionado: (state, action) => {
            console.log('Reducing: ', action.payload);
            state.hierbaSeleccionado = action.payload;
        },
        setBusqueda: (state, action) => {
            state.busqueda = action.payload;
        },
        clearHierbaSeleccionado: (state) => {
            state.hierbaSeleccionado = null;
            state.busqueda = '';
        }
    }
})

export const { setHierbaSeleccionado, setBusqueda, clearHierbaSeleccionado } = hierbaSlice.actions;
export default hierbaSlice.reducer;
