import { styled } from '@linaria/react'
import { useCallback, useEffect, useState } from 'react'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import TopicItem from '@components/forumTopic/TopicItem'
import TopicBigText from '@components/forumTopic/TopicBigText'
import TopicText from '@components/forumTopic/TopicText'
import AddComment from '@components/forumTopic/AddComment'
import { IComment } from '@api/intefaces'
import { api } from '@api/index'
import { setHint } from '@redux/slices/hintSlice'
import whiteTriangle from '@assets/white-triangle.svg'
import { RootState } from '@redux/store'
import { setPopupState } from '@redux/slices/popupSlice'

interface Props {
  id: string
  answerIndex: number
  upvotes: number
  answerText: string
  comments: IComment[]
  dispatch: Dispatch<UnknownAction>
}

const AnswerBody = styled.div`
  display: flex;
  gap: 30px;
`

const UpvotesBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const VoteUp = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  img {
    position: absolute;
    top: 9px;
    left: 50%;
    transform: translatex(-50%);
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: #3ec290;
    background-color: #3ec290;
  }
  &:active {
    transform: scale(0.95);
  }
`

const VoteDown = styled(VoteUp)`
  transform: rotate(180deg);
`

const CommentsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Comment = styled.div`
  width: 85%;
  padding: 10px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CommentText = styled.p`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.3;
  word-break: break-all;
`

const CommentAuthor = styled.p`
  color: #3ec290;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1;
`

function TopicAnswer({ id, upvotes, answerText, answerIndex, comments, dispatch }: Props) {
  const [votes, setVotes] = useState(0)
  const isUserLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  const voteForAnswer = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: -1 | 1) => {
      event.preventDefault()
      if (!isUserLoggedIn) {
        return dispatch(setPopupState({ isShow: true }))
      }
      const resp = await api.answer.upvote({ id, score: value })
      if (!resp.error) {
        setVotes(votes + value)
      } else if (resp.error.endsWith('User already voted')) {
        dispatch(setHint({ message: "You've already voted" }))
      } else if (resp.error.endsWith('Users cannot vote for their own answers')) {
        dispatch(setHint({ message: "You can't vote for your own answers" }))
      }
    },
    [id, votes],
  )

  useEffect(() => {
    setVotes(upvotes)
  }, [])

  return (
    <li>
      <TopicItem hasBorders gap='30px'>
        <AnswerBody>
          <UpvotesBody>
            <VoteUp onClick={(event) => voteForAnswer(event, 1)}>
              <img src={whiteTriangle} alt='' />
            </VoteUp>
            <TopicBigText>{votes}</TopicBigText>
            <VoteDown onClick={(event) => voteForAnswer(event, -1)}>
              <img src={whiteTriangle} alt='' />
            </VoteDown>
          </UpvotesBody>
          <TopicText>{answerText}</TopicText>
        </AnswerBody>
        <CommentsContainer>
          {comments &&
            comments.map((comment) => (
              <Comment key={comment.id}>
                <CommentText>{comment.body}</CommentText>
                <CommentAuthor>
                  - {comment.userFirstName} {comment.userLastName}
                </CommentAuthor>
              </Comment>
            ))}
        </CommentsContainer>
        <AddComment answerId={id} answerIndex={answerIndex} dispatch={dispatch} />
      </TopicItem>
    </li>
  )
}

export default TopicAnswer
