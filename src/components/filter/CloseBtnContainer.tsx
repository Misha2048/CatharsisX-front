import { styled } from '@linaria/react'

interface Props {
  size?: 'small'
}

const CloseBtnContainer = styled.div<Props>`
  position: absolute;
  top: 20px;
  right: 20px;
  width: ${(props) => (props.size === 'small' ? '20px' : '24px')};
  height: ${(props) => (props.size === 'small' ? '20px' : '24px')};
  button {
    width: 100%;
    height: 100%;
  }
`

export default CloseBtnContainer
