import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import CustomRouter from './helpers/customRouter/CustomRouter'
import history from './helpers/customRouter/history'
import { GlobalStyles } from './components/GlobalStyles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MuiDarkMode from '@components/MuiDarkMode'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRouter history={history}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDarkMode>
            <GlobalStyles>
              <App />
            </GlobalStyles>
          </MuiDarkMode>
        </LocalizationProvider>
      </CustomRouter>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
