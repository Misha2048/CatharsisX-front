import { styled } from '@linaria/react'

interface Props {
  centered?: boolean
}

const FilterInputsContainer = styled.div<Props>`
  display: flex;
  gap: 16px;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};

  @media screen and (max-width: 374px) {
    gap: 10px;
  }
`

export default FilterInputsContainer
