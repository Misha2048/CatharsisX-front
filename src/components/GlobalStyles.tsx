import { styled } from '@linaria/react'
import { PropsWithChildren } from 'react'

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

  /*---------------------------*/
  /* Reseting default styles: */
  *{padding: 0;margin: 0;border: 0;}
  *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{width:100%;height:100%;font-size:100%;line-height:1;-ms-text-size-adjust:100%;
      -moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul, ol, li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}

  #root{width:100%;height:100vh;}
  /*------------------------------------------------------*/

  body {
    font-family: 'Inter', sans-serif;
    background-color: #000;
  }

  body._lock{overflow: hidden;}

  .global-styles {width:100%;height:100%;}
`

const StyledContainer = styled.div`
  :global() {
    ${styles}
  }
`

export function GlobalStyles({ children }: PropsWithChildren) {
  return <StyledContainer className='global-styles'>{children}</StyledContainer>
}
