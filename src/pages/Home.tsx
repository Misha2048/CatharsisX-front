import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

import HomeMainScreen from '@components/home/HomeMainScreen'
import HomeAdvantages from '@components/home/HomeAdvantages'
import HomeReviews from '@components/home/HomeReviews'
import SignUp from '@components/regestration/SignUp'
import HomeSignUpContainer from '@components/home/HomeSignUpContainer'
import Page from '@components/Page'
import Spinner from '@components/Spinner'
import { checkUserIsLoggedIn } from '@helpers/userHelper'

function Home() {
  const signUpRef = useRef<HTMLElement | null>(null)
  const [isShowSpinner, setIsShowSpinner] = useState(true)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const scrollToSignUp = useCallback(() => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    checkUserIsLoggedIn(setIsUserLoggedIn)
    setIsShowSpinner(false)
  }, [])

  return isShowSpinner ? (
    <Spinner />
  ) : isUserLoggedIn ? (
    <Navigate to='/library' />
  ) : (
    <Page hasHeader hasFooter>
      <main>
        <HomeMainScreen onButtonClick={scrollToSignUp} />
        <HomeAdvantages />
        <HomeReviews />
        <HomeSignUpContainer ref={signUpRef}>
          <SignUp />
        </HomeSignUpContainer>
      </main>
    </Page>
  )
}

export default Home
