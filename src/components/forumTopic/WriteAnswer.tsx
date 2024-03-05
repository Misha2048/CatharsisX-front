import { useCallback, useState } from 'react'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

import TextareaWithBtn from '@components/TextareaWithBtn'
import { api } from '@api/index'
import { addAnswer } from '@redux/slices/forumTopicSlice'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  forumId: string
  dispatch: Dispatch<UnknownAction>
}

function WriteAnswer({ forumId, dispatch }: Props) {
  const [answerText, setAnswerText] = useState('')

  const addNewAnswer = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const resp = await api.answer.post({ forumId, body: answerText })
      if (!resp.error) {
        dispatch(addAnswer(resp))
        setAnswerText('')
      } else {
        dispatch(setHint({ message: "Something went wrong. Couldn't add a new answer." }))
      }
    },
    [answerText],
  )

  return (
    <TextareaWithBtn
      placeholder='Write an answer'
      text={answerText}
      setText={setAnswerText}
      onSubmit={addNewAnswer}
    />
  )
}

export default WriteAnswer
