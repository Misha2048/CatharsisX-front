import { styled } from '@linaria/react'

const ChatWrapper = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  display: flex;
  max-height: calc(100vh - 80px);

  @media screen and (min-width: 821px) {
    max-height: calc(100vh - 100px);
  }
`

export default ChatWrapper
