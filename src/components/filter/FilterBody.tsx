import { styled } from '@linaria/react'

interface Props {
  show: boolean
}

const FilterBody = styled.div<Props>`
  max-height: calc(100vh - 20px);
  max-width: calc(100vw - 20px);
  overflow: auto;
  padding: 20px 20px 24px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: #333;
  border-radius: 16px;
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};

  @media screen and (max-width: 374px) and (orientation: portrait) {
    padding: 20px 10px;
  }
  @media screen and (max-height: 375px) and (orientation: landscape) {
    padding: 20px 20px 15px 20px;
  }
`

export default FilterBody
