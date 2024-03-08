import { createSlice } from '@reduxjs/toolkit'

import { IAnswer, IComment, IGetTopicResponse } from '@api/intefaces'

export interface ForumTopicState {
  info: IGetTopicResponse
}

const initialState: ForumTopicState = {
  info: {
    userId: '',
    userFirstName: '',
    userLastName: '',
    title: '',
    body: '',
    tags: [] as string[],
    created_at: '',
    last_modified_at: '',
    answers: [] as IAnswer[],
  },
}

export const forumTopicSlice = createSlice({
  name: 'forumTopic',
  initialState,
  reducers: {
    setTopic: (state, action: { payload: IGetTopicResponse; type: string }) => {
      for (const key of Object.keys(state.info)) {
        if (action.payload[key] !== undefined) {
          state.info[key] = action.payload[key]
        }
      }
    },
    addAnswer: (state, action: { payload: IAnswer; type: string }) => {
      if (!state.info.answers) {
        state.info.answers = [action.payload]
      } else {
        state.info.answers.push(action.payload)
      }
    },
    addComment: (
      state,
      action: { payload: { answerIndex: number; comment: IComment }; type: string },
    ) => {
      if (state.info.answers) {
        const comments = state.info.answers[action.payload.answerIndex].comments
        comments
          ? comments.push(action.payload.comment)
          : (state.info.answers[action.payload.answerIndex].comments = [action.payload.comment])
      }
    },
    clearTopic: (state) => {
      state.info = initialState.info
    },
  },
})

export const { setTopic, addAnswer, addComment, clearTopic } = forumTopicSlice.actions

export default forumTopicSlice.reducer
