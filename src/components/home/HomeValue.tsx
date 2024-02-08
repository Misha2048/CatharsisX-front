import { PropsWithChildren } from 'react'
import { styled } from '@linaria/react'

interface Props extends PropsWithChildren {
  iconPath: string
  title: string
}

const StyledHomeValue = styled.div`
  font-family: 'Inter', sans-serif;
  width: 223px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 550px) {
    font-size: 24px;
  }
`

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 172.5%;
  letter-spacing: -0.21px;

  @media only screen and (max-width: 550px) {
    font-size: 18px;
  }
`

function HomeValue({ iconPath, title, children }: Props) {
  return (
    <StyledHomeValue>
      <Icon src={iconPath} alt="user's photo" />
      <Title>{title}</Title>
      <Text>{children}</Text>
    </StyledHomeValue>
  )
}

export default HomeValue
