import React, { useEffect } from 'react'
import Button from './Button'
import GreyContainerBox from './GreyContainerBox'
import CenteredContainer from './CenteredContainer'
import { Title } from './Titles'
import Form from './Form'
import { api } from './../api'
import PollingTool from './../utils/pollingTool'
import makeGetRequest from './../helpers/makeGetRequest'
import { useDispatch } from 'react-redux'

function BlockUnverifiedUser() {
  const dispatch = useDispatch()

  const handleResendVerification = async () => {
    try {
      await api.emailVerify()
      console.log('Email verification sent successfully.')
    } catch (error) {
      console.error('Error sending email verification:', error)
    }
  }

  useEffect(() => {
    const checkEmailStatus = new PollingTool(async () => {
      try {
        const isEmailVerified = await makeGetRequest(dispatch)

        if (isEmailVerified) {
          window.location.href = '/'
        }
      } catch (error) {
        console.error('Error checking email status:', error)
      }
    }, 2000)
    checkEmailStatus.start()

    return () => {
      checkEmailStatus.stop()
    }
  }, [dispatch])

  return (
    <CenteredContainer>
      <GreyContainerBox>
        <Form>
          <Title>An email was sent to your email. Please, check your email box</Title>
          <Button onClick={handleResendVerification}>Send one more</Button>
        </Form>
      </GreyContainerBox>
    </CenteredContainer>
  )
}

export default BlockUnverifiedUser
