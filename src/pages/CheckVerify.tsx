import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { styled } from '@linaria/react'

import { api } from '@api/index'
import PollingTool from '@utils/pollingTool'
import ModalWindowBtn from '@components/ModalWindowBtn'
import { setValue } from '@redux/slices/UserSlice'
import FullscreenUnderHeader from '@components/FullscreenUnderHeader'
import Page from '@components/Page'

const BackgroundContainer = styled(FullscreenUnderHeader)`
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GreyContainerBox = styled.div`
  padding: 32px 20px;
  margin: 20px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    padding: 32px;
    gap: 32px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 40px;
    gap: 40px;
  }
`

const Title = styled.h3`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const Message = styled.p`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

function CheckVerify() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleResendVerification = useCallback(async () => {
    await api.emailVerify()
  }, [])

  useEffect(() => {
    checkEmailIsVerified()

    const pollingEmailStatus = new PollingTool(async () => {
      checkEmailIsVerified(pollingEmailStatus)
    }, 5000)

    pollingEmailStatus.start()

    return () => pollingEmailStatus.stop()
  }, [])

  const checkEmailIsVerified = useCallback(async (pollingEmailStatus?: PollingTool) => {
    const userInfo = await api.users.me()
    if (userInfo.email_verified) {
      dispatch(setValue({ emailVerified: true }))
      pollingEmailStatus?.stop()
      navigate('/library', { replace: true })
    }
  }, [])

  return (
    <Page hasHeader>
      <FullscreenUnderHeader>
        <BackgroundContainer>
          <GreyContainerBox>
            <Title>Verify Your Email</Title>
            <Message>
              Check your email & click the <br /> link to activate your account.
            </Message>
            <ModalWindowBtn onClick={handleResendVerification}>Resend Email</ModalWindowBtn>
          </GreyContainerBox>
        </BackgroundContainer>
      </FullscreenUnderHeader>
    </Page>
  )
}

export default CheckVerify
