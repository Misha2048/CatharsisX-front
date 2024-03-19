import { styled } from '@linaria/react'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

import ChatUserLogo from '@components/chat/ChatUserLogo'
import ChatUserName from '@components/chat/ChatUserName'
import { setChatState } from '@redux/slices/chatSlice'

interface Props {
  id: string
  firstName: string
  lastName: string
  hasUnreadMessages?: boolean
}

const StyledUser = styled.li`
  background-color: rgba(238, 238, 238, 0.05);
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(238, 238, 238, 0.15);
  }
`

const NewMessagesIndicator = styled.div`
  background-color: #3ec290;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

function ChatUser({ firstName, lastName, hasUnreadMessages }: Props) {
  const dispatch = useDispatch()

  const pickChat = useCallback(() => {
    dispatch(setChatState({ info: { firstName, lastName, isShowMessages: true } }))
  }, [])

  return (
    <StyledUser onClick={pickChat}>
      <ChatUserLogo>{firstName.charAt(0).toUpperCase()}</ChatUserLogo>
      <ChatUserName>
        {firstName} {lastName}
      </ChatUserName>
      {hasUnreadMessages && <NewMessagesIndicator />}
    </StyledUser>
  )
}

export default ChatUser
