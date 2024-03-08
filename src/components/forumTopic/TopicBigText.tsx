import { styled } from '@linaria/react'

const TopicBigText = styled.p`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1;
  letter-spacing: -0.01em;

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`

export default TopicBigText
