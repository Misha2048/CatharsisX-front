import { styled } from '@linaria/react'

const DropzoneSmallText = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  padding-top: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

export default DropzoneSmallText
