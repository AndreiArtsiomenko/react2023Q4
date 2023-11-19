import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
