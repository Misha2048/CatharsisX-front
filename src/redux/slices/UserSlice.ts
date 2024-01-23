import { createSlice } from '@reduxjs/toolkit'

// remake slice

export interface IUserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  id?: string | null
  first_name?: string | null
  last_name?: string | null
  email?: string | null
  emailVerified?: boolean
}

export interface PropertyType {
  field: keyof IUserState
  value: string | boolean | null
}

const initialState: IUserState = {
  id: null,
  first_name: null,
  last_name: null,
  email: null,
  emailVerified: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue: (state, action: { payload: IUserState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (action.payload[key] !== undefined) {
          state[key] = value
        }
      }
      // setValue: (state, action: {payload: PropertyType, type: string}) => {
      //   if (action.payload.value === undefined) {
      //     return;
      //   }
      //   if (state[action.payload.field] !== undefined) {
      //     state[action.payload.field] = action.payload.value;
      //   }
    },
  },
})

export const { setValue } = userSlice.actions

export default userSlice.reducer
