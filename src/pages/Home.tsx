import { useCallback, useRef } from 'react'

import HomeMainScreen from '@components/home/HomeMainScreen'
import HomeAdvantages from '@components/home/HomeAdvantages'
import HomeReviews from '@components/home/HomeReviews'
import SignUp from '@components/regestration/SignUp'
import HomeSignUpContainer from '@components/home/HomeSignUpContainer'
import Page from '@components/Page'

function Home() {
  const signUpRef = useRef<HTMLElement | null>(null)

  const scrollToSignUp = useCallback(() => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
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
