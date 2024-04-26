import { configureStore } from '@reduxjs/toolkit'
import clientReducer  from '../pages/Clients/ClientSlice';

export const store = configureStore({
  reducer: {
    clients:clientReducer
  },
})

export default store;
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;