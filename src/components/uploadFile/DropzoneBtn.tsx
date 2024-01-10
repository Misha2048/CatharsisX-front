import { styled } from '@linaria/react'

const DropzoneBtn = styled.button`
  padding: 8px 24px;
  border-radius: 20px;
  background-color: #3ec290;
  box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Inter', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 1;

  &:active {
    position: relative;
    top: 3px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);
  }
`

export default DropzoneBtn
