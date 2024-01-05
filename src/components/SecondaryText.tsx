import { styled } from '@linaria/react'

interface SecondaryTextProps {
  color?: string
  opacity?: number
}

const SecondaryText = styled.span<SecondaryTextProps>`
  color: ${(props) => props.color || '#FFF'};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 19.6px; /* 140% */
  opacity: ${(props) => props.opacity || 1};
`
export default SecondaryText
