import { styled } from '@linaria/react'

import MuiTooltip from '@components/MuiTooltip'

interface Props {
  text: string
}

const StyledHeading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 24px;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`

function StillageHeading({ text }: Props) {
  return text.length > 30 ? (
    <MuiTooltip text={text}>
      <StyledHeading>{`${text.substring(0, 28)}...`}</StyledHeading>
    </MuiTooltip>
  ) : (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default StillageHeading
