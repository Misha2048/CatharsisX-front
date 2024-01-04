import { ThemeProvider, createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function MuiDarkMode({ children }: PropsWithChildren) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}
