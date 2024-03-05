import { styled } from '@linaria/react'
import { convertToLocalDate } from '@utils/dateUtil'

interface Props {
  text: string
  date: string
}

const Container = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1;
`

const StyledText = styled.p`
  display: inline-block;
  color: #fff;
  filter: opacity(0.8);
`

const StyledDate = styled.p`
  display: inline-block;
  color: #fff;
`

function TopicBodyDate({ text, date }: Props) {
  return (
    <Container>
      <StyledText>{text}</StyledText> <StyledDate>{convertToLocalDate(date)}</StyledDate>
    </Container>
  )
}

export default TopicBodyDate
