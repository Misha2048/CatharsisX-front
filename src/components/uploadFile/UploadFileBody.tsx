import { styled } from '@linaria/react'

interface Props {
  show: boolean
}

const UploadFileBody = styled.div<Props>`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 40px);
  overflow: auto;
  padding: 20px;
  background-color: #333;
  border-radius: 16px;
  position: fixed;
  top: ${(props) => (props.show ? '50%' : 'calc(50% + 12px)')};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`

export default UploadFileBody
