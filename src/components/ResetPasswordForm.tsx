import React, { useCallback, useState } from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'
import GreyContainerBox from './GreyContainerBox'
import CenteredContainer from './CenteredContainer'
import SecondaryText from './SecondaryText'
import { Title } from './Titles'
import { css } from '@linaria/core'
import { api } from '../api'
import { useLocation, useNavigate } from 'react-router-dom'
import ToolTip from './ToolTip'
import { setHint } from '../redux/slices/hintSlice'
import { useDispatch } from 'react-redux'
import PassportValidator from '@helpers/PasswordValidator'

const ResetPasswordFormStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 300px;
`

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const id = pathname.substring('/password-reset/'.length)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<{ newPassword: string; confimedPassword: string }>({
    newPassword: '',
    confimedPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handleSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!(formData.newPassword === formData.confimedPassword)) {
        return dispatch(setHint({ message: 'Passwords should be the same' }))
      }

      if (!PassportValidator.validatePassword(formData.newPassword)) {
        const errors = PassportValidator.getPasswordValidationErrors(formData.newPassword)
        return dispatch(setHint({ message: errors.join('\n') }))
      }

      const resp = await api.auth.newPassword({ id, password: formData.newPassword })
      if (!resp.error) {
        setFormData({ newPassword: '', confimedPassword: '' })
        navigate('/library')
        setTimeout(() => {
          dispatch(setHint({ message: 'Password changed successfully!' }))
        }, 100)
      } else {
        dispatch(setHint({ message: resp.message }))
      }
    },
    [formData],
  )
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

export default ResetPasswordForm
