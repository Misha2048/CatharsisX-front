import { createSlice } from '@reduxjs/toolkit'

import { IForumTopic } from '@api/intefaces'

export interface ForumState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  topics: IForumTopic[]
  questionTitle?: string
}

const initialState: ForumState = {
  topics: [],
  questionTitle: undefined,
}

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setForumTopics: (state, action: { payload: IForumTopic[]; type: string }) => {
      state.topics = action.payload
    },
    setForumState: (state, action: { payload: ForumState; type: string }) => {
      for (const [key, value] of Object.entries(action.payload)) {
        if (action.payload[key] !== undefined) {
          state[key] = value
        }
      }
    },
    clearForumTopics: (state) => {
      for (const key of Object.keys(initialState)) {
        state[key] = initialState[key]
      }
    },
    addForumTopic: (state, action: { payload: IForumTopic; type: string }) => {
      if (!state.topics) {
        state.topics = [action.payload]
      } else {
        state.topics.push(action.payload)
      }
    },
  },
})

export const { setForumTopics, setForumState, clearForumTopics, addForumTopic } = forumSlice.actions

export default forumSlice.reducer
