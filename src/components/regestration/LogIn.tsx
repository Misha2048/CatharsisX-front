import React, { useState } from 'react'
import Form from '../Form'
import Input from '../Input'
import Button from '../Button'
import GreyContainerBox from '../GreyContainerBox'
import CenteredContainer from '../CenteredContainer'
import Link from '../Link'
import Logo from '../Logo'
import MainRegistryContent from './MainRegistryContent'
import SecondaryText from '../SecondaryText'
import { Title, DisplayTitle } from '../Titles'
import AdditionalRegistryContent from './AdditionalRegistryContent'
import { api } from '../../api'
import { ILoginRequest } from '../../api/intefaces'
import ToolTip from '../ToolTip'
import { useNavigate } from 'react-router-dom'

function LogIn() {
  const navigator = useNavigate()

  //Referencing to ILoginRequest interface
  const [formDate, setFormDate] = useState<ILoginRequest>({
    email: '',
    password: '',
  })

  //Getting key/value from input to update formDate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormDate((previousData) => ({ ...previousData, [name]: value }))
  }

  // Send formDate to server
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    api.auth.login(formDate).then((data) => {
      console.log(data)

      setFormDate({
        email: '',
        password: '',
      })
      navigator('/')
    })
  }

  return (
    <CenteredContainer>
      <GreyContainerBox>
        <AdditionalRegistryContent>
          <Logo />
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SecondaryText>
            Don’t have an accout? <Link to='/signup'>Sign up</Link>
          </SecondaryText>
        </AdditionalRegistryContent>
        <MainRegistryContent>
          <Title>Log in</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              label='Email'
              name='email'
              type='email'
              value={formDate.email}
              onChange={handleChange}
              required
            />
            <Input
              label='Password'
              name='password'
              type='password'
              value={formDate.password}
              onChange={handleChange}
              minLength={8}
              required
            />
            <Link to='/forgot-password'>Forgot your password?</Link>
            <Button>Log in</Button>
          </Form>
        </MainRegistryContent>
      </GreyContainerBox>
      <ToolTip />
    </CenteredContainer>
  )
}

export default LogIn
