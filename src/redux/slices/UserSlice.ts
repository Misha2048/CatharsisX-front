
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    [key: string]: string | boolean | null;
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    emailVerified: boolean;
  }

  export interface PropertyType {
    field: keyof UserState;
    value: string | boolean | null;
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
      setValue: (state, action: {payload: PropertyType, type: string}) => {  
        if (action.payload.value === undefined) {
          return;
        }
        if (state[action.payload.field] !== undefined) {
          state[action.payload.field] = action.payload.value;
        }
      },
    },
  });

  export const { setValue } = userSlice.actions;

  export default userSlice.reducer;

