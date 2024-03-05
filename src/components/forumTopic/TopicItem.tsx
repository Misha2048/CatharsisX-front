import { styled } from '@linaria/react'

const TopicItem = styled.div<{ hasBorders?: boolean; gap?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : '20px')};
  padding: ${(props) => (props.hasBorders ? '20px 0' : '0')};
  border-top: ${(props) => (props.hasBorders ? '3px solid rgba(255, 255, 255, 0.4)' : 'none')};
  border-bottom: ${(props) => (props.hasBorders ? '3px solid rgba(255, 255, 255, 0.4)' : 'none')};
`

export default TopicItem
