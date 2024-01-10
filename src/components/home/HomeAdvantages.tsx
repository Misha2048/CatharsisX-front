import React from 'react'
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
  align-items: center;
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
          Lorem ipsum dolor sit amet consectetur adipiscing elit a quam dapibus rutrum suscipit, di.
        </HomeValue>
        <HomeValue iconPath={notesIcon} title='Organize'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit a quam dapibus rutrum suscipit, di.
        </HomeValue>
        <HomeValue iconPath={penIcon} title='Create'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit a quam dapibus rutrum suscipit, di.
        </HomeValue>
      </Wrapper>
    </StyledAdvantages>
  )
}

export default HomeAdvantages
