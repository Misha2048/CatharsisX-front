import { styled } from '@linaria/react'

const ForumFilter = styled.ul`
  border: 1px solid #fff;
  border-radius: 5px;
  align-self: flex-end;
  display: flex;

  @media screen and (max-width: 767px) {
    align-self: center;
  }
`

export default ForumFilter
