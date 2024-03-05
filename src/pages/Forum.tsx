import { useRef } from 'react'

import ForumHeadingRow from '@components/forum/ForumHeadingRow'
import Page from '@components/Page'
import AskQuestionBtn from '@components/forum/AskQuestionBtn'
import ForumBackground from '@components/forum/ForumBackground'
import ForumFilter from '@components/forum/ForumFilter'
import ForumHeading from '@components/forum/ForumHeading'
import ForumWrapper from '@components/forum/ForumWrapper'
import ForumHeadingBody from '@components/forum/ForumHeadingBody'
import ForumTopicsList from '@components/forum/ForumTopicsList'

function Forum() {
  const goToTopRef = useRef<HTMLDivElement | null>(null)

  return (
    <Page hasHeader hasFooter>
      <ForumBackground ref={goToTopRef}>
        <ForumWrapper>
          <ForumHeadingBody>
            <ForumHeadingRow>
              <ForumHeading>Top questions</ForumHeading>
              <AskQuestionBtn>Ask Question</AskQuestionBtn>
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
