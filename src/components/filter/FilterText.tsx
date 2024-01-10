import { styled } from '@linaria/react'

interface Props {
  noMargin?: boolean
}

const FilterText = styled.p<Props>`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  letter-spacing: -0.63px;
  margin-bottom: ${(props) => (props.noMargin ? '0px' : '10px')};
`

export default FilterText
