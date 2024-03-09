import { styled } from '@linaria/react'

interface Props {
  show: boolean
  zIndex?: number
  noBlur?: boolean
}

const BlackOverlay = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: ${(props) => (props.noBlur ? 'inset' : 'blur(4px)')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 400)};
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`

export default BlackOverlay
