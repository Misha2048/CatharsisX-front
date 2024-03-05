import { styled } from '@linaria/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ForumPagination from '@components/forum/ForumPagination'
import ForumTopic from '@components/forum/ForumTopic'
import { api } from '@api/index'
import { clearForumTopics, setForumState } from '@redux/slices/forumSlice'
import { RootState } from '@redux/store'
import { forumTopicsInitialLimit } from '@const'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  goToTopRef: React.MutableRefObject<HTMLElement | null>
}

const TopicsListContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

function TopicsList({ goToTopRef }: Props) {
  const topics = useSelector((state: RootState) => state.forum.topics)
  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    const resp = await api.forum.get({ offset: 0, limit: forumTopicsInitialLimit })
    if (!resp.error) {
      dispatch(setForumState({ topics: resp.forums, totalCount: resp.count }))
    } else {
      dispatch(
        setHint({
          message:
            "Something went wrong. Could't receive a list of forum topics. Please refresh the page.",
        }),
      )
    }
  }, [])

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(clearForumTopics())
    }
  }, [])

  return (
    <TopicsListContainer>
      <StyledList>
        {topics.map((topic) => (
          <ForumTopic key={topic.forumId} title={topic.title} tags={topic.tags} />
        ))}
      </StyledList>
      <ForumPagination dispatch={dispatch} goToTopRef={goToTopRef} />
    </TopicsListContainer>
  )
}

export default TopicsList
