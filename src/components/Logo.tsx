import { css } from '@linaria/core'
import CatharsisX from '../assets/CatharsisX.svg'

const logo = css`
  max-width: 120px;

  @media only screen and (max-height: 450px) and (orientation: landscape) {
    max-width: none;
  }

  @media only screen and (max-width: 450px) and (orientation: portrait) {
    width: 150px;
  }
`

function Logo() {
  return <img src={CatharsisX} alt='CatharsisX Logo' className={logo} />
}

export default Logo
