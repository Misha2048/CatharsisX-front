import { styled } from '@linaria/react'

const FilterButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  margin-left: 32px;

  @media screen and (max-width: 374px) {
    margin-left: 24px;
  }
`

export default FilterButtonsRow
