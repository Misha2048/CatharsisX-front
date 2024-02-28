import { useRef } from 'react'

import ForumHeadingRow from '@components/forum/ForumHeadingRow'
import Page from '@components/Page'
import AskQuestionBtn from '@components/forum/AskQuestionBtn'
import ForumBackground from '@components/forum/ForumBackground'
import ForumFilter from '@components/forum/ForumFilter'
import ForumFilterBtn from '@components/forum/ForumFilterBtn'
import ForumHeading from '@components/forum/ForumHeading'
import ForumWrapper from '@components/forum/ForumWrapper'
import HeadingContainer from '@components/forum/HeadingContainer'
import TopicsList from '@components/forum/TopicsList'

function Forum() {
  const goToTopRef = useRef<HTMLDivElement | null>(null)

  return (
    <Page hasHeader hasFooter>
      <ForumBackground ref={goToTopRef}>
        <ForumWrapper>
          <HeadingContainer>
            <ForumHeadingRow>
              <ForumHeading>Top questions</ForumHeading>
              <AskQuestionBtn>Ask Question</AskQuestionBtn>
            </ForumHeadingRow>
            <ForumFilter>
              <ForumFilterBtn isActive={true}>Interesting</ForumFilterBtn>
              <ForumFilterBtn isActive={false}>Hot</ForumFilterBtn>
              <ForumFilterBtn isActive={false}>Week</ForumFilterBtn>
              <ForumFilterBtn isActive={false}>Month</ForumFilterBtn>
              <ForumFilterBtn isActive={false}>Year</ForumFilterBtn>
            </ForumFilter>
          </HeadingContainer>
          <TopicsList goToTopRef={goToTopRef} />
        </ForumWrapper>
      </ForumBackground>
    </Page>
  )
}

export default Forum
