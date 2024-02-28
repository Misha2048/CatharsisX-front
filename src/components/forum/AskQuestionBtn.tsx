import { styled } from '@linaria/react'

const AskQuestionBtn = styled.button`
  background-color: #3ec290;
  border-radius: 8px;
  padding: 16px 20px;
  line-height: 1.25;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    transform: scale(0.98);
  }
  &.disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`

export default AskQuestionBtn
