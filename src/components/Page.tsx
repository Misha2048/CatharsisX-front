import { PropsWithChildren } from 'react'
import { styled } from '@linaria/react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ToolTip from '@components/ToolTip'

interface Props extends PropsWithChildren {
  hasHeader?: boolean
  hasFooter?: boolean
  hasTooltip?: boolean
}

const StyledPage = styled.div`
  overflow: hidden;
`

function Page({ hasHeader, children, hasFooter, hasTooltip }: Props) {
  return (
    <StyledPage>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
      {hasTooltip && <ToolTip />}
    </StyledPage>
  )
}

export default Page
