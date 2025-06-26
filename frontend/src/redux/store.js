import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice.js';
import profileSilce from './slice/profileSlice.js';
import splitSlice from './slice/splitSlice.js'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    profile:profileSilce,
    split:splitSlice
  },
});