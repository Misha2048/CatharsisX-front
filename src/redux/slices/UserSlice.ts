import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    emailVerified: boolean;
  }

  const initialState: UserState = {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    emailVerified: false
  };

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setEmailStatusToTrue: state => {
        state.emailVerified = true;
      },
      setEmailStatusToFalse: state => {
        state.emailVerified = false;
      },
      setEmail: (state, action: {payload: UserState, type: string})=>{
        state.email = action.payload.email;
      },
      setId: (state, action: {payload: UserState, type: string})=>{
        state.id = action.payload.id;
      },
      setFirstName: (state, action: {payload: UserState, type: string})=>{
        state.first_name = action.payload.first_name;
      },
      setLastName: (state, action: {payload: UserState, type: string})=>{
        state.last_name = action.payload.last_name;
      },

      clearId: (state) =>{
        state.id = null;
      },
      clearEmail: (state) =>{
        state.email = null;
      },
      clearFirstname: (state) =>{
        state.first_name = null;
      },
      clearLastName: (state) =>{
        state.last_name = null;
      },
    },
  });

  export const { setEmailStatusToTrue, setEmailStatusToFalse, setId, setEmail, setFirstName, setLastName,
  clearId, clearEmail, clearFirstname, clearLastName } = userSlice.actions;

  export default userSlice.reducer;