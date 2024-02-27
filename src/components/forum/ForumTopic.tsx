import { styled } from '@linaria/react'

interface Props {
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
`

const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px 15px;
`

const Tag = styled.p`
  background-color: #3ec290;
  border-radius: 3px;
  padding: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1;
  color: #fff;
`

function ForumTopic({ title, tags }: Props) {
  return (
    <StyledTopic>
      <TopicTitle>{title}</TopicTitle>
      <TagsContainer>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </TagsContainer>
    </StyledTopic>
  )
}

export default ForumTopic
