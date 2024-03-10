import { styled } from '@linaria/react'

const TextArea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  min-height: 102px;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.1;
  transition: all 0.3s ease-out;

  &::placeholder {
    color: #000;
    opacity: 70%;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.1;
  }
`

export default TextArea
