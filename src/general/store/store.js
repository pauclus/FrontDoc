import { configureStore } from '@reduxjs/toolkit'
import hierbaReducer from '../slices/hierbaSlice'

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
        hierba: hierbaReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
})
