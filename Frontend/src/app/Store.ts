import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './Features/ClientSlice';
import authReducer from './Features/AuthSlice';
import { apiSlice } from './services/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    clients: clientReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      apiSlice.middleware,
    ),
  // divTools: true,
});

export default store;
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;