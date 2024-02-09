import { PropsWithChildren } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ToolTip from '@components/ToolTip'

interface Props extends PropsWithChildren {
  hasHeader?: boolean
  hasFooter?: boolean
  hasTooltip?: boolean
}

function Page({ hasHeader, children, hasFooter, hasTooltip }: Props) {
  return (
    <div>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
      {hasTooltip && <ToolTip />}
    </div>
  )
}

export default Page
