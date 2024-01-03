import React from 'react'
import { styled } from '@linaria/react'

import HomeCustomerReview from '@components/home/HomeCustomerReview'
import customer1 from '@assets/customer-1-small.jpg'
import customer2 from '@assets/customer-2-small.jpeg'
import customer3 from '@assets/customer-3-small.jpeg'

const StyledReviews = styled.section`
  font-family: 'Inter', sans-serif;
  color: #fff;
  background-color: #000;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 64px;
  }
  @media screen and (min-width: 1440px) {
    padding: 60px 64px;
  }
`

const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1312px;
    margin: 0px auto;
  }
`

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.77px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    letter-spacing: -1.12px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 60px;
  }
`

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  & > div:last-child {
    display: block;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    & > div:last-child {
      display: block;
    }
  }
`

function HomeReviews() {
  return (
    <StyledReviews>
      <Wrapper>
        <Title>Customer reviews</Title>
        <ReviewsContainer>
          <HomeCustomerReview photo={customer1} fullName='Mariya Verhovetska'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            deserunt mollit anim id est laborum...
          </HomeCustomerReview>
          <HomeCustomerReview photo={customer2} fullName='Valentyn Tkach'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            deserunt mollit anim id est laborum...
          </HomeCustomerReview>
          <HomeCustomerReview photo={customer3} fullName='Valentyn Romanov'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            deserunt mollit anim id est laborum...
          </HomeCustomerReview>
        </ReviewsContainer>
      </Wrapper>
    </StyledReviews>
  )
}

export default HomeReviews
