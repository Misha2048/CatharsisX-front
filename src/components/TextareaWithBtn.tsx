import { styled } from '@linaria/react'
import { useCallback } from 'react'

interface Props {
  placeholder: string
  text?: string
  setText: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  height?: string
  maxLength?: number
  buttonText?: string
}

const StyledForm = styled.form<{ height?: string }>`
  position: relative;
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : '128px')};
  width: 100%;
  transition: all 0.3s ease;
`

const StyledTextarea = styled.textarea`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  resize: none;
  border-radius: 10px;
  padding: 20px 148px 20px 20px;
  font-family: 'Inter', sans-serif;
  color: #000;
  font-size: 16px;
  line-height: 1.1;

  &::placeholder {
    color: #000;
    opacity: 50%;
    font-size: 14px;
    line-height: 1;
  }
`

const TextareaBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #3ec290;
  width: 108px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
`

function TextareaWithBtn({
  placeholder,
  text,
  setText,
  onSubmit,
  height,
  maxLength,
  buttonText,
}: Props) {
  const onTextareaChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }, [])

  return (
    <StyledForm onSubmit={onSubmit} height={height}>
      <StyledTextarea
        placeholder={placeholder}
        value={text}
        onChange={onTextareaChange}
        required
        minLength={1}
        maxLength={maxLength}
      />
      <TextareaBtn type='submit'>{buttonText ?? 'Comment'}</TextareaBtn>
    </StyledForm>
  )
}

export default TextareaWithBtn
