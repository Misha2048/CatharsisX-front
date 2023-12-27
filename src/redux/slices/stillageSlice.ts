import { createSlice } from '@reduxjs/toolkit'
import { IShelfsResponse } from '../../api/intefaces'

export interface StillageState {
  list: IShelfsResponse[] | null
}

const initialState: StillageState = {
  list: null,
}

export const stillageSlice = createSlice({
  name: 'stillage',
  initialState,
  reducers: {
    setStillageList: (state, action: { payload: IShelfsResponse[]; type: string }) => {
      state.list = action.payload
    },
    clearStillageList: (state) => {
      state.list = null
    },
    removeStillageItem: (state, action: { payload: string; type: string }) => {
      if (state.list) {
        state.list = state.list.filter((shelf) => shelf.id !== action.payload)
      }
    },
  },
})

export const { setStillageList, clearStillageList, removeStillageItem } = stillageSlice.actions

export default stillageSlice.reducer
