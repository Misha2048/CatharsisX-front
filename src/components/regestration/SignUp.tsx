/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import CenteredContainer from '../CenteredContainer'
import GreyContainerBox from '../GreyContainerBox'
import Link from '../Link'
import SecondaryText from '../SecondaryText'
import MainRegistryContent from './MainRegistryContent'
import Form from '../Form'
import { Title, DisplayTitle } from '../Titles'
import AdditionalRegistryContent from './AdditionalRegistryContent'
import Logo from '../Logo'
import { api } from '../../api'
import { ISignUpRequest, IUniversity } from '../../api/intefaces'
import ToolTip from '../ToolTip'
import AutoComplete from '@components/AutoComplete'
import { setHint } from '../../redux/slices/hintSlice'
import { useDispatch } from 'react-redux'
import PassportValidator from '@helpers/PasswordValidator'
import { useNavigate } from 'react-router-dom'
import RedirectHomeContainer from '@components/RedirectHomeContainer'

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [universities, setUniversities] = useState<IUniversity[]>([])
  const [formDate, setFormDate] = useState<ISignUpRequest>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    university_id: '',
  })

  useEffect(() => {
    const universitiesList = () => {
      api.universities.getUniversities().then((data) => {
        setUniversities(data)
      })
    }
    universitiesList()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name !== undefined) {
      setFormDate((previousData) => ({ ...previousData, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!PassportValidator.validatePassword(formDate.password)) {
      const errors = PassportValidator.getPasswordValidationErrors(formDate.password)
      dispatch(setHint({ message: errors.join('\n') }))
      return
    }

    if (!nameExists(universities, formDate.university_id)) {
      dispatch(setHint({ message: 'There is no such university in our list.' }))
      return
    } else {
      const uniID = getIdByName(universities, formDate.university_id)
      formDate.university_id = uniID
    }

    await api.auth.signUp(formDate)
    setFormDate({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      university_id: '',
    })
    navigate('/check-email')
  }

  return (
    <CenteredContainer>
      <GreyContainerBox>
        <AdditionalRegistryContent>
          <RedirectHomeContainer navigate={navigate}>
            <Logo />
          </RedirectHomeContainer>
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SecondaryText>
            Already have an account? <Link to='/login'>Log in</Link>
          </SecondaryText>
        </AdditionalRegistryContent>
        <MainRegistryContent>
          <Title>Get Started</Title>
          <Form action='POST' onSubmit={handleSubmit}>
            <Input
              label='Firstname'
              name='first_name'
              type='text'
              value={formDate.first_name}
              onChange={handleChange}
              required
            />
            <Input
              label='Lastname'
              name='last_name'
              type='text'
              value={formDate.last_name}
              onChange={handleChange}
              required
            />
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
            <AutoComplete
              options={universities.map((uni) => uni.name)}
              value={formDate.university_id}
              label='University'
              name='university_id'
              type='text'
              onChange={handleChange}
              required
            ></AutoComplete>
            <Link to={'/add-university'}>Don&apos;t find your university?</Link>
            <Button>Sign up</Button>
          </Form>
        </MainRegistryContent>
      </GreyContainerBox>
      <ToolTip />
    </CenteredContainer>
  )
}

export default SignUp

function getIdByName(data: Array<IUniversity>, name: string) {
  return data.find((item) => item.name === name)?.id || ''
}

function nameExists(data: Array<IUniversity>, name: string) {
  return data.some((item) => item.name === name)
}
