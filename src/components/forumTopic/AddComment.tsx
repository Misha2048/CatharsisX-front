import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

import TextareaWithBtn from '@components/TextareaWithBtn'
import { api } from '@api/index'
import { addComment } from '@redux/slices/forumTopicSlice'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  answerId: string
  answerIndex: number
  dispatch: Dispatch<UnknownAction>
}

const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AddCommentText = styled.p<{ hasMarginBottom: boolean }>`
  color: #fff;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  filter: brightness(0.75);
  margin-bottom: ${(props) => (props.hasMarginBottom ? '10px' : '0')};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1);
  }
`

function AddComment({ answerId, answerIndex, dispatch }: Props) {
  const [isShowTextarea, setIsShowTextarea] = useState(false)
  const [text, setText] = useState('')

  const toggleTextarea = useCallback(() => {
    setIsShowTextarea(!isShowTextarea)
  }, [isShowTextarea])

  const addNewComment = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const resp = await api.comment.post({ answerId, body: text })
      if (!resp.error) {
        dispatch(addComment({ answerIndex, comment: resp }))
        setText('')
      } else {
        dispatch(setHint({ message: "Something went wrong. Couldn't add a comment." }))
      }
    },
    [text],
  )

  return (
    <AddCommentContainer>
      <AddCommentText onClick={toggleTextarea} hasMarginBottom={isShowTextarea}>
        Add a comment
      </AddCommentText>
      <TextareaWithBtn
        placeholder='Write a comment'
        text={text}
        setText={setText}
        onSubmit={addNewComment}
        height={isShowTextarea ? '128px' : '0'}
      />
    </AddCommentContainer>
  )
}

export default AddComment
