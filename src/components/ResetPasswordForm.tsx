import React, { useState } from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'
import GreyContainerBox from './GreyContainerBox'
import CenteredContainer from './CenteredContainer'
import SecondaryText from './SecondaryText'
import { Title } from './Titles'
import { css } from '@linaria/core'
import { api } from '../api'
import { useLocation } from 'react-router-dom'
import ToolTip from './ToolTip'
import { setHint } from '../redux/slices/hintSlice'
import { useDispatch } from 'react-redux'

const ResetPasswordFormStyle = css`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px
    max-width:300px;
    `

const ResetPasswordForm: React.FC = () => {
  const { pathname } = useLocation()
  const id = pathname.substring('/password-reset/'.length)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<{ newPassword: string; confimedPassword: string }>({
    newPassword: '',
    confimedPassword: '',
  })

  //Getting key/value from input to update formDate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  // Send formDate to server
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (arePasswordsMatching(formData.newPassword, formData.confimedPassword)) {
      api.auth.newPassword({
        id: id,
        password: formData.newPassword,
      })
      setFormData({
        newPassword: '',
        confimedPassword: '',
      })
    } else {
      dispatch(setHint({ message: 'Passwords should be the same!' }))
    }
  }
  return (
    <CenteredContainer>
      <GreyContainerBox>
        <div className={ResetPasswordFormStyle}>
          <Title>Set new password</Title>
          <Form action='POST' gap={17} onSubmit={handleSubmit}>
            <SecondaryText opacity={0.5}>Must be at least 8 characters.</SecondaryText>
            <Input
              label='Password'
              name='newPassword'
              type='password'
              value={formData.newPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
            <Input
              label='Confirmed password'
              name='confimedPassword'
              type='password'
              value={formData.confimedPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
            <Button>Reset password</Button>
          </Form>
        </div>
      </GreyContainerBox>
      <ToolTip />
    </CenteredContainer>
  )
}

function arePasswordsMatching(newPassword: string, confirmPassword: string): boolean {
  const trimmedNewPassword = newPassword.trim()
  const trimmedConfirmPassword = confirmPassword.trim()

  return trimmedNewPassword === trimmedConfirmPassword
}

export default ResetPasswordForm
