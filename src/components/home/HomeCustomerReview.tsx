import { PropsWithChildren } from 'react'
import { styled } from '@linaria/react'

interface Props extends PropsWithChildren {
  photo: string
  fullName: string
}

const StyledCustomerReview = styled.div`
  font-family: 'Inter', sans-serif;
  color: #fff;
  max-width: 417px;

  @media screen and (min-width: 768px) {
    flex: 1 1 417px;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center top;
  border-radius: 20px 20px 0 0;
`

const TextContainer = styled.div`
  background-color: #3ec290;
  padding: 16px;
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 375px) {
    padding: 20px;
  }
`

const FullName = styled.h3`
  font-size: 16px;
  letter-spacing: -0.56px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 1.1;
`

function HomeCustomerReview({ photo, fullName, children }: Props) {
  return (
    <StyledCustomerReview>
      <Photo src={photo} alt='' />
      <TextContainer>
        <FullName>{fullName}</FullName>
        <Text>{children}</Text>
      </TextContainer>
    </StyledCustomerReview>
  )
}

export default HomeCustomerReview
