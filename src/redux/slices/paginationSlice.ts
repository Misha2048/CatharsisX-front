import { createSlice } from '@reduxjs/toolkit'

import { forumTopicsInitialLimit } from '@const'

export interface PaginationState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  totalCount?: number
  pageLimit?: number
  currentPage?: number
}

const initialState: PaginationState = {
  totalCount: 0,
  pageLimit: forumTopicsInitialLimit,
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginationValues: (state, action: { payload: PaginationState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (action.payload[key] !== undefined) {
          state[key] = value
        }
      }
    },
    setInitialPaginationValues: (state) => {
      for (const key of Object.keys(initialState)) {
        state[key] = initialState[key]
      }
    },
  },
})

export const { setPaginationValues, setInitialPaginationValues } = paginationSlice.actions

export default paginationSlice.reducer
