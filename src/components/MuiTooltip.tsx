import { Tooltip } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
  title: string
  children: ReactElement
}

function MuiTooltip({ children, title }: Props) {
  return (
    <Tooltip
      title={title}
      placement='top'
      enterDelay={0}
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
