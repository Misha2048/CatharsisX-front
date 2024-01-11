import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Logo from './Logo'
import SearchField from './SearchField'
import Button from './Button'
import BurgerIcon from './BurgerIcon'
import OutlinedButton from './OutlinedButton'

const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }
`
const HeaderLink = styled.button`
  color: #fff;
  font-family: Inter;
  background: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px; /* 140% */
  transition: all 0.3s ease;
  text-transform: capitalized;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 0 0 140px;
`
const BurgerMenuContainer = styled.div<{ open: boolean }>`
  display: contents;

  &[open] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 200px;
    height: 100vh;
    ${HeaderNavigation} {
      flex-direction: column;
    }
    ${ButtonsContainer} {
      width: 100%;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 820px) {
    display: none;
  }
  @media only screen and (min-width: 821px) {
    display: ${(props) => (props.open ? 'flex' : 'contents')};
  }
`

const BackgroundContainer = styled.div`
  background-color: #000;
`

const MaxWidthContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`

const HeaderContainer = styled.header<{ open: boolean }>`
  display: flex;
  gap: 10px;
  padding: 30px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  overflow-x: hidden;

  &[open] {
    width: 100%;
    position: fixed;
    justify-content: center;

    & > img {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
`
const HeaderBurger = styled.div<{ open: boolean }>`
  display: none;
  &[open] {
    position: absolute;
    top: 30px;
    right: 15px;
  }
  @media only screen and (max-width: 820px) {
    display: block;
  }
  @media only screen and (min-width: 821px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const redirectToLogin = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/login')
  }, [])

  const redirectToSignup = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/signup')
  }, [])

  return (
    <>
      <BackgroundContainer>
        <MaxWidthContainer>
          <HeaderContainer open={isOpen}>
            <Logo></Logo>
            <BurgerMenuContainer open={isOpen}>
              <SearchField></SearchField>
              <HeaderNavigation>
                <HeaderLink>Forum</HeaderLink>
                <HeaderLink>Library</HeaderLink>
                <HeaderLink>My Materials</HeaderLink>
                <HeaderLink>Purchases</HeaderLink>
                <HeaderLink>Price</HeaderLink>
                <HeaderLink>Chat</HeaderLink>
              </HeaderNavigation>
              <ButtonsContainer>
                <Button onClick={redirectToLogin}>Log in</Button>
                <OutlinedButton onClick={redirectToSignup}>Sign up</OutlinedButton>
              </ButtonsContainer>
            </BurgerMenuContainer>
            <HeaderBurger open={isOpen}>
              <BurgerIcon open={isOpen} setOpen={setIsOpen} />
            </HeaderBurger>
          </HeaderContainer>
        </MaxWidthContainer>
      </BackgroundContainer>
      <Outlet />
    </>
  )
}

export default Header
