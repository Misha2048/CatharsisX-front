import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Page from '@components/Page'
import ChatUsers from '@components/chat/ChatUsers'
import ChatWrapper from '@components/chat/ChatWrapper'
import ForumBackground from '@components/forum/ForumBackground'
import ChatMessages from '@components/chat/ChatMessages'
import { setInitialChatState } from '@redux/slices/chatSlice'

function Chat() {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setInitialChatState())
    }
  }, [])

  return (
    <Page hasHeader hasTooltip>
      <ForumBackground>
        <ChatWrapper>
          <ChatUsers />
          <ChatMessages />
        </ChatWrapper>
      </ForumBackground>
    </Page>
  )
}

export default Chat
