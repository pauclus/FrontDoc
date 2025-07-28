import { configureStore } from '@reduxjs/toolkit'
import cursoReducer from '../slices/cursoSlice'

// Reducer dummy básico
const dummyReducer = (state = {}, action) => {
  return state;
}

export const store = configureStore({
    reducer: {
        curso: cursoReducer,
    },
})
