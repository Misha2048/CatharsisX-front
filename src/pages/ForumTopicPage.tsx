import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Page from '@components/Page'
import ForumBackground from '@components/forum/ForumBackground'
import ForumHeading from '@components/forum/ForumHeading'
import TopicContainer from '@components/forumTopic/TopicContainer'
import TopicItem from '@components/forumTopic/TopicItem'
import TopicText from '@components/forumTopic/TopicText'
import TagsContainer from '@components/TagsContainer'
import Tag from '@components/Tag'
import TopicAnswer from '@components/forumTopic/TopicAnswer'
import TopicBigText from '@components/forumTopic/TopicBigText'
import TopicAnswersList from '@components/forumTopic/TopicAnswersList'
import TopicHeadingContainer from '@components/forumTopic/TopicHeadingContainer'
import TopicDatesRow from '@components/forumTopic/TopicDatesRow'
import WriteAnswer from '@components/forumTopic/WriteAnswer'
import TopicBodyDate from '@components/forumTopic/TopicBodyDate'
import { RootState } from '@redux/store'
import { setTopic } from '@redux/slices/forumTopicSlice'
import { api } from '@api/index'
import { setHint } from '@redux/slices/hintSlice'
import { setPopupState } from '@redux/slices/popupSlice'

function ForumTopicPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const forumTopicState = useSelector((state: RootState) => state.forumTopic.info)

  const fetchData = useCallback(async () => {
    const resp = await api.forum.topic({ id: id as string })
    if (!resp.error) {
      dispatch(setTopic(resp))
    } else {
      dispatch(
        setHint({
          message:
            "Something went wrong. Could't receive a forum topic data. Please refresh the page.",
        }),
      )
    }
  }, [])

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(setPopupState({ isShow: false }))
    }
  }, [])

  return (
    <Page hasHeader hasFooter hasTooltip hasLoginPopup>
      <ForumBackground>
        <TopicContainer>
          <TopicItem>
            <TopicHeadingContainer>
              <ForumHeading>{forumTopicState.title}</ForumHeading>
              <TopicDatesRow>
                <TopicBodyDate text='Asked' date={forumTopicState.created_at} />
                <TopicBodyDate text='Modified' date={forumTopicState.last_modified_at} />
              </TopicDatesRow>
            </TopicHeadingContainer>
            <TopicText>{forumTopicState.body}</TopicText>
            <TagsContainer>
              {forumTopicState.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagsContainer>
            <TopicBigText>
              {`${forumTopicState.answers ? forumTopicState.answers.length : 0} answers`}
            </TopicBigText>
          </TopicItem>
          <TopicAnswersList>
            {forumTopicState.answers &&
              forumTopicState.answers.map((answer, i) => (
                <TopicAnswer
                  key={answer.id}
                  id={answer.id}
                  answerIndex={i}
                  upvotes={answer.upvotes}
                  answerText={answer.body}
                  comments={answer.comments || []}
                  dispatch={dispatch}
                />
              ))}
          </TopicAnswersList>
          <TopicBigText>Your Answer</TopicBigText>
          <WriteAnswer forumId={id as string} dispatch={dispatch} />
        </TopicContainer>
      </ForumBackground>
    </Page>
  )
}

export default ForumTopicPage
