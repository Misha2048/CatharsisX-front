import { createSlice } from '@reduxjs/toolkit'

export interface PopupState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  isShow: boolean
}

const initialState: PopupState = {
  isShow: false,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupState: (state, action: { payload: PopupState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (action.payload[key] !== undefined) {
          state[key] = value
        }
      }
    },
  },
})

export const { setPopupState } = popupSlice.actions

export default popupSlice.reducer
