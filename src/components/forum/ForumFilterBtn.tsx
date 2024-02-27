import { styled } from '@linaria/react'

interface Props {
  isActive: boolean
}

const ForumFilterBtn = styled.li<Props>`
  background-color: ${(props) => (props.isActive ? '#3ec290' : '#000')};
  padding: 15px;
  line-height: 1;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #fff;
  border-right: 1px solid #fff;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-right: none;
    border-radius: 0 5px 5px 0;
  }

  @media screen and (max-width: 374px) {
    padding: 15px 8px;
  }
`

export default ForumFilterBtn
