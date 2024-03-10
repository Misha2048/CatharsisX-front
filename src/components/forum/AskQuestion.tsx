import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AskQuestionBtn from '@components/forum/AskQuestionBtn'
import AskQuestionModal from '@components/forum/AskQuestionModal'
import { setPopupState } from '@redux/slices/popupSlice'
import { RootState } from '@redux/store'

function AskQuestion() {
  const [isShow, setIsShow] = useState(false)
  const isUserLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const dispatch = useDispatch()

  const showModal = useCallback(() => {
    if (!isUserLoggedIn) {
      return dispatch(setPopupState({ isShow: true }))
    }
    document.body.classList.add('_lock')
    setIsShow(true)
  }, [isUserLoggedIn])

  useEffect(() => {
    return () => {
      document.body.classList.remove('_lock')
    }
  }, [])

  return (
    <div>
      <AskQuestionBtn onClick={showModal}>Ask Question</AskQuestionBtn>
      <AskQuestionModal isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default AskQuestion
