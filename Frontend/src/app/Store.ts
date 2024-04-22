import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

export default store;
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;