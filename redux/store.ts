import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './slices/sidebarSlice';
import modalSlice from './slices/modalSlice';
import listingSlice from './slices/listingSlice';
// ...

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    modal: modalSlice,
    listing: listingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;