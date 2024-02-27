import { styled } from '@linaria/react'

const HeadingContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 424px) {
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    gap: 30px;
  }
`

export default HeadingContainer
