import { configureStore } from '@reduxjs/toolkit'

import tokensReducer from './slices/tokensSlice'
import hintReducer from './slices/hintSlice'
import stillageReducer from './slices/stillageSlice'
import userReducer from './slices/UserSlice'

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    hint: hintReducer,
    user: userReducer,
    stillage: stillageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
