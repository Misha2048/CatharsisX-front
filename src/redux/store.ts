import { configureStore } from '@reduxjs/toolkit';
import tokensReducer from './slices/tokensSlice';
import hintReducer from './slices/hintSlice';
import stillageReducer from './slices/stillageSlice';

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    hint: hintReducer,
    stillage: stillageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
