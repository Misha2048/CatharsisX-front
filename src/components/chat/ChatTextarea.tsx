import { useCallback, useState } from 'react'

import GreyTextarea from '@components/GreyTextarea'
import { styled } from '@linaria/react'

const TextareaContainer = styled.div`
  padding: 10px 20px 0px 20px;
`

function ChatTextarea() {
  const [text, setText] = useState('')

  const submitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(text)
    },
    [text],
  )

  return (
    <TextareaContainer>
      <GreyTextarea
        placeholder='Type a message'
        text={text}
        setText={setText}
        onSubmit={submitForm}
      />
    </TextareaContainer>
  )
}

export default ChatTextarea
