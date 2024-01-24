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

function SignUp() {
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

  //Getting key/value from input to update formDate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name !== undefined) {
      setFormDate((previousData) => ({ ...previousData, [name]: value }))
    }
  }

  // Send formDate to server
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (nameExists(universities, formDate.university_id)) {
      const uniID = getIdByName(universities, formDate.university_id)
      formDate.university_id = uniID

      api.auth.signUp(formDate).then((data) => {
        console.log(data)
        setFormDate({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          university_id: '',
        })
        location.reload()
      })
    }
  }

  return (
    <CenteredContainer>
      <GreyContainerBox>
        <AdditionalRegistryContent>
          <Logo />
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
