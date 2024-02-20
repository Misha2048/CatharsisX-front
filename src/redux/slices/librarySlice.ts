import { createSlice } from '@reduxjs/toolkit'

import { IStillagesResponse } from '@api/intefaces'

export interface LibraryState {
  list: IStillagesResponse[] | null
}

const initialState: LibraryState = {
  list: null,
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setLibraryList: (state, action: { payload: IStillagesResponse[]; type: string }) => {
      state.list = action.payload
    },
    clearLibraryList: (state) => {
      state.list = null
    },
    removeLibraryItem: (state, action: { payload: { id: string }; type: string }) => {
      if (state.list) {
        state.list = state.list.filter((stillage) => stillage.id !== action.payload.id)
      }
    },
    setLiked: (state, action: { payload: { id: string; liked: boolean }; type: string }) => {
      if (state.list) {
        const objIndex = state.list.findIndex((obj) => obj.id === action.payload.id)
        state.list[objIndex].liked = action.payload.liked
      }
    },
    addLibraryItem: (state, action: { payload: IStillagesResponse; type: string }) => {
      if (state.list) {
        state.list.push(action.payload)
      } else {
        state.list = [action.payload]
      }
    },
  },
})

export const { setLibraryList, clearLibraryList, removeLibraryItem, setLiked, addLibraryItem } =
  librarySlice.actions

export default librarySlice.reducer
