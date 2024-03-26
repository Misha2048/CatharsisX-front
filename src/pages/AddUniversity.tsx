import { styled } from '@linaria/react'
import FullscreenUnderHeader from '@components/FullscreenUnderHeader'
import AddUniversityHeading from '@components/registerUniversity/AddUniversityHeading'
import TextareaWithBtn from '@components/TextareaWithBtn'
import { useState } from 'react'
import { api } from '@api/index'
import { useNavigate } from 'react-router-dom'

const BackgroundContainer = styled(FullscreenUnderHeader)`
  background-color: #282828;
  display: flex;
  height: 100dvh;
  justify-content: center;
  align-items: space-around;
`
const AddUniversityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(30px, 5vh);
  width: max(50%, 350px);
  height: max(50%, auto);
  overflow: auto;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: #4f4f4f;
  border-radius: 16px;
  transition: all 0.3s;
`

function AddUniversity() {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  async function addUni(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await api.mail.newUniversityLetter({ name: text })
    navigate('/signup')
  }

  return (
    <BackgroundContainer>
      <AddUniversityWrapper>
        <AddUniversityHeading>Add your university</AddUniversityHeading>
        <TextareaWithBtn
          placeholder='Enter your university'
          text={text}
          onSubmit={addUni}
          setText={setText}
          buttonText={'Send'}
          maxLength={100}
          height={'100px'}
        ></TextareaWithBtn>
      </AddUniversityWrapper>
    </BackgroundContainer>
  )
}

export default AddUniversity
