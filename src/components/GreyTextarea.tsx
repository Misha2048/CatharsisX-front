import { styled } from '@linaria/react'
import { useCallback } from 'react'

interface Props {
  placeholder: string
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = styled.form`
  background-color: #666666;
  border-radius: 10px;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1;
  }
`

const SubmitBtn = styled.button`
  background-color: #3ec290;
  border-radius: 8px;
  padding: 8px 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 700;
`

function GreyTextarea({ placeholder, text, setText, onSubmit }: Props) {
  const setNewtext = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setText(event.target.value)
  }, [])

  return (
    <Form onSubmit={onSubmit}>
      <StyledInput placeholder={placeholder} value={text} onChange={setNewtext} />
      <SubmitBtn type='submit'>Send</SubmitBtn>
    </Form>
  )
}

export default GreyTextarea
