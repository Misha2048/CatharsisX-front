import { styled } from '@linaria/react'

import ChatSearchField from '@components/chat/ChatSearchField'
import ChatUser from '@components/chat/ChatUser'

const UsersBody = styled.div`
  width: 100%;
  min-height: inherit;
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    width: 300px;
    border-right: 1px solid rgba(255, 255, 255, 0.45);
  }
`

const Title = styled.h2`
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.01em;
  padding: 20px 0;
`

const UsersList = styled.ul`
  overflow: auto;
`

function ChatUsers() {
  return (
    <UsersBody>
      <Title>Messages</Title>
      <ChatSearchField />
      <UsersList>
        <ChatUser id='1' firstName='John' lastName='Doe' hasUnreadMessages />
        <ChatUser id='2' firstName='John' lastName='Doe' />
        <ChatUser id='3' firstName='John' lastName='Doe' />
        <ChatUser id='4' firstName='John' lastName='Doe' />
        <ChatUser id='5' firstName='John' lastName='Doe' />
        <ChatUser id='6' firstName='John' lastName='Doe' />
        <ChatUser id='7' firstName='John' lastName='Doe' />
        <ChatUser id='8' firstName='John' lastName='Doe' />
        <ChatUser id='9' firstName='John' lastName='Doe' />
        <ChatUser id='10' firstName='John' lastName='Doe' />
        <ChatUser id='11' firstName='John' lastName='Doe' />
        <ChatUser id='12' firstName='John' lastName='Doe' />
      </UsersList>
    </UsersBody>
  )
}

export default ChatUsers
