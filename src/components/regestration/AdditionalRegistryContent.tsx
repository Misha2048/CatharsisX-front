import { styled } from "@linaria/react"

const AdditionalRegistryContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  @media only screen and (max-width: 768px){
    & > h1{
      font-size:34px
    }
    & > span{
      font-size:12px
    }
  }


  @media only screen and (max-width: 450px){
    
    & > h1{
      display: none;
    }
    & > img{
      align-self:center;
    }
    & > span{
      position:absolute;
      bottom:0px;
      align-self:center;
    }
  }

  
`
export default AdditionalRegistryContent;