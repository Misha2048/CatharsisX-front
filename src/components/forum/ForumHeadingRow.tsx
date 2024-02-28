import { styled } from '@linaria/react'

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 424px) {
    flex-direction: column;
    gap: 20px;
  }
`

export default FlexRow
