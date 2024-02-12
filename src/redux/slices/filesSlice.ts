import { createSlice } from '@reduxjs/toolkit'

import { IFilesResponse } from '@api/intefaces'

export interface FilesState {
  list: IFilesResponse[]
}

const initialState: FilesState = {
  list: [],
}

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFilesList: (state, action: { payload: IFilesResponse[]; type: string }) => {
      state.list = action.payload
    },
    clearFilesList: (state) => {
      state.list = []
    },
    removeFile: (state, action: { payload: { id: string }; type: string }) => {
      if (state.list.length > 0) {
        state.list = state.list.filter((file) => file.id !== action.payload.id)
      }
    },
    addFile: (state, action: { payload: IFilesResponse; type: string }) => {
      state.list.push(action.payload)
    },
  },
})

export const { setFilesList, clearFilesList, removeFile, addFile } = filesSlice.actions

export default filesSlice.reducer
