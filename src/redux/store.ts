import { configureStore } from '@reduxjs/toolkit';
import tokensReducer from './slices/tokensSlice';
import hintReducer from './slices/hintSlice';
import userReducer from './slices/UserSlice';

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    hint: hintReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
