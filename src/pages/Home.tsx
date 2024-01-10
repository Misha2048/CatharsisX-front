import React, { useCallback, useRef } from 'react'

import HomeMainScreen from '@components/home/HomeMainScreen'
import HomeAdvantages from '@components/home/HomeAdvantages'
import HomeReviews from '@components/home/HomeReviews'
import SignUp from '@components/regestration/SignUp'
import HomeSignUpContainer from '@components/home/HomeSignUpContainer'
import Footer from '@components/Footer'

function Home() {
  const signUpRef = useRef<HTMLElement | null>(null)

  const scrollToSignUp = useCallback(() => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <main>
      <HomeMainScreen onButtonClick={scrollToSignUp} />
      <HomeAdvantages />
      <HomeReviews />
      <HomeSignUpContainer ref={signUpRef}>
        <SignUp />
      </HomeSignUpContainer>
      <Footer />
    </main>
  )
}

export default Home
