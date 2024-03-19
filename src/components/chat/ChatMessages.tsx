import { styled } from '@linaria/react'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

import ChatUserLogo from '@components/chat/ChatUserLogo'
import ChatUserName from '@components/chat/ChatUserName'
import ChatMessage from '@components/chat/ChatMessage'
import ChatTextarea from '@components/chat/ChatTextarea'
import { RootState } from '@redux/store'
import { setInitialChatState } from '@redux/slices/chatSlice'
import arrowBack from '@assets/arrow-back.svg'

const MessagesContainer = styled.div<{ isShow: boolean }>`
  background-color: #000;
  width: 100%;
  position: fixed;
  top: 80px;
  height: calc(100vh - 80px);
  left: ${(props) => (props.isShow ? '0' : '50%')};
  opacity: ${(props) => (props.isShow ? '1' : '0')};
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease 0s;

  @media screen and (min-width: 821px) {
    top: 100px;
    height: calc(100vh - 100px);
  }
  @media (min-width: 1024px) {
    position: static;
    flex: 1 1 auto;
  }
`

const User = styled.div`
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
`

const BackBtn = styled.button`
  background-color: transparent;

  & img {
    width: 17px;
    height: 15px;
  }
`

const Messages = styled.div`
  flex: 2 1 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: auto;
`

const IncomingMessages = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 10px;
`

const OutcomingMessages = styled(IncomingMessages)`
  align-self: flex-end;
`

const GroupOfMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ChooseChat = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  color: #fff;
  padding: 20px;

  @media (max-width: 1023px) {
    display: none;
  }
`

function ChatMessages() {
  const { lastName, firstName, isShowMessages } = useSelector((state: RootState) => state.chat.info)
  const dispatch = useDispatch()

  const backToChatList = useCallback(() => {
    dispatch(setInitialChatState())
  }, [])

  return firstName ? (
    <MessagesContainer isShow={isShowMessages}>
      <User>
        <BackBtn onClick={backToChatList}>
          <img src={arrowBack} alt='back to list of chats' />
        </BackBtn>
        <ChatUserLogo>{firstName.charAt(0).toUpperCase()}</ChatUserLogo>
        <ChatUserName>
          {firstName} {lastName}
        </ChatUserName>
      </User>
      <Messages>
        <IncomingMessages>
          <ChatUserLogo>{firstName.charAt(0).toUpperCase()}</ChatUserLogo>
          <GroupOfMessages>
            <ChatMessage isFirst time={'15:42'}>
              {'Hello! Will you send me 10-18 lab of web?)'}
            </ChatMessage>
            <ChatMessage time={'15:42'}>Pleaseeeeeeeeeeee!!!</ChatMessage>
          </GroupOfMessages>
        </IncomingMessages>
        <OutcomingMessages>
          <GroupOfMessages>
            <ChatMessage isLast time={'15:42'}>
              {'Hi, no, delete my contacts or pay 69$ 👀 '}
            </ChatMessage>
          </GroupOfMessages>
        </OutcomingMessages>
        <IncomingMessages>
          <ChatUserLogo>{firstName.charAt(0).toUpperCase()}</ChatUserLogo>
          <GroupOfMessages>
            <ChatMessage isFirst time={'15:42'}>
              {'Hello! Will you send me 10-18 lab of web?)'}
            </ChatMessage>
            <ChatMessage time={'15:42'}>Pleaseeeeeeeeeeee!!!</ChatMessage>
            <ChatMessage time={'15:42'}>Pleaseeeeeeeeeeee!!!</ChatMessage>
          </GroupOfMessages>
        </IncomingMessages>
        <OutcomingMessages>
          <GroupOfMessages>
            <ChatMessage isLast time={'15:42'}>
              {'Hi, no, delete my contacts or pay 69$ 👀 '}
            </ChatMessage>
          </GroupOfMessages>
        </OutcomingMessages>
      </Messages>
      <ChatTextarea />
    </MessagesContainer>
  ) : (
    <ChooseChat>Open a chat</ChooseChat>
  )
}

export default ChatMessages
