import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    perroSeleccionado: null,
    busqueda: null,
}

export const perroSlice = createSlice({
    name: 'curso',
    initialState,
    reducers: {
        setPerroSeleccionado: (state, action) => {
            console.log('Reducing: ', action.payload);
            state.perroSeleccionado = action.payload;
        },
        setBusqueda: (state, action) => {
            state.busqueda = action.payload;
        },
        clearBusqueda: (state) => {
            state.perroSeleccionado = null;
            state.busqueda = null;
        },

    }
})

export const { setPerroSeleccionado: setPerroSeleccionado, setBusqueda, clearBusqueda: clearCursoSeleccionado } = perroSlice.actions;
export default perroSlice.reducer;