import { styled } from '@linaria/react'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  time: string
  isFirst?: boolean
  isLast?: boolean
}

const MessageBody = styled.div<{ isFirst?: boolean; isLast?: boolean }>`
  background-color: #666666;
  max-width: 300px;
  padding: 12px 18px 6px 18px;
  border-radius: ${(props) =>
    props.isFirst ? '0 16px 16px 16px' : props.isLast ? '16px 16px 0 16px' : '16px'};
`

const Text = styled.p`
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 1.1;
  padding-bottom: 5px;
`

const Time = styled.p`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.333;
`

function ChatMessage({ time, isFirst, isLast, children }: Props) {
  return (
    <MessageBody isFirst={isFirst} isLast={isLast}>
      <Text>{children}</Text>
      <Time>{time}</Time>
    </MessageBody>
  )
}

export default ChatMessage
