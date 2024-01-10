import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import GreyContainerBox from './GreyContainerBox'
import CenteredContainer from './CenteredContainer'
import { Title } from './Titles'
import { api } from './../api'
import PollingTool from './../utils/pollingTool'
import getEmailStatusAndChangeStore from './../helpers/getEmailStatusAndChangeStore'
import { useDispatch } from 'react-redux'

function BlockUnverifiedUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleResendVerification = useCallback(async () => {
    try {
      await api.emailVerify()
    } catch (error) {
      console.error('Error sending email verification:', error)
    }
  }, [])

  useEffect(() => {
    const pollingEmailStatus = new PollingTool(async () => {
      try {
        const isEmailVerified = await getEmailStatusAndChangeStore(dispatch)

        if (isEmailVerified) {
          navigate('/')
        }
      } catch (error) {
        console.error('Error checking email status:', error)
      }
    }, 5000)
    pollingEmailStatus.start()

    return () => {
      pollingEmailStatus.stop()
    }
  })

  return (
    <CenteredContainer>
      <GreyContainerBox>
          <Title>An email was sent to your email. Please, check your email box</Title>
          <Button onClick={handleResendVerification}>Send one more</Button>
      </GreyContainerBox>
    </CenteredContainer>
  )
}
export default BlockUnverifiedUser
