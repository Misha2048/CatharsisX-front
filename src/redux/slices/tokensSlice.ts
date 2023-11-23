import { createSlice } from '@reduxjs/toolkit'

export interface TokensState {
  accessToken?: string | null
  refreshToken?: string | null
}

const initialState: TokensState = {
    accessToken: null,
    refreshToken: null,
}

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens: (state, action: {payload: TokensState, type: string}) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem('accessToken', action.payload.accessToken as string);
      localStorage.setItem('refreshToken', action.payload.refreshToken as string);
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    getTokensFromLS: (state) => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      if (accessToken && ["undefined", "null"].includes(accessToken)) {
        state.accessToken = null;
      } else {
        state.accessToken = accessToken;
      }

      if (refreshToken && ["undefined", "null"].includes(refreshToken)) {
        state.accessToken = null;
      } else {
        state.refreshToken = refreshToken;
      }
    }
  },
})

export const { setTokens, clearTokens, getTokensFromLS } = tokensSlice.actions

export default tokensSlice.reducer