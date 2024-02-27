import { configureStore } from '@reduxjs/toolkit'

import tokensReducer from './slices/tokensSlice'
import hintReducer from './slices/hintSlice'
import stillageReducer from './slices/stillageSlice'
import userReducer from './slices/UserSlice'
import libraryReducer from '@redux/slices/librarySlice'
import historyReducer from '@redux/slices/historySlice'
import filesReducer from '@redux/slices/filesSlice'
import forumReducer from '@redux/slices/forumSlice'

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    hint: hintReducer,
    user: userReducer,
    stillage: stillageReducer,
    library: libraryReducer,
    history: historyReducer,
    files: filesReducer,
    forum: forumReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
