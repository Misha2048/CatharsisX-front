import React from 'react'
import { styled } from '@linaria/react'
import { greyColor } from './../colors'
import bgImage from '@assets/main-screen-bg.jpg'
import FullscreenUnderHeader from '@components/FullscreenUnderHeader'

interface Props {
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledMainScreen = styled(FullscreenUnderHeader)`
  font-family: 'Inter', sans-serif;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px 64px 60px 64px;
  }
  @media screen and (min-width: 1024px) and (orientation: portrait) {
    padding: 40px 64px;
    min-height: 50vh;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 110px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media screen and (min-height: 768px) {
    gap: 60px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    width: 1312px;
  }
`

const TextColumn = styled.div`
  max-width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  order: 2;

  @media screen and (min-width: 375px) and (min-height: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1024px) {
    order: 1;
    max-width: 356px;
    align-items: flex-start;
    align-self: flex-start;
  }
  @media screen and (min-width: 1300px) {
    max-width: 456px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 456px;
    max-height: 438px;
    padding-bottom: 76px;
  }
`

const ImageColumn = styled.div`
  display: none;
  background: url(${bgImage}) center/cover no-repeat;
  width: 100%;
  padding-bottom: 68.438%;
  order: 1;

  @media screen and (min-width: 360px) and (min-height: 667px) and (orientation: portrait) {
    display: block;
  }
  @media screen and (min-height: 768px) and (min-width: 769px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    order: 1;
    width: 55%;
    padding-bottom: 46%;
  }
  @media screen and (min-width: 1300px) {
    padding-bottom: 0;
    height: 514px;
  }
  @media screen and (min-width: 1440px) {
    width: 753px;
    height: 514px;
  }
`

const Heading = styled.h1`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (min-width: 375px) and (min-height: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 568px) and (orientation: landscape) {
    font-size: 26px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1300px) {
    font-size: 52px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 56px;
  }
`

const Text = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
`

const MainScreenBtn = styled.button`
  width: 170px;
  height: 56px;
  line-height: 56px;
  border-radius: 8px;
  background-color: #3ec290;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  margin: 0px auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &.disabled {
    background-color: ${greyColor};
    cursor: not-allowed;
  }
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`

function HomeMainScreen({ onButtonClick }: Props) {
  return (
    <section>
      <StyledMainScreen>
        <Wrapper>
          <TextColumn>
            <Heading>From burden to bond. Store, share, connect with CatharsisX.</Heading>
            <Text>
              Store data, ask people, and get answers all in the browser — with CatharsisX.
            </Text>
            <MainScreenBtn onClick={onButtonClick}>Try for free</MainScreenBtn>
          </TextColumn>
          <ImageColumn />
        </Wrapper>
      </StyledMainScreen>
    </section>
  )
}

export default HomeMainScreen
