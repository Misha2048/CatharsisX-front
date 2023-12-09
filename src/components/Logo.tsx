import React from "react";
import { css } from "@linaria/core";
import CatharsisX from '../img/CatharsisX.svg'

const logo = css`
max-width:120px;
`

function Logo(){
    return <img src={CatharsisX} alt="CatharsisX Logo"className={logo} />
}

export default Logo;
