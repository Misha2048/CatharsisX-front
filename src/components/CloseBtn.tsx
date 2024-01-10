import { styled } from '@linaria/react'

import closeIcon from '@assets/close-icon_512px.png'

interface Props {
  size?: 'small'
}

const CloseBtn = styled.button<Props>`
  background: url(${closeIcon}) center/contain no-repeat;
  flex: ${(props) => (props.size === 'small' ? '0 0 20px' : '0 0 24px')};
  width: ${(props) => (props.size === 'small' ? '20px' : '24px')};
  height: ${(props) => (props.size === 'small' ? '20px' : '24px')};
`

export default CloseBtn
