import { styled } from '@linaria/react'

const MainRegistryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligh-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    & > h1 {
      font-size: 34px;
    }
    & > span {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 90%;
  }

  @media only screen and (max-height: 450px) and (orientation: landscape) {
    width: 50%;
    & > h2 {
      display: none;
    }
  }
`
export default MainRegistryContent
