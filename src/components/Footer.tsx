import { styled } from '@linaria/react'
import CatharsisX from '../assets/CatharsisX.svg'
import chatIcon from '../assets/chatIcon.svg'
import forumIcon from '../assets/forumIcon.svg'
import libraryIcon from '../assets/libraryIcon.svg'
import myMaterialIcon from '../assets/myMaterialsIcon.svg'
import pricingIcon from '../assets/pricingIcon.svg'
import purchasesIcon from '../assets/purchasesIcon.svg'
import { css } from '@linaria/core'
import { useNavigate } from 'react-router-dom'
import DropdownMenu from '@components/DropdownMenu'

const FooterLogoContainer = styled.div`
  cursor: pointer;
`

const FooterContainer = styled.footer`
  display: flex;
  min-height: 310px;
  padding: 97px 299px 87px 165px;
  gap: 222px;
  justify-content: center;
  align-items: center;
  background: #000;
  @media only screen and (max-width: 1024px) {
    display: flex;
    padding: 87px 216px 87px 97px;
    gap: 112px;
  }
  @media only screen and (max-width: 768px) {
    gap: 75px;
    padding: 87px 109px 87px 69px;
  }
  @media only screen and (max-width: 552px) {
    flex-direction: column;
    padding: 40px;
    gap: 14px;
    align-items: center;
    justify-content: center;
  }
`
const FooterNavigation = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 333px;

  @media only screen and (max-width: 1024px) {
    gap: 178px;
  }
  @media only screen and (max-width: 768px) {
    gap: 85px;
  }
  @media only screen and (max-width: 552px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`
const FooterNavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;

  @media only screen and (max-width: 552px) {
    display: contents;
    gap: 12px;
  }
`
const FooterNavLink = styled.div`
  color: #fff;
  display: flex;
  gap: 7px;
  align-items: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 110% */
  letter-spacing: -0.7px;
  white-space: nowrap;
  cursor: pointer;
`
const FooterLogo = css`
  width: 150px;
  align-self: flex-start;
  @media only screen and (max-width: 552px) {
    align-self: center;
  }
`

function Footer() {
  const navigator = useNavigate()
  return (
    <FooterContainer>
      <FooterLogoContainer onClick={() => navigator('/')}>
        <img src={CatharsisX} alt='CatharsisX Logo' className={FooterLogo} />
      </FooterLogoContainer>
      <FooterNavigation style={{ color: '#fff' }}>
        <FooterNavigationColumn>
          <DropdownMenu isFooterMenu>
            <FooterNavLink onClick={() => navigator('/')}>
              <img src={myMaterialIcon} alt='My materials icon' />
              <span>My materials</span>
            </FooterNavLink>
          </DropdownMenu>
          <FooterNavLink onClick={() => navigator('/library')}>
            <img src={libraryIcon} alt='Library icon' />
            Library
          </FooterNavLink>
          <FooterNavLink onClick={() => navigator('/forum')}>
            <img src={forumIcon} alt='Forum icon' />
            Forum
          </FooterNavLink>
        </FooterNavigationColumn>
        <FooterNavigationColumn>
          <FooterNavLink onClick={() => navigator('/purchases')}>
            <img src={purchasesIcon} alt='Purchases icon' />
            Purchases
          </FooterNavLink>
          <FooterNavLink onClick={() => navigator('/price')}>
            <img src={pricingIcon} alt='Pricing icon' />
            Price
          </FooterNavLink>
          <FooterNavLink onClick={() => navigator('/chat')}>
            <img src={chatIcon} alt='Chat icon' />
            Chat
          </FooterNavLink>
        </FooterNavigationColumn>
      </FooterNavigation>
    </FooterContainer>
  )
}

export default Footer
