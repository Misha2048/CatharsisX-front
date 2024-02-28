import { createSlice } from '@reduxjs/toolkit'

import { IForumTopic } from '@api/intefaces'

export interface ForumState {
  topics: IForumTopic[]
  totalCount: number
}

const initialState: ForumState = {
  topics: [],
  totalCount: 0,
}

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setForumTopics: (state, action: { payload: IForumTopic[]; type: string }) => {
      state.topics = action.payload
    },
    setForumState: (state, action: { payload: ForumState; type: string }) => {
      state.topics = action.payload.topics
      state.totalCount = action.payload.totalCount
    },
    clearForumTopics: (state) => {
      state.topics = []
      state.totalCount = 0
    },
    addForumTopic: (state, action: { payload: IForumTopic; type: string }) => {
      state.topics.push(action.payload)
    },
  },
})

export const { setForumTopics, setForumState, clearForumTopics, addForumTopic } = forumSlice.actions

export default forumSlice.reducer
