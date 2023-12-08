import { createSlice } from '@reduxjs/toolkit';

export interface HintState {
  message: string;
}

const initialState: HintState = {
  message: '',
};

export const hintSlice = createSlice({
  name: 'hint',
  initialState,
  reducers: {
    setHint: (state, action: { payload: HintState; type: string }) => {
      state.message = action.payload.message;
    },
    clearHint: state => {
      state.message = '';
    },
  },
});

export const { setHint, clearHint } = hintSlice.actions;

export default hintSlice.reducer;
