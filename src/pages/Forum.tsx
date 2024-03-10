import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import ForumHeadingRow from '@components/forum/ForumHeadingRow'
import Page from '@components/Page'
import AskQuestion from '@components/forum/AskQuestion'
import ForumBackground from '@components/forum/ForumBackground'
import ForumFilter from '@components/forum/ForumFilter'
import ForumHeading from '@components/forum/ForumHeading'
import ForumWrapper from '@components/forum/ForumWrapper'
import ForumHeadingBody from '@components/forum/ForumHeadingBody'
import ForumTopicsList from '@components/forum/ForumTopicsList'
import { setPopupState } from '@redux/slices/popupSlice'

function Forum() {
  const goToTopRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setPopupState({ isShow: false }))
    }
  }, [])

  return (
    <Page hasHeader hasFooter hasTooltip hasLoginPopup>
      <ForumBackground ref={goToTopRef}>
        <ForumWrapper>
          <ForumHeadingBody>
            <ForumHeadingRow>
              <ForumHeading>Top questions</ForumHeading>
              <AskQuestion />
            </ForumHeadingRow>
            <ForumFilter />
          </ForumHeadingBody>
          <ForumTopicsList goToTopRef={goToTopRef} />
        </ForumWrapper>
      </ForumBackground>
    </Page>
  )
}

export default Forum
