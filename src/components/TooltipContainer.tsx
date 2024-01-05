import { styled } from '@linaria/react'

interface Props {
  show: boolean
}

const TooltipContainer = styled.div<Props>`
  position: fixed;
  bottom: 16px;
  z-index: 10;
  background-color: #3ec290;
  width: 300px;
  max-height: calc(100vh - 32px);
  overflow: auto;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 0px 8px;
  transition: all 0.3s ease 0s;
  right: ${(props) => (props.show ? '10px' : '-100%')};

  @media (min-width: 375px) {
    right: ${(props) => (props.show ? '16px' : '-100%')};
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`

export default TooltipContainer
