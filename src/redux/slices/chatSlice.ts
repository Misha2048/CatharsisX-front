import { createSlice } from '@reduxjs/toolkit'

export interface ChatState {
  info: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
    isShowMessages: boolean
    firstName?: string
    lastName?: string
  }
}

const initialState: ChatState = {
  info: {
    isShowMessages: false,
  },
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatState: (state, action: { payload: ChatState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload.info)) {
        if (value !== undefined) {
          state.info[key] = value
        }
      }
    },
    setInitialChatState: (state) => {
      state.info = initialState.info
    },
  },
})

export const { setChatState, setInitialChatState } = chatSlice.actions

export default chatSlice.reducer
