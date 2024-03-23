import WideSearchField from '@components/WideSearchField'
import { useState } from 'react'

function ChatSearchField() {
  const [text, setText] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(text)
  }

  return (
    <WideSearchField
      placeholder='Start or find a conversation'
      text={text}
      setText={setText}
      onSubmit={handleSubmit}
    />
  )
}

export default ChatSearchField
