import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import TextareaWithBtn from '@components/TextareaWithBtn'
import { api } from '@api/index'
import { addComment } from '@redux/slices/forumTopicSlice'
import { setHint } from '@redux/slices/hintSlice'
import { RootState } from '@redux/store'
import { setPopupState } from '@redux/slices/popupSlice'

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
  const isUserLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  const toggleTextarea = useCallback(() => {
    setIsShowTextarea(!isShowTextarea)
  }, [isShowTextarea])

  const addNewComment = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!isUserLoggedIn) {
        return dispatch(setPopupState({ isShow: true }))
      }
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
        maxLength={1000}
      />
    </AddCommentContainer>
  )
}

export default AddComment
