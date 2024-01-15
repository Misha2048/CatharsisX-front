import { styled } from '@linaria/react'

interface Props {
  show: boolean
}

const RegisterUniversityBody = styled.div<Props>`
  width: 300px;
  max-height: calc(100vh - 20px);
  overflow: auto;
  padding: 20px;
  position: fixed;
  top: ${(props) => (props.show ? '50%' : 'calc(50% + 24px)')};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: #4f4f4f;
  border-radius: 16px;
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`

export default RegisterUniversityBody
