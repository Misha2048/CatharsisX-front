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



  @media only screen and (max-width: 680px) and (orientation:portrait){    
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
      font-size:14px;
    }
  }

  @media only screen and (max-height: 450px) and (orientation:landscape){    
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


  @media only screen and (max-width: 550px) and (orientation:portrait){    
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


  @media only screen and (max-height: 370px) and (orientation:landscape){    
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