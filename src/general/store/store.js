import { configureStore } from '@reduxjs/toolkit'

// Reducer dummy básico
const dummyReducer = (state = {}, action) => {
  return state;
}

export const store = configureStore({
    reducer: {
        dummy: dummyReducer,
    },
})
