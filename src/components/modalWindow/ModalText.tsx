import { styled } from '@linaria/react'

interface Props {
  bold?: boolean
}

const ModalText = styled.p<Props>`
  max-width: 240px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 1.4;
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  overflow-wrap: break-word;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 300px;
  }
`

export default ModalText
