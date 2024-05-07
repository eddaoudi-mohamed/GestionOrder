import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './Features/ClientSlice';
import categoryReducer from './Features/CategorySlice';
import authReducer from './Features/AuthSlice';
import { apiSlice } from './services/apiSlice';
import ProductsSlice from './Features/ProductSlice';
import OrderSlice from './Features/OrderSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    clients: clientReducer,
    categories: categoryReducer,
    products:ProductsSlice,
    orders:OrderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false,
    }).concat(
      apiSlice.middleware,
    ),
  // divTools: true,
});

export default store;
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;