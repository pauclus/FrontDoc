import { configureStore } from '@reduxjs/toolkit'
import perroReducer from '../slices/perroSlice'

// Reducer dummy básico
const dummyReducer = (state = {}, action) => {
  return state;
}

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', storeAPI.getState()); // 👈 Aquí verás si cambia
  return result;
};

export const store = configureStore({
    reducer: {
        perro: perroReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
})
