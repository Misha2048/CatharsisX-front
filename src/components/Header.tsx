import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Logo from '@components/Logo'
import SearchField from '@components/SearchField'
import Button from '@components/Button'
import BurgerIcon from '@components/BurgerIcon'
import OutlinedButton from '@components/OutlinedButton'
import HeaderLink from '@components/HeaderLink'
import DropdownMenu from '@components/DropdownMenu'

const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media only screen and (max-height: 360px) {
    gap: 8px;
  }
`
const HeaderLogoContainer = styled.div`
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 0 0 140px;
  @media only screen and (max-height: 360px) {
    gap: 5px;
  }
`
const BurgerMenuContainer = styled.div<{ open: boolean }>`
  &[open] {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
    width: 200px;
    max-height: 100vh;
    ${HeaderNavigation} {
      height: 65%;
      flex-direction: column;
      justify-content: space-between;
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
  min-height: 100px;
  padding: 26px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  /* overflow-x: hidden; */

  &[open] {
    overflow-y: scroll;
    width: 100%;
    height: 100svh;
    position: fixed;
    left: 0;
    top: 0;
    justify-content: center;
    z-index: 1000;
    & > ${HeaderLogoContainer} {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 26px 15px;
  }
  @media only screen and (max-width: 820px) {
    min-height: 80px;
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

  const handleRedirect = useCallback(
    (path: string, event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      setIsOpen(false)
      navigate(path)
      if (path !== '/login' && path !== '/signup') {
        document.body.classList.remove('_lock')
      }
    },
    [navigate],
  )

  return (
    <>
      <BackgroundContainer>
        <MaxWidthContainer>
          <HeaderContainer open={isOpen}>
            <HeaderLogoContainer onClick={(event) => handleRedirect('/', event)}>
              <Logo></Logo>
            </HeaderLogoContainer>
            <BurgerMenuContainer open={isOpen}>
              <SearchField></SearchField>
              <HeaderNavigation>
                <HeaderLink onClick={(event) => handleRedirect('/forum', event)}>Forum</HeaderLink>
                <HeaderLink onClick={(event) => handleRedirect('/library', event)}>
                  Library
                </HeaderLink>
                <DropdownMenu setBurgerIsOpen={setIsOpen}>My Materials</DropdownMenu>
                <HeaderLink onClick={(event) => handleRedirect('/purchases', event)}>
                  Purchases
                </HeaderLink>
                <HeaderLink onClick={(event) => handleRedirect('/price', event)}>Price</HeaderLink>
                <HeaderLink onClick={(event) => handleRedirect('/chat', event)}>Chat</HeaderLink>
              </HeaderNavigation>
              {!localStorage.getItem('accessToken') && (
                <ButtonsContainer>
                  <Button onClick={(event) => handleRedirect('/login', event)}>Log in</Button>
                  <OutlinedButton onClick={(event) => handleRedirect('/signup', event)}>
                    Sign up
                  </OutlinedButton>
                </ButtonsContainer>
              )}
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
