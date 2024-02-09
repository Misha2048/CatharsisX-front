import { createSlice } from '@reduxjs/toolkit'

export interface HistoryState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  prevPage: string
}

const initialState: HistoryState = {
  prevPage: '',
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistoryState: (state, action: { payload: HistoryState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (action.payload[key] !== undefined) {
          state[key] = value
        }
      }
    },
    clearHistoryState: (state) => {
      for (const key of Object.keys(initialState)) {
        state[key] = initialState[key]
      }
    },
  },
})

export const { setHistoryState, clearHistoryState } = historySlice.actions

export default historySlice.reducer
