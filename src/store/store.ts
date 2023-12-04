import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './slices/formDataSlice';
import countriesDataReducer from './slices/countrySlice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
    countriesData: countriesDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
