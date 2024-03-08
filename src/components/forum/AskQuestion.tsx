import { useCallback, useState } from 'react'

import AskQuestionBtn from '@components/forum/AskQuestionBtn'
import AskQuestionModal from '@components/forum/AskQuestionModal'

function AskQuestion() {
  const [isShow, setIsShow] = useState(false)

  const showModal = useCallback(() => {
    document.body.classList.add('_lock')
    setIsShow(true)
  }, [])

  return (
    <div>
      <AskQuestionBtn onClick={showModal}>Ask Question</AskQuestionBtn>
      <AskQuestionModal isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default AskQuestion
