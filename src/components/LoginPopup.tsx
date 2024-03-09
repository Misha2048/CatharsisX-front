import { styled } from '@linaria/react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import BlackOverlay from '@components/BlackOverlay'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import CloseBtn from '@components/CloseBtn'
import ModalText from '@components/modalWindow/ModalText'
import ModalWindowBtn from '@components/ModalWindowBtn'
import SecondaryText from '@components/SecondaryText'
import Link from '@components/Link'
import { RootState } from '@redux/store'
import { setPopupState } from '@redux/slices/popupSlice'

const PopupBody = styled(ModalBody)`
  align-items: center;
`

const SignUpBtn = styled(ModalWindowBtn)`
  width: 100%;
`

function LoginPopup() {
  const isShow = useSelector((state: RootState) => state.popup.isShow)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hidePopup = useCallback((event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event?.preventDefault()
    dispatch(setPopupState({ isShow: false }))
  }, [])

  const goToSignUpPage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    hidePopup()
    navigate('/signup')
  }, [])

  return (
    <>
      <BlackOverlay show={isShow} onClick={hidePopup} noBlur />
      <PopupBody show={isShow}>
        <ModalTitle>Join the CatharsisX community</ModalTitle>
        <CloseBtnContainer>
          <CloseBtn size='small' onClick={hidePopup} />
        </CloseBtnContainer>
        <ModalText>
          Join CatharsisX to unlock new privileges like asking questions, voting, and commenting.
        </ModalText>
        <SignUpBtn onClick={goToSignUpPage}>Sign up</SignUpBtn>
        <SecondaryText>
          Already have an account? <Link to='/login'>Log in</Link>
        </SecondaryText>
      </PopupBody>
    </>
  )
}

export default LoginPopup
