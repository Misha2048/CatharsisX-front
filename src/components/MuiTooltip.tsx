import { Tooltip } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
  text: string
  children: ReactElement
}

function MuiTooltip({ children, text }: Props) {
  return (
    <Tooltip
      title={text}
      placement='top'
      enterTouchDelay={0}
      leaveTouchDelay={1500}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -2],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  )
}
export default MuiTooltip
