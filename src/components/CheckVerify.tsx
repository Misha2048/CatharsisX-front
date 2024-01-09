import React, { useEffect } from 'react'
import Button from './Button'
import GreyContainerBox from './GreyContainerBox'
import CenteredContainer from './CenteredContainer'
import { Title } from './Titles'
import Form from './Form'
import { api } from './../api'
import PollingTool from './../utils/pollingTool'
import getEmailStatusAndChangeStore from './../helpers/getEmailStatusAndChangeStore'
import { useDispatch } from 'react-redux'
import { store } from '../redux/store'

function BlockUnverifiedUser() {
// const dispatch = useDispatch()
// UseCallback DONE
  const handleResendVerification = async () => {
    try {
      await api.emailVerify()
      console.log('Email verification sent successfully.')
    } catch (error) {
      console.error('Error sending email verification:', error)
    }
  }

  useEffect(() => {
    const pollingEmailStatus = new PollingTool(async () => {
      try {
        const isEmailVerified = await store.dispatch(getEmailStatusAndChangeStore)

        if (isEmailVerified) {
          window.location.href = '/'
        }
      } catch (error) {
        console.error('Error checking email status:', error)
      }
    }, 5000)
    // Set bigger intervals DONE 2 -> 5 seconds
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
// Delete "Form" DONE
export default BlockUnverifiedUser
