import { styled } from '@linaria/react'

interface Props {
  show: boolean
}

const ModalBody = styled.div<Props>`
  width: 300px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default ModalBody
