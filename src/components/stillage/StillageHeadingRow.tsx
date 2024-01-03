import { styled } from '@linaria/react'

const StillageHeadingRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export default StillageHeadingRow
