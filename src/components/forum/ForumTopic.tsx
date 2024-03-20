import { styled } from '@linaria/react'
import { useNavigate } from 'react-router-dom'

import Tag from '@components/Tag'
import TagsContainer from '@components/TagsContainer'

interface Props {
  topicId: string
  title: string
  tags: string[]
}

const StyledTopic = styled.li`
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  &:last-child {
    border-bottom: none;
  }
`

const TopicTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 20px;
  line-height: 1.25;
  word-break: break-all;
  cursor: pointer;
`

function ForumTopic({ topicId, title, tags }: Props) {
  const navigate = useNavigate()

  return (
    <StyledTopic>
      <TopicTitle onClick={() => navigate(`/forum/${topicId}`)}>{title}</TopicTitle>
      <TagsContainer>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </TagsContainer>
    </StyledTopic>
  )
}

export default ForumTopic
