import { styled } from '@linaria/react'

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

  @media only screen and (max-width: 820px) {
    font-size: 24px;
  }
`

export default HeaderLink
