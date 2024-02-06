import { PropsWithChildren } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

interface Props extends PropsWithChildren {
  hasHeader?: boolean
  hasFooter?: boolean
}

function Page({ hasHeader, children, hasFooter }: Props) {
  return (
    <div>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  )
}

export default Page
