import GreyLibraryBox from '@components/library/GreyLibraryBox'
import LibraryContainer from '@components/library/LibraryContainer'
import LibraryList from '@components/library/LibraryList'
import StillageHeading from '@components/stillage/StillageHeading'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageWrapper from '@components/stillage/StillageWrapper'

function Library() {
  return (
    <LibraryContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>Library</StillageHeading>
        </StillageHeadingRow>
        <GreyLibraryBox>
          <LibraryList />
        </GreyLibraryBox>
      </StillageWrapper>
    </LibraryContainer>
  )
}

export default Library
