import { styled } from '@linaria/react'

const UploadFileText = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  width: 220px;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 260px;
  }
`

export default UploadFileText
