import { styled } from '@linaria/react'

import HomeValue from '@components/home/HomeValue'
import bigUserIcon from '@assets/user-icon-60px.svg'
import notesIcon from '@assets/notes-icon-60px.svg'
import penIcon from '@assets/pen-icon-60px.svg'

const StyledAdvantages = styled.section`
  background-color: #282828;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1024px) {
    padding: 64px;
  }
`

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media screen and (min-width: 568px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`

function HomeAdvantages() {
  return (
    <StyledAdvantages>
      <Wrapper>
        <HomeValue iconPath={bigUserIcon} title='Communicate'>
          Learning thrives in a community, and CatharsisX fosters just that. Connect with a network
          of dedicated students like yourself, eager to share their insights and collaborate on
          challenging topics.{' '}
        </HomeValue>
        <HomeValue iconPath={notesIcon} title='Organize'>
          Learning shouldn&apos;t be a monotonous grind. Personalize your experience on CatharsisX
          and make studying a joy. Organize your notes with customizable folders, highlight key
          points with vibrant colors, and even choose a theme that resonates with you.{' '}
        </HomeValue>
        <HomeValue iconPath={penIcon} title='Create'>
          Stay organized and stress-free with our user-friendly shelves. Upload your personal study
          materials, lecture notes, and even favorite online resources, creating a personalized
          knowledge bank accessible anytime, anywhere.{' '}
        </HomeValue>
      </Wrapper>
    </StyledAdvantages>
  )
}

export default HomeAdvantages
