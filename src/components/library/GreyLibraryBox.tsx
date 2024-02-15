import { styled } from '@linaria/react'

const GreyLibraryBox = styled.div`
  min-height: 100%;
  background-color: #333;
  padding: 50px 0px;
  flex: 1 1 auto;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 600px) {
    padding: 50px 20px;
  }
  @media only screen and (min-width: 1024px) {
    gap: 30px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 50px;
  }
`

export default GreyLibraryBox
