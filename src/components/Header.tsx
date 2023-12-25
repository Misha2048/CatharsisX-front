import { styled } from "@linaria/react";
import React from "react";
import Logo from "./Logo";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeaderContainer = styled.header`
display: flex;
padding: 30px 63px;
justify-content: space-between;
align-items: center;
background: #000;
@media only screen and (max-width: 1024px){

  }
@media only screen and (max-width: 768px){

  }
@media only screen and (max-width: 320px){

  }
`

const HeaderNavigation = styled.nav`
display: flex;
justify-content: center;
align-items: center;
gap: 35px;

@media only screen and (max-width: 1024px){
    gap:15px;
}
@media only screen and (max-width: 1024px){

}
@media only screen and (max-width: 768px){

}
@media only screen and (max-width: 320px){

`
const HeaderLink = styled.button`
color: #FFF;
font-family: Inter;
background:none;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 19.6px; /* 140% */
transition:all .3s ease;
text-transform:capitalized;
&:hover{
    text-decoration:underline;
}
`
const ButtonsContainer = styled.div`
    display:flex;
    gap:25px;
    flex:0 0 150px;
`
function Header(){
    return (
        <HeaderContainer>
            <Logo></Logo>
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
                <Button>Log in</Button>
                <Button>Sign up</Button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header;